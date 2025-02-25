## TrymenT-ClocK

<div align="center"> <a href="README.md">English</a> | <a href="README_zh.md">中文</a> <br/> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M5 8l6 6 6-6"/> <path d="M12 2v12"/> <path d="M5 17h12a2 2 0 0 0 0-4H7a2 2 0 0 1 0-4h12"/> </svg> </div>

A Web clock implementation based on clock interface design in TrymenT game. A digital clock with a special visual style is provided.
With the leftmost pointer as the indication, the pointer does not move, instead, the inner and outer disks keep moving. The inner disk represents hours and the outer disk represents minutes.

## feature
- Unique double-loop clock design
- Special fonts and symbol marks
- Customize the date display format
- Responsive design, adaptive to different screen sizes
- Semi-transparent background picture effect

## Preview
![running picture tryment-clock](https://github.com/tokisaki-galaxy/tryment-clock/blob/master/README/result.png)

![in-game pictures](https://github.com/tokisaki-galaxy/tryment-clock/blob/master/README/ins.jpg)


## Usage
Only three files need to be imported to use the clock:
```html
<! DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>TrymenT ClocK</title>
<link rel="stylesheet" href="TrymenT-ClocK.css">
</head>
<body>
<div class="clock-container">
<div class="clock">
<! -tags will be automatically added by JavaScript->
</div>
<div class="date-display">
<div class="date-label">What'S ThE DatE</div>
<div class="date-value" id="current-date"></div>
</div>
</div>
<script type="text/javascript" src="TrymenT-ClocK.js"></script>
</body>
</html>
```

## File Description
- `TrymenT-ClocK.css` - clock style sheet
- `TrymenT-ClocK.js` - realization of clock function
- `img.png` - Background picture resources

## Custom
You can adjust the appearance of the clock by modifying CSS files, or adjust the behavior of the clock by modifying JS files.

## Compatibility
Compatible with all modern browsers (Chrome, Firefox, Safari, Edge, etc).

## License
Please refer to the LICENSE file in the project for details.

## Thanks
Inspired by the clock interface design in TrymenT game.