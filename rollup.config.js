import alias from "@rollup/plugin-alias";
import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import eslint from "@rollup/plugin-eslint";
import resolve from "@rollup/plugin-node-resolve";
import path from "path";
import external from "rollup-plugin-peer-deps-external";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
export default {
    input: "./src/index.js",
    output: [
        {
            file: "dist/index.js",
            format: "cjs",
        },
    ],
    plugins: [
        alias({
            entries: [
                {
                    find: "@/components", // eslint-disable-next-line no-undef
                    replacement: path.resolve(__dirname, "src/components"),
                },
            ],
        }),
        peerDepsExternal(),
        resolve(),
        commonjs(),
        external(),
        terser(),
        eslint({
            fix: true,
        }),
        babel({
            babelHelpers: "bundled",
            presets: [["solid", { generate: "ssr", hydratable: true }]],
            extensions: [".js", ".ts", ".jsx", ".tsx"],
        }),
    ],
};
