import alias from "@rollup/plugin-alias";
import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import eslint from "@rollup/plugin-eslint";
import resolve from "@rollup/plugin-node-resolve";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
import path from "path";
import external from "rollup-plugin-peer-deps-external";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";

const packageJson = require("./package.json");

export default {
    input: "src/index.js",
    output: [
        {
            file: packageJson.main,
            format: "cjs",
            sourcemap: true,
        },
        {
            file: packageJson.module,
            format: "esm",
            sourcemap: true,
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
        nodeResolve(),
        url(),
        postcss({
            extensions: [".css"],
        }),
    ],
};
