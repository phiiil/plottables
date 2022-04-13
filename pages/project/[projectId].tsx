import { useWalletContext } from "@/components/common/WalletProvider";
import Container from "@/components/Container";
import { calendar } from "@/config/index";
import {
  projectDetails,
  projectScriptInfo,
  projectTokenInfo,
} from "@/lib/coreContract";
import { connectWallet, purchase, waitForConfirmation } from "@/lib/interact";
import {
  ProjectDetails,
  ProjectScriptInfo,
  ProjectTokenInfo,
} from "@/lib/types";
import styles from "@/styles/Project.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

interface ProjectProps {
  projectId: string;
  projectDetails: ProjectDetails;
  projectTokenInfo: ProjectTokenInfo;
  projectScriptInfo: ProjectScriptInfo;
}

export default function Project(project: ProjectProps) {
  const router = useRouter();
  const walletAddress = useWalletContext();
  const [offset, setOffset] = useState(0);
  const [tokens, setTokens] = useState<Array<string>>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [countConfirmations, setCountConfirmations] = useState(0);
  const [releaseDate, setReleaseDate] = useState("TBD");

  useEffect(() => {
    if (
      process.env.NEXT_PUBLIC_ETH_NETWORK == "main" &&
      project.projectId in calendar
    ) {
      const date = new Date(
        calendar[project.projectId as unknown as keyof typeof calendar]
      );
      setReleaseDate(
        date.toLocaleString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZoneName: "short",
          hour: "numeric",
        })
      );
    }
  }, []);

  let scriptType;
  try {
    scriptType = JSON.parse(project.projectScriptInfo.scriptJSON).type;
  } catch {
    scriptType = "";
  }

  useEffect(() => {
    let tokens = [];
    for (
      let i = offset;
      i <
      Math.min(
        offset + Number(process.env.NEXT_PUBLIC_PROJECT_GALLERY_PER_PAGE!),
        Number(project.projectTokenInfo.invocations)
      );
      i++
    ) {
      tokens.push(i.toString());
    }
    setTokens(tokens);
  }, [offset, project.projectTokenInfo.invocations]);

  const handlePageClick = (data: { selected: number }) => {
    setOffset(
      Math.ceil(
        data.selected *
          Number(process.env.NEXT_PUBLIC_PROJECT_GALLERY_PER_PAGE!)
      )
    );
  };

  const handlePurchaseClick = async () => {
    if (walletAddress.length === 0) {
      await connectWallet();
    }
    const transaction = await purchase(project.projectId);
    if (transaction) {
      setIsProcessing(true);
      await waitForConfirmation(transaction, 1);
      setCountConfirmations(1);
      await waitForConfirmation(transaction, 2);
      setCountConfirmations(2);
      const tokenId = await waitForConfirmation(transaction, 3);
      setCountConfirmations(3);
      await router.push("/token/" + tokenId);
    }
  };

  return (
    <Container>
      <div
        className={styles.overlay}
        style={{
          display: isProcessing ? "block" : "none",
        }}
      >
        <div>processing... {countConfirmations} / 3</div>
      </div>
      <br />
      {project.projectDetails.projectName} by {project.projectDetails.artist}
      <br />
      <br />
      <a
        href={project.projectDetails.website}
        className={styles.projectWebsite}
      >
        {project.projectDetails.website}
      </a>
      <br />
      <br />
      <span style={{ whiteSpace: "pre-wrap" }}>
        {project.projectDetails.description}
      </span>
      <br />
      <br />
      Release Date: {releaseDate}
      <br />
      <br />
      Total Minted: {project.projectTokenInfo.invocations} /{" "}
      {project.projectTokenInfo.maxInvocations}
      <br />
      <br />
      Price per token:{" "}
      {parseInt(project.projectTokenInfo.pricePerTokenInWei) /
        1000000000000000000}{" "}
      {project.projectTokenInfo.currency}
      <br />
      <br />
      License: {project.projectDetails.license}
      <br />
      <br />
      Script: {scriptType}
      <br />
      <br />
      {
        <div
          className={`${styles.purchaseButton} ${styles.highlight}`}
          onClick={handlePurchaseClick}
        >
          {walletAddress.length === 0
            ? "Connect Wallet to Purchase"
            : project.projectTokenInfo.invocations ==
              project.projectTokenInfo.maxInvocations
            ? "Sold Out"
            : !project.projectScriptInfo.paused &&
              project.projectTokenInfo.active
            ? "Purchase"
            : "Purchases Paused"}
        </div>
      }
      <br />
      {walletAddress.toLowerCase() ===
      project.projectTokenInfo.artistAddress.toLowerCase() ? (
        <a
          href={
            process.env.NEXT_PUBLIC_ETH_NETWORK === "main"
              ? `https://artblocks.io/project/0xa319c382a702682129fcbf55d514e61a16f97f9c-${project.projectId}`
              : `https://artist-staging.artblocks.io/project/0xd10e3dee203579fcee90ed7d0bdd8086f7e53beb-${project.projectId}`
          }
          target="_blank"
          rel="noreferrer"
        >
          Edit Project
        </a>
      ) : null}
      <div>
        <br />
        <div className={styles.galleryContainer}>
          {tokens.map((t) => {
            return (
              <div key={t} className={styles.token}>
                <Link
                  href={
                    "/token/" +
                    (parseInt(t) + 1000000 * parseInt(project.projectId))
                  }
                >
                  <a>#{t}</a>
                </Link>
                <img
                  src={`/api/image.png?token=${
                    parseInt(t) + 1000000 * parseInt(project.projectId)
                  }`}
                  // src={
                  //   imageBaseUrl +
                  //   (parseInt(t) + 1000000 * parseInt(project.projectId)) +
                  //   ".png"
                  // }
                  alt={"an image"}
                />
              </div>
            );
          })}
        </div>

        <ReactPaginate
          previousLabel={"←"}
          nextLabel={"→"}
          breakLabel={"..."}
          pageCount={
            Number(project.projectTokenInfo.invocations) /
            Number(process.env.NEXT_PUBLIC_PROJECT_GALLERY_PER_PAGE!)
          }
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={styles.pagination}
          activeClassName={styles.active}
        />
        <br />
      </div>
    </Container>
  );
}

export const getServerSideProps: ({ params }: { params: any }) => Promise<
  | { notFound: boolean }
  | {
      props: {
        projectTokenInfo: string;
        projectId: string;
        projectDetails: string;
        projectScriptInfo: string;
      };
    }
> = async ({ params }) => {
  const projectId = params?.projectId;

  if (!projectId) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      projectId: projectId,
      projectDetails: await projectDetails(projectId),
      projectTokenInfo: await projectTokenInfo(projectId),
      projectScriptInfo: await projectScriptInfo(projectId),
    },
  };
};
