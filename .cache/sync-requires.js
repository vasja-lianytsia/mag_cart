const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-item-js": hot(preferDefault(require("L:\\git\\oselya\\src\\templates\\item.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("L:\\git\\oselya\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("L:\\git\\oselya\\src\\pages\\404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("L:\\git\\oselya\\src\\pages\\index.js"))),
  "component---src-pages-product-js": hot(preferDefault(require("L:\\git\\oselya\\src\\pages\\product.js")))
}

