const path = require('path')
const isGithubPages = process.env.NODE_ENV === "production";
module.exports = {
  assetPrefix: isGithubPages ? '/my-profile/' : '',
  basePath: isGithubPages ? '/my-profile' : '',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media2.dev.to',
        pathname: '**',
      }
    ]
  }
}