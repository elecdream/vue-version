let Vue = require('vue');

let version
let info
let major
let minor
let patch
let isVue1
let isVue2
let isVue3
let isVue4

(() => {
  if ('default' in Vue && 'version' in Vue.default) version = Vue.default.version
  else if ('version' in Vue) version = Vue.version

  info = version.split('.')
  major = info[0]
  minor = info[1]
  patch = info[2]

  isVue1 = major == 1
  isVue2 = major == 2
  isVue3 = major == 3
  isVue4 = major == 4
})()

module.exports = {
  version, info, major, minor, patch, isVue1, isVue2, isVue3, isVue4
}
