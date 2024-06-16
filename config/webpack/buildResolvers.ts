import { Configuration } from "webpack";
import { BuildOptions } from "./types";

export function buildResolvers(
  options: BuildOptions
): Configuration["resolve"] {
  return {
    alias: {
      "@src": options.paths.src,
      "@assets": options.paths.assets,
      "@components": options.paths.components,
      "@mocks": options.paths.mocks,
      "@styles": options.paths.styles,
      "@hooks": options.paths.hooks,
      "@services": options.paths.services,
      "@constants": options.paths.constants,
      "@pages": options.paths.pages,
      "@utils": options.paths.utils,
      "@redux": options.paths.redux
    },
    extensions: [".tsx", ".ts", ".js"]
  };
}
