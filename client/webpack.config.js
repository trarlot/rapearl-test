const nrwlConfig = require('@nrwl/react/plugins/webpack.js');

module.exports = (config, context) => {
    config.module.rules.push({
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-react', '@babel/preset-env'],
                plugins: ['@babel/plugin-transform-react-jsx'],
            },
        },
    });
    // first call it so that @nrwl/react plugin adds its configs
    nrwlConfig(config);

    return {
        ...config,
        resolve: {
            ...config.resolve,
            alias: {
                ...config.resolve.alias,
                stream: require.resolve('stream-browserify'),
                zlib: require.resolve('browserify-zlib'),
            },
        },
    };
};
