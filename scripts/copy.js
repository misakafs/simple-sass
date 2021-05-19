const fs = require('fs-extra')
const glob = require('globby')

function toDest(file) {
    return file.replace(/^src\//, './dist/scss/')
}

glob.sync('src/**/*.scss').forEach(file => {
    fs.copy(file, toDest(file))
})
