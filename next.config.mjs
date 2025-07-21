/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'fra.cloud.appwrite.io',
          port: '',
          pathname: '/v1/storage/**',
        },
        {
          protocol: 'https',
          hostname: '*.cloud.appwrite.io', // This covers all Appwrite regions
          port: '',
          pathname: '/v1/storage/**',
        },
      ],
    },
  };
  
  export default nextConfig;