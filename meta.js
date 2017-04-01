const os = require('os')
const githubAccountDefault = os.userInfo().username

module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Plugin name'
    },
    description: {
      type: 'string',
      required: false,
      message: 'Plugin description',
      default: 'A Vue.js Plugin'
    },
    version: {
      type: 'string',
      required: false,
      message: 'Initial version',
      default: '0.0.0'
    },
    author: {
      type: 'string',
      message: 'Author'
    },
    githubAccount: {
      type: 'string',
      required: false,
      message: 'GitHub Account',
      default: githubAccountDefault
    }
  }
}