import babel from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";

export default [{
    input: './src/main.js',
    output: {
        file: './build/name-caser.min.js',
        format: 'umd',
        name: 'nameCaser'
    },
    plugins: [
        babel({
            exclude: 'node_modules/**'
        }),
        terser()
    ]
}, {
    input: './src/main.js',
    output: {
        file: './build/name-caser.js',
        format: 'es'
    },
    plugins: [
        babel({
            exclude: 'node_modules/**'
        })
    ]
}]
