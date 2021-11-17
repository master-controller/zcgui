# 快速开始

#### 安装组件库
```bash
npm i zcg-ui
```

#### 引用组件库
> 在main.js中引入组件库
```javascript
// 全部引入
import 'zcg-ui/dist/css/index.css';
import ZUI from 'zcg-ui';
Vue.use(ZUI);

// 按需引入
import 'zcg-ui/dist/css/demo.css';
import {Demo} from 'zcg-ui';
Vue.use(Demo);
```