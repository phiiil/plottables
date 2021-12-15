import coreContract from "@/lib/coreContract";
import getScript from "@/lib/getScript";

export default async function handler(
  req: { query: { tokenId: any } },
  res: { send: (arg0: string) => void }
) {
  const { tokenId } = req.query;

  const hash = await coreContract.methods.tokenIdToHash(tokenId).call();
  const projectId = await coreContract.methods
    .tokenIdToProjectId(tokenId)
    .call();
  let script = await getScript(projectId);

  res.send(`
        <html>
            <head>
                <title>${tokenId}</title>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js"></script>
                <script>
                    let tokenData = {"hash":"${hash}"};
                </script>
                <script>
                    ${script}
                </script>
                <style type="text/css">
                    body {
                        margin: 0;
                        padding: 0;
                    }
                    svg {
                        width: 100%;
                        height: 100%;
                    }
                </style>
            </head>
        </html>
    `);
}
