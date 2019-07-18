const { fs, path } = require('@vuepress/shared-utils')

module.exports = (options, context) => ({
  async generated() {
    const { outDir } = context
    const manifestFilePath = path.resolve(outDir, 'manifest.json')
    await fs.writeFile(
      manifestFilePath,
      JSON.stringify(context.pages)
    )
  }
})
