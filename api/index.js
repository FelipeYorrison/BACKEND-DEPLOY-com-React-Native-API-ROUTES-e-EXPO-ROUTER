const { createRequestHandler } = require("@expo/server/adapter/vercel")

module.exports = createRequestHandler({
    buiild: require("path").join(__dirname, "../dist/server"),
    mode: process.env.NODE_ENV,
})