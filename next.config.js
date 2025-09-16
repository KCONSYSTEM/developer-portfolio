const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-images-1.medium.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
    ],
  },
  // images: {
  //   remotePatterns: [
  // {
  //   protocol: 'https',
  //   hostname: 'res.cloudinary.com',
  //   pathname: '**',
  // },
  //     {
  //       protocol: 'https',
  //       hostname: 'media.dev.to',
  //       pathname: '**',
  //     },
  //     {
  //       protocol: 'https',
  //       hostname: 'media2.dev.to',
  //       pathname: '**',
  //     },
  //   ],
  // },
}