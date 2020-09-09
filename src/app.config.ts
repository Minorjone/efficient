export default {
  pages: [
    'pages/index/index',
    'pages/Home/index',
    'pages/Report/index',
    'pages/User/index'
  ],
  tabBar: {
    list: [{
      'iconPath': 'static/img/list-light.png',
      'selectedIconPath': 'static/img/list-dark.png',
      pagePath: 'pages/Home/index',
      text: '计划'
    }, {
      'iconPath': 'static/img/report-light.png',
      'selectedIconPath': 'static/img/report-dark.png',
      pagePath: 'pages/hot/hot',
      text: '统计'
    }, {
      'iconPath': 'resource/node.png',
      'selectedIconPath': 'resource/node_on.png',
      pagePath: 'pages/nodes/nodes',
      text: '我的'
    }],
    'color': '#ddd',
    'selectedColor': '#6AA1DB',
    'backgroundColor': '#fff',
    'borderStyle': 'white'
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'Efficient',
    navigationBarTextStyle: 'black'
  }
}
