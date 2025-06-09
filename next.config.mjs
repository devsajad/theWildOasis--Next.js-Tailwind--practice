/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      new URL(
        "https://lvxbofzfpvxbqmccnrss.supabase.co/storage/v1/object/public/cabin-images/**"
      ),
    ],
  },
  experimental: {
    ppr: "incremental",
  },
};

export default nextConfig;
