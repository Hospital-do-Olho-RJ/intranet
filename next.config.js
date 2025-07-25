const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? '/intranet/' : '',
  basePath: isProd ? '/intranet' : '',
  images: {
    unoptimized: true,
  },
};
