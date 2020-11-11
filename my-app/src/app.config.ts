const pages = ['pages/index/index'];
const title = '萤火虫音乐';
const color = '#d81e06'

import { AppConfig as WechatAppConfig } from 'remax/wechat';
import { AppConfig as AliAppConfig } from 'remax/ali';
import { AppConfig as ToutiaoAppConfig } from 'remax/toutiao';
import { AppConfig as WebAppConfig } from 'remax/web';

export const wechat: WechatAppConfig = {
  pages,
  window: {
    navigationBarBackgroundColor: color,
    navigationBarTitleText: title,
    enablePullDownRefresh: true
  },
};

export const ali: AliAppConfig = {
  pages,
  window: {
    defaultTitle: title,
    titleBarColor: color,
    pullRefresh: 'YES'
  },
};

export const toutiao: ToutiaoAppConfig = {
  pages,
  window: {
    navigationBarTitleText: title,
    navigationBarBackgroundColor: color,
  },
};

export const web: WebAppConfig = {
  pages,
  title: title,
  router: {
    type: 'browser'
  }
};
