import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";

const pkg = require("./package.json");

const external = [
  ...(pkg.dependencies ? Object.keys(pkg.dependencies) : []),
  ...(pkg.devDependencies ? Object.keys(pkg.devDependencies) : []),
  ...(pkg.peerDependencies ? Object.keys(pkg.peerDependencies) : []),
];

const baseOutput = {
  dir: "lib",
  sourcemap: true,
  exports: "named",
};

const plugins = [
  postcss({
    modules: true,
    extract: true,
    minimize: true,
    inject: false,
  }),
  resolve({
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  }),
  commonjs(),
  typescript({
    outDir: "lib",
    declarationDir: "lib",
    declaration: true,
    rootDir: "src",
  }),
];

export default [
  {
    input: ["src/index.ts"],
    output: [
      {
        ...baseOutput,
        format: "esm",
      },
      {
        ...baseOutput,
        format: "cjs",
        entryFileNames: "[name].cjs",
      },
    ],
    external,
    plugins,
  },
];
