module.exports = {
    css: {
        extract: false
    },
    chainWebpack: config => {
        config
            .plugin("html")
            .tap(args => {
                if (process.env.DEMO) {
                    args[0].template = "./ui/public/index.html"
                }
                return args
            })
    }
}
