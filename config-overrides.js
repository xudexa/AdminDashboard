const path = require('path');

module.exports = function override(config, env) {
    config["resolve"] = {
        alias: {
            '@assets': path.resolve(__dirname, 'src/assets/'),
            '@img': path.resolve(__dirname, 'src/assets/img/'),
            '@fonts': path.resolve(__dirname, 'src/assets/fonts/'),
            '@styles': path.resolve(__dirname, 'src/assets/styles/'),
            '@components': path.resolve(__dirname, 'src/components/'),
            '@domain': path.resolve(__dirname, 'src/assets/domain/'),
            '@hooks': path.resolve(__dirname, 'src/hooks/'),
            '@scenes': path.resolve(__dirname, 'src/scenes/'),
            '@services': path.resolve(__dirname, 'src/services/'),
            '@stores': path.resolve(__dirname, 'src/services/stores/'),
            '@security': path.resolve(__dirname, 'src/services/security/'),
            '@routes': path.resolve(__dirname, 'src/routes/'),
            '@tools': path.resolve(__dirname, 'src/tools/'),
        },
        extensions: ['.js','.jsx','.css','.scss']
    }

    return config;
}