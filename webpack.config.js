const path = require('path');
const nodeExternals = require('webpack-node-externals');

/** @type {import('webpack').Configuration[]} */
module.exports = [
    {
        mode: 'production',
        entry: './lib/index.worker.ts',
        devtool: 'source-map',
        target: 'web',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: {
                        loader: 'ts-loader',
                        options: {
                            compilerOptions: {
                                lib: ['ES2020', 'WebWorker'],
                                target: 'ES2020',
                            },
                        },
                    },
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.ts', '.js'],
        },
        output: {
            filename: 'index.worker.js',
            path: path.resolve(__dirname, 'dist', 'lib'),
        },
    },
    {
        mode: 'production',
        entry: './lib/index.node.ts',
        devtool: 'source-map',
        target: 'node',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        externals: [nodeExternals()],
        resolve: {
            extensions: ['.ts', '.js'],
        },
        output: {
            filename: 'index.node.js',
            path: path.resolve(__dirname, 'dist', 'lib'),
        },
    },
];
