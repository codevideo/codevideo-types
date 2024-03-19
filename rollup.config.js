import typescript from "rollup-plugin-typescript2";
import dts from 'rollup-plugin-dts';

export default [
  // standard ES package - used in browser environments
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.js",
      format: "es",
    },
    plugins: [typescript()],
  },
  // commonjs bundle - used in node environments
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.cjs",
      format: "cjs",
    },
    plugins: [typescript()],
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
    plugins: [
      dts(),
    ],
  },
];
