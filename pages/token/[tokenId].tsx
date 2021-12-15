import Container from "@/components/Container";
import { coreContractAddress, imageBaseUrl, liveBaseUrl } from "@/config/index";
import {
  ownerOf,
  projectDetails,
  projectScriptInfo,
  tokenIdToProjectId,
} from "@/lib/coreContract";
import { ProjectDetails, ProjectScriptInfo } from "@/lib/types";
import styles from "@/styles/Token.module.css";
import Link from "next/link";

interface TokenProps {
  tokenId: string;
  projectId: string;
  ownerOf: string;
  projectDetails: ProjectDetails;
  projectScriptInfo: ProjectScriptInfo;
  features: Object;
}

export default function Token({
  tokenId,
  projectId,
  ownerOf,
  projectDetails,
  projectScriptInfo,
  features,
}: TokenProps) {
  let scale;
  try {
    scale = 1 / JSON.parse(projectScriptInfo.scriptJSON).aspectRatio;
  } catch {
    scale = 1;
  }

  return (
    <Container>
      <div className={styles.viewOptions}>
        <Link href={`/project/${projectId}`}>
          <a>Visit the {projectDetails.projectName} Gallery</a>
        </Link>
      </div>
      <br />
      <div className={styles.viewOptions}>
        {projectDetails.projectName} #
        {parseInt(tokenId) - 1000000 * parseInt(projectId)} by{" "}
        {projectDetails.artist}
      </div>
      <div className={styles.viewOptions}>
        Owned by{" "}
        <Link href={`/user/${ownerOf}`}>
          <a>{ownerOf.toLowerCase().substring(0, 8)}</a>
        </Link>
      </div>
      <br />
      <div className={styles.container}>
        <div className={styles.tokenInfo}>
          <br />
          <br />
          <div className={styles.viewOptions}>
            <a
              href={
                "https://opensea.io/assets/0xa319c382a702682129fcbf55d514e61a16f97f9c/" +
                tokenId
              }
              target="_blank"
              rel="noreferrer"
            >
              View on OpenSea
            </a>
          </div>
          <br />
          <div className={styles.viewOptions}>Features</div>
          <div className={`${styles.featuresContainer} ${styles.highlight}`}>
            {features
              ? Object.keys(features).map(function (key: string, index) {
                  return (
                    <div key={key} className={styles.feature}>
                      {key}: {features[key as keyof typeof features]}
                    </div>
                  );
                })
              : null}
          </div>
        </div>
        <div className={styles.tokenLive}>
          <div className={styles.viewOptions}>
            <a href={`/token/${tokenId}/plot`} target="_blank" rel="noreferrer">
              plot
            </a>
            <a
              href={`/api/token/${tokenId}/svg`}
              target="_blank"
              rel="noreferrer"
            >
              svg
            </a>
            <a
              href={imageBaseUrl + tokenId + ".png"}
              target="_blank"
              rel="noreferrer"
            >
              image
            </a>
            <a href={liveBaseUrl + tokenId} target="_blank" rel="noreferrer">
              live
            </a>
          </div>
          <div className={styles.liveviewContainer}>
            <iframe
              className={styles.liveview}
              src={liveBaseUrl + tokenId}
              style={{
                width: "500px",
                height: "calc(" + scale + "*500px)",
              }}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export const getServerSideProps: ({ params }: { params: any }) => Promise<
  | { notFound: boolean }
  | {
      props: {
        tokenId: string;
        ownerOf: string;
        projectId: string;
        projectDetails: string;
        projectScriptInfo: string;
      };
    }
> = async ({ params }) => {
  const tokenId = params?.tokenId;

  if (!tokenId) {
    return {
      notFound: true,
    };
  }

  const res = await fetch(
    process.env.NEXT_PUBLIC_ETH_NETWORK === "main"
      ? `https://token.artblocks.io/${coreContractAddress.toLowerCase()}/${tokenId}`
      : `https://token.staging.artblocks.io/${coreContractAddress.toLowerCase()}/${tokenId}`
  );
  const data = await res.json();

  const projectId = await tokenIdToProjectId(tokenId);

  return {
    props: {
      tokenId: tokenId,
      projectId: projectId,
      ownerOf: await ownerOf(tokenId),
      projectDetails: await projectDetails(projectId),
      projectScriptInfo: await projectScriptInfo(projectId),
      features: data.features ? data.features : null,
    },
  };
};
