module.exports = {
    images: {
        domains: ['static.spwashi.com'],
    },
    webpack:
            config => {
                config.module.rules.push({
                                             test: /\.svg$/,
                                             use:  ['@svgr/webpack'],
                                         });
                return config;
            }
};