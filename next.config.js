/** @type {import("next").NextConfig} */
// Written by the MedReception website builder (code, not a model). Redirects run
// BEFORE the filesystem, so no rule here may name a path the site serves; the builder
// checks every source against the final route set and every destination exists.
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  async redirects() {
    return [
      { source: '/privacy', destination: '/privacy-sms', permanent: true },
      { source: '/privacy-policy', destination: '/privacy-sms', permanent: true },
      { source: '/terms', destination: '/terms-sms', permanent: true },
      { source: '/terms-of-service', destination: '/terms-sms', permanent: true },
      { source: '/sms-terms', destination: '/terms-sms', permanent: true },
      // The old site's URLs that have no page of the same path here.
      { source: '/contactdraft', destination: '/contact', permanent: true },
      { source: '/about-1', destination: '/about', permanent: true },
      { source: '/kristidraft', destination: '/', permanent: true },
      { source: '/servicesdraft', destination: '/services', permanent: true },
      { source: '/home', destination: '/', permanent: true },
      { source: '/about-2-1', destination: '/about', permanent: true },
      { source: '/philosophy', destination: '/about', permanent: true },
      { source: '/home-1-1-1', destination: '/', permanent: true },
      { source: '/about-2-1-1', destination: '/about', permanent: true },
      { source: '/services-1', destination: '/services', permanent: true },
      { source: '/home-1-1', destination: '/', permanent: true },
      { source: '/kristi', destination: '/', permanent: true },
      { source: '/home-1', destination: '/', permanent: true },
      { source: '/contact-1', destination: '/contact', permanent: true },
      { source: '/test', destination: '/', permanent: true },
      { source: '/cart', destination: '/', permanent: true },
    ];
  },
};
module.exports = nextConfig;
