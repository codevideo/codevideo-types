import typescript from "rollup-plugin-typescript2";
import dts from "rollup-plugin-dts";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

export default [
  // standard ES package - used in browser environments
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.js", // ES Module format for browsers
        format: "es",
      },
      {
        file: "dist/index.cjs", // CommonJS format for Node.js
        format: "cjs",
      }
    ],
    plugins: [
      resolve(), // resolve node_modules
      commonjs(), // convert CommonJS to ES modules
      typescript(),
    ],
  },
  // type declarations
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.d.ts",
        format: "es",
      },
    ],
    plugins: [dts()],
  },
];
