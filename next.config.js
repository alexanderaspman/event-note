const { hostname } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname: 'res.cloudinary.com'},
              { 
                protocol: "https", 
                hostname:'media.crystallize.com' 

              }
        ]
    }
}

module.exports = nextConfig
