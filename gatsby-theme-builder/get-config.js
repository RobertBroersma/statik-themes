const readYaml = require(`read-yaml-promise`)

let obj

module.exports = async function({
  cmsConfig = `${__dirname}/static/admin/config.yml`,
}) {
  if (obj) return obj
  const { media_folder, public_folder } = await readYaml(cmsConfig)

  if (!media_folder) {
    console.error(`Missing media_folder in Netlify CMS config`)
    process.exit(1)
  }
  if (!public_folder) {
    console.error(`Missing public_folder in Netlify CMS config`)
    process.exit(1)
  }

  return {
    mediaPath: media_folder,
    publicPath: public_folder,
  }
}
