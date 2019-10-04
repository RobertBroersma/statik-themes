module.exports = opts => {
  return {
    staticPath: opts.staticPath || 'static/images/uploads',
    pagesPath: opts.pagesPath || '_pages',
    portfolioPath: opts.portfolioPath || '_portfolio',
    configPath: opts.configPath || '_config',
  }
}
