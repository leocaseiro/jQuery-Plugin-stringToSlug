module.exports = function() {
    var dist = './dist/',
        config = {
            js   : './dist/js/*.js',

            // JS
            jsDir: './*.js',

            //Dest
            jsDirDest: dist + './js/'
        };

    return config;
};
