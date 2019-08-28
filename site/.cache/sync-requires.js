const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---gatsby-theme-blog-src-templates-blog-post-list-js": hot(preferDefault(require("C:\\Home\\repos\\statik-gatsby\\gatsby-theme-blog\\src\\templates\\blog-post-list.js"))),
  "component---gatsby-theme-blog-src-templates-blog-post-js": hot(preferDefault(require("C:\\Home\\repos\\statik-gatsby\\gatsby-theme-blog\\src\\templates\\blog-post.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\Home\\repos\\statik-gatsby\\site\\.cache\\dev-404-page.js")))
}

