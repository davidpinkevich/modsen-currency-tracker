import path from "path";
import webpack from "webpack";
import { buildWebpack } from "./config/webpack/buildWebpack";
import { BuildMode, BuildPaths } from "config/webpack/types";

interface EnvVariables {
  mode: BuildMode;
  port: number;
}

export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    output: path.resolve(__dirname, "build"),
    entry: path.resolve(__dirname, "src/", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
    assets: path.resolve(__dirname, "src", "assets"),
    mocks: path.resolve(__dirname, "mocks"),
    hooks: path.resolve(__dirname, "src", "hooks"),
    styles: path.resolve(__dirname, "src", "styles"),
    services: path.resolve(__dirname, "src", "services"),
    components: path.resolve(__dirname, "src", "components"),
    constants: path.resolve(__dirname, "src", "constants"),
    pages: path.resolve(__dirname, "src", "pages"),
    utils: path.resolve(__dirname, "src", "utils")
  };
  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? "development",
    paths
  });
  return config;
};
