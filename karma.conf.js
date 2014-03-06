
module.exports = function(config) {
    var pkg = require('./package.json');
    config.set({
        sauceLabs: {
            startConnect: true,
            testName: 'TypertextTests',
            recordScreenshots: false
        },
        basePath: __dirname,
        frameworks: ['jasmine'],
        files: [
            'test/**/*.js',
            pkg.build.directory + "/" + pkg.build.baseArtifact + ".js"
        ],
        plugins: [
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-sauce-launcher',
            'karma-chrome-launcher'
        ]
    });
};