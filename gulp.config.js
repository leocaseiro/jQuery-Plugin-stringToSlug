module.exports = function() {
    var assets = './src/',
        dist = './dist/',
        config = {
            // Src
            jsSrc: assets + './*.js',

            //Dest
            jsDest: dist
        };

    return config;
};
