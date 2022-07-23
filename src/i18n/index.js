import { createI18n } from 'vue-i18n';
import zh_CN from './lang/zh_CN';
import en_US from './lang/en_US';

// 语言库
const messages = {
  zh_CN,
  en_US
};

// 注册i8n实例并引入语言文件
const i18n = createI18n({
  legacy: false,
  locale: 'zh_CN',
  messages
});

export default i18n;
