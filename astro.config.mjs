import { defineConfig } from "astro/config";

// GitHub Pages serves a repo named "<user>.github.io" at the root of
// https://<user>.github.io, and any other repo under /<repo-name>/.
// GITHUB_REPOSITORY ("owner/repo") is set automatically inside GitHub Actions.
const [owner = "wagamela", repo = "wagamela.github.io"] = (
  process.env.GITHUB_REPOSITORY ?? ""
).split("/").filter(Boolean);
const isUserSite = repo.toLowerCase() === `${owner.toLowerCase()}.github.io`;

export default defineConfig({
  site: `https://${owner.toLowerCase()}.github.io`,
  base: isUserSite ? "/" : `/${repo}`,
});
