const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin");
function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    lintOnSave: false,
    // 基本路径
    // publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    publicPath: "/",
    // 输出文件目录
    // outputDir: "build/project",
    outputDir: process.env.outputDir,
    // eslint-loader 是否在保存的时候检查
    // lintOnSave: true,
    // build时放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
    assetsDir: "",
    pages: {
        index: {
            // page 的入口
            entry: "src/main.js",
            // 模板来源
            template: "public/index.html",
            // 在 dist/index.html 的输出
            filename: "index.html",
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: "Index Page",
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ["chunk-vendors", "chunk-common", "index"]
        },
        // 当使用只有入口的字符串格式时，
        // 模板会被推导为 `public/subpage.html`
        // 并且如果找不到的话，就回退到 `public/index.html`。
        // 输出文件名会被推导为 `subpage.html`。
        subpage: "src/main.js"
    },
    // use the full build with in-browser compiler?
    // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
    // compiler: true,
    // vue-loader 配置项
    // https://vue-loader.vuejs.org/en/options.html
    // vueLoader: {},
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,
    transpileDependencies: [],
    // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        // extract: false,
        // 开启 CSS source maps
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {
            less: {
                modifyVars: {
                    "primary-color": "#006fc3",
                    "link-color": "#1DA57A",
                    "layout-body-background": "#fff"
                },
                javascriptEnabled: true
            }
        },
        // 启用 CSS modules for all css / pre-processor files.
        modules: false
    },
    pluginOptions: {
        "style-resources-loader": {
            preProcessor: "less",
            patterns: [resolve("/src/assets/style/common.less")]
        }
    },
    // webpack-dev-server 相关配置
    devServer: {
        port: "8080",
        proxy: {
            "/laowu": {
                // 接口地址
                target: "http://www.51teleyi.com/laowu",
                ws: true,
                changeOrigin: true
            }
        }
    },
    // webpack配置
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: config => {
        config.plugins.delete("prefetch"),
            config.resolve.alias.set("@", resolve("src"));
        if (process.env.NODE_ENV === "production") {
            // #region 启用GZip压缩
            config
                .plugin("compression")
                .use(CompressionPlugin, {
                    asset: "[path].gz[query]",
                    algorithm: "gzip",
                    test: new RegExp("\\.(" + ["js", "css"].join("|") + ")$"),
                    threshold: 10240,
                    minRatio: 0.8,
                    cache: true
                })
                .tap(args => {});
            // #endregion
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                "@ant-design/icons/lib/dist$": path.resolve(
                    __dirname,
                    "./src/icons.js"
                )
            }
        },
        plugins: [
            new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn/)
        ]
    }
};
