const fs = require('fs');

module.exports = (on) => {
  on('task', {
    failed: require('cypress-failed-log/src/failed')(),
  })

  on('task', {
    log(message) {
      console.log(message)
      return null
    },
  })

  on('after:screenshot', async (details) => {
    // Remove the onFailed on the end of the screenshot name if it exists
    const newPath = details.path.replace(/hook onFailed \(failed\)\.png$/, 'hook (failed).png')

    await fs.promises.rename(details.path, newPath)
  })
}