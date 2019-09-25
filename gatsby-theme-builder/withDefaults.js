module.exports = opts => {
  return {
    staticPath: opts.staticPath || 'static/images/uploads',
    pagesPath: opts.pagesPath || '_pages',
    configPath: opts.configPath || '_config',
  }
}
