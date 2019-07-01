module.exports = {
  devServer: {
    port: 3000,
  },
  source: 'demos',
  output: 'docs',
  demoList: '.demoList.json',
  name: 'SPRITEJS',
  version: 'v2',
  homePage: 'https://spritejs.org',
  logo: '',
  // 可选主题: active4d, allHallowsEve, amy, blackboard, brillianceBlack,
  // brillianceDull, chromeDevtools, cloudsMidnight, clouds, cobalt,
  // dawn, dreamweaver, eiffel, espressoLibre, github, idle, katzenmilch,
  // kuroirTheme, lazy, magicwbAmiga, merbivoreSoft, merbivore, monokai,
  // pastelsOnDark, slushAndPoppies, solarizedDark, solarizedLight,
  // spacecadet, sunburst, textmateMacClassic, tomorrowNightBlue,
  // tomorrowNightBright, tomorrowNightEighties, tomorrowNight, tomorrow,
  // twilight, vibrantInk, zenburnesque, iplastic, idlefingers, krtheme,
  // monoindustrial,
  boxTheme: 'monokai',
  globalPackages: {
    js: ['https://unpkg.com/spritejs/dist/spritejs.min.js'],
    css: [],
  },
  // tab waterfall
  editorViewMode: 'waterfall',
  // 这里你可以填写自己的theme主题用以覆盖原有的主题，具体详见文档
  // themeFile: './theme.scss',
}