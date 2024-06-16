export interface BuildPaths {
  entry: string;
  html: string;
  output: string;
  src: string;
  assets: string;
  mocks: string;
  hooks: string;
  services: string;
  components: string;
  constants: string;
  pages: string;
  utils: string;
  styles: string;
  favicon: string;
  redux: string;
}

export type BuildMode = "production" | "development";

export interface BuildOptions {
  port: number;
  paths: BuildPaths;
  mode: BuildMode;
}
