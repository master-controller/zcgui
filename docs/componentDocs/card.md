# 卡片组件

### 示例
<!-- 本地开发 -->
<!-- <z-card imgSrc="/course.png" summary="Vue"></z-card> -->
<!-- 发布到github -->
<z-card imgSrc="/zcgui/course.png" summary="Vue"></z-card>

### 代码
```html
<z-card imgSrc="/course.png" summary="Vue"></z-card>
```

### Attributes
| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
| --- | --- | --- | --- | --- |
| width | 卡片宽度 | Number | false | - |
| imgSrc | 图片地址 | String | true | - |
| imgHeight | 图片高度 | Number | false | - |
| summary | 卡片概述 | String/Slot | false | - |
| footer | 卡片底部 | Slot | false | - |