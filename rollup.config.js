import { babel } from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default [
    {
        input: "./src/index.js",
        output: [
            {
                file: "dist/index.js",
                format: "cjs",
            },
            {
                file: "dist/index.es.js",
                format: "es",
                exports: "named",
            },
        ],
        plugins: [
            babel({
                exclude: "node_modules/**",
                plugins: ["babel-plugin-styled-components"],
                presets: ["@babel/preset-react"],
            }),
            external(),
            resolve(),
            terser(),
        ],
    },
];
