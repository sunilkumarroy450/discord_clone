/** @type {import('next').NextConfig} */
const nextConfig = {
  // images:{
  //     domains:["utfs.io"]
  // }//it id deprecated,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "", //need to specify a custom port
        pathname: "/**", //match all path
      },
    ],
  },
};

export default nextConfig;
