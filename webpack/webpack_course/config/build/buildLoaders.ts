import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {ModuleOptions} from "webpack";
import {BuildOptions} from "./types/types";
import ReactRefreshTypeScript from "react-refresh-typescript"

export function buildLoaders(options: BuildOptions): ModuleOptions['rules']{
    const isDev = options.mode === 'development';

    const cssLoaderWithModules =                 {
        loader: 'css-loader',
        options: {
            modules: {
                localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
            }
        }
    }

    const assetLoader = {
            test: /\.(png|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
    }

    const svgrLoader = {
        test: /\.svg$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true,
                    svgoConfig: {
                        plugins: [
                            {
                                name: 'convertColors',
                                params: {
                                    currentColor: true
                                }
                            }
                        ]
                    }
                }
            }
        ]
    }

    const scssLoader = {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                // "style-loader",
                isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                // Translates CSS into CommonJS
                cssLoaderWithModules,
                // Compiles Sass to CSS
                "sass-loader"
            ]
    }

    const tsLoader = {
        // ts-loader умеет работать с JSX
        // Если бы мы не использовали type script: нужен был бы babel-loader
        test: /\.tsx?$/, // regular для обработки ts & tsx
        // use: 'ts-loader', // название loader
        exclude: /node_modules/, // то что не обрабатываем

        use: [
            {
                loader: 'ts-loader',
                options: {
                    // в true быстрее сборка в два раза идет, но TS ошибки пролетают в нее
                    transpileOnly: true, // or (isDev) or (isProd)
                    getCustomTransformers: () => ({
                        before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
                    }),
                }
            }
        ]
    }

    const babelLoader = {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: [
                    '@babel/preset-env',
                    '@babel/preset-typescript',
                    [
                        "@babel/preset-react",
                        {
                            runtime: isDev ? 'automatic' : 'classic',
                        }
                    ],
                ]
            }
        }
    }

    return [
        assetLoader,
        scssLoader,
        // tsLoader,
        babelLoader,
        svgrLoader
    ]
}
