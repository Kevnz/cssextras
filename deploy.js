var gh = require('gh-pages');
var path = require('path');
var fs = require('fs');
if (!fs.existsSync('./dist')) {
    fs.mkdirSync('dist');
}
fs.readFile('./css/pure-extras.css', function (err, data) {
    if (err) {
        throw err;
    }
    fs.writeFile('./dist/pure-extras.css', data, function (err) {
        fs.writeFile('./dist/css/pure-extras.css', data, function (err) {
            if (err) {
                throw err;
            }
            fs.readFile('./docs/index.html', function (err, markup) {
                if (err) {
                    throw err;
                }
                fs.writeFile('./dist/index.html', markup, function (err) {
                    if (err) {
                        throw err;
                    }
                    gh.publish(path.join(__dirname, 'dist'));
                });
            });
        });
    });
});
