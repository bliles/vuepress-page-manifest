const { fs, path } = require('@vuepress/shared-utils')

module.exports = (options, context) => ({
  async generated() {
    const { outDir } = context
    const manifestFilePath = path.resolve(outDir, 'manifest.json')

    // build an array of the page paths
    var paths = [];
    for(var idx in context.pages) {
        var page = context.pages[idx];
        paths.push(page.path);
    }

    await fs.writeFile(
      manifestFilePath,
      JSON.stringify(paths)
    )
  }
})
