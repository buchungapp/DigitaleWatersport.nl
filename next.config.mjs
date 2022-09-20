import rehypePrism from '@mapbox/rehype-prism'
import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['jsx', 'tsx', 'mdx'],
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: ['src'],
  },
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
    images: {
      allowFutureImage: true,
    },
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

export default withMDX(nextConfig)
