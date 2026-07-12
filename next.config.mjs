const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] || "";
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const isUserOrOrgPage = repositoryName.endsWith(".github.io");
const basePath = isGitHubActions && repositoryName && !isUserOrOrgPage ? `/${repositoryName}` : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  eslint: {
    ignoreDuringBuilds: false
  }
};

export default nextConfig;
