const path = require('path');

// Checks if the path is absolute
const isAbsolutePath = (dirName) => path.isAbsolute(dirName);
// Resolve the path to make it absolute
const resolvePath = (dirName) => path.resolve(dirName);
//Join path
const pathJoin = (dirName, param2) => path.join(dirName, param2);
// obtains extension name
const extensionName = (file) => path.extname(file);

module.exports = {
    isAbsolutePath,
    resolvePath,
    pathJoin,
    extensionName
}