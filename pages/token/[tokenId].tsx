import Container from "@/components/Container";
import { imageBaseUrl, liveBaseUrl } from "@/config/index";
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
}

export default function Token({
  tokenId,
  projectId,
  ownerOf,
  projectDetails,
  projectScriptInfo,
}: TokenProps) {
  return (
    <Container>
      <br />
      {projectDetails.projectName} #
      {parseInt(tokenId) - 1000000 * parseInt(projectId)} by{" "}
      {projectDetails.artist}
      <br />
      <br />
      <a href={projectDetails.website}>{projectDetails.website}</a>
      <br />
      <br />
      {projectDetails.description}
      <br />
      <br />
      Owned by{" "}
      <Link href={`/user/${ownerOf}`}>
        <a>{ownerOf.toLowerCase().substring(0, 8)}</a>
      </Link>
      <br />
      <br />
      <div className={styles.viewOptions}>
        <a href={`/token/${tokenId}/plot`} target="_blank" rel="noreferrer">
          plot
        </a>
        <a href={`/api/tokens/${tokenId}/svg`} target="_blank" rel="noreferrer">
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
            height:
              "calc(" +
              1 / JSON.parse(projectScriptInfo.scriptJSON).aspectRatio +
              "*500px)",
          }}
        />
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

  const projectId = await tokenIdToProjectId(tokenId);

  return {
    props: {
      tokenId: tokenId,
      projectId: projectId,
      ownerOf: await ownerOf(tokenId),
      projectDetails: await projectDetails(projectId),
      projectScriptInfo: await projectScriptInfo(projectId),
    },
  };
};
