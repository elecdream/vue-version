

test('it exports version info', () => {
  let vueVersion = require('../vue-version');

  console.log(vueVersion);

  // use vue version @2
  expect(vueVersion).toMatchObject({
    version: '2.6.14',
    info: ['2', '6', '14'],
    major: '2',
    minor: '6',
    patch: '14',
    isVue1: false,
    isVue2: true,
    isVue3: false,
    isVue4: false
  });

})

