## TrymenT ―今を変えたいと願うあなたへ― 游戏时钟

<div align="center"> <a href="README.md">English</a> | <a href="README_zh.md">中文</a> <br/> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M5 8l6 6 6-6"/> <path d="M12 2v12"/> <path d="M5 17h12a2 2 0 0 0 0-4H7a2 2 0 0 1 0-4h12"/> </svg> </div>

一个仿 `TrymenT ―今を変えたいと願うあなたへ―` 游戏中时钟界面设计的 Web 时钟实现。提供了一个**特殊视觉风格**的数字时钟。
很喜欢这个游戏，RASK公司什么时候出OmegaA啊？说好分割商法，也别烂尾啊！
以最左边的指针为指示，指针不动，取而代之的是内外盘不停地动。内盘代表小时，外盘代表分钟。

## 特性
 - 独特的双环时钟设计
 - 特殊的字体和符号标记
 - 自定义日期显示格式
 - 响应式设计，自适应不同屏幕尺寸
 - 半透明背景图片效果

## 预览
![运行图片TrymenT-ClocK](https://github.com/Tokisaki-Galaxy/TrymenT-ClocK/blob/master/README/result.png)

![游戏中图片](https://github.com/Tokisaki-Galaxy/TrymenT-ClocK/blob/master/README/ins.jpg)


## 使用方法
只需要引入三个文件即可使用该时钟：

### 自动加载模式
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TrymenT ClocK</title>
    <!-- 加载代码在这，min.css/js和css/js内容一致，有自动更新 -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Tokisaki-Galaxy/TrymenT-ClocK/TrymenT-ClocK.min.css">
    <script type="text/javascript" src="https://cdn.jsdelivr.net/gh/Tokisaki-Galaxy/TrymenT-ClocK/TrymenT-ClocK.min.js"></script>
</head>
</html>
```

### 手动指定加载模式
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TrymenT ClocK</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Tokisaki-Galaxy/TrymenT-ClocK/TrymenT-ClocK.min.css">
    <script type="text/javascript" src="https://cdn.jsdelivr.net/gh/Tokisaki-Galaxy/TrymenT-ClocK/TrymenT-ClocK.min.js"></script>
</head>
<body>
    <!-- Here -->
    <div class="clock-container">
        <div class="clock">
        </div>
        <div class="clock-date-display">
            <div class="clock-date-label">What'S ThE DatE</div>
            <div class="clock-date-value" id="current-date"></div>
        </div>
    </div>
</body>
</html>
```

## 文件说明
 - `TrymenT-ClocK.css` - 时钟样式表
 - `TrymenT-ClocK.js` - 时钟功能实现
 - `img.png` - 背景图片资源

## 自定义
您可以通过修改 CSS 文件来调整时钟的外观，或通过修改 JS 文件来调整时钟的行为。

## 兼容性
兼容所有现代浏览器（Chrome, Firefox, Safari, Edge等）。

## 许可证
请参阅项目中的 LICENSE 文件了解详情。

## 致谢
灵感来源于 [TrymenT ―今を変えたいと願うあなたへ―](https://store.steampowered.com/app/1183260?snr=5000_5100__)中的时钟界面设计。

[TrymenT STEAM](https://store.steampowered.com/app/1183260?snr=5000_5100__)
[TrymenT game](https://re-tryment.com/product/)