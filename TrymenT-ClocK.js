const symbols = ['Ⅻ', 'Ⅰ', 'Ⅱ', 'Ⅲ', 'Ⅳ', 'Ⅴ', 'Ⅵ', 'Ⅶ', 'Ⅷ', 'Ⅸ', 'Ⅹ', 'Ⅺ'];
const specialSymbols = ['Α', 'Β', 'Γ', 'Δ', 'Ε', 'Ζ', 'Η', 'Θ', 'Ι', 'Κ', 'Λ', 'Μ', 'Ν', 'Ξ', 'Ο', 'Π', 'Ρ', 'Σ', 'Τ', 'Υ', 'Φ', 'Χ', 'Ψ', 'Ω', 'OVERLAY_CHAR'].reverse();

// 初始化函数
function initialize() {
    // 创建黑色背景层
    createBackgroundLayer();
    // 创建或获取时钟容器
    let clockContainer = document.querySelector('.clock-container');
    if (!clockContainer) {
        clockContainer = document.createElement('div');
        clockContainer.className = 'clock-container';
        document.body.appendChild(clockContainer);

        // 创建时钟元素
        const clockElement = document.createElement('div');
        clockElement.className = 'clock';
        clockContainer.appendChild(clockElement);

        // 创建日期显示元素
        const dateDisplay = document.createElement('div');
        dateDisplay.className = 'date-display';

        const dateLabel = document.createElement('div');
        dateLabel.className = 'date-label';
        dateLabel.textContent = "What'S ThE DatE";

        const dateValue = document.createElement('div');
        dateValue.className = 'date-value';
        dateValue.id = 'current-date';

        dateDisplay.appendChild(dateLabel);
        dateDisplay.appendChild(dateValue);
        clockContainer.appendChild(dateDisplay);
    }

    // 强制重新获取clock元素
    window.clock = document.querySelector('.clock');

    createClockElements();
    injectBackgroundImage();
    adjustClockSize();
    updateClock(); // 初始更新
    setInterval(updateClock, 500); // 每500毫秒更新一次

    // 确保时钟容器在背景层
    clockContainer.style.zIndex = '-2';
}

// 创建时钟元素的函数
function createClockElements() {
    // 添加外圈刻度线
    for (let i = 0; i < 60; i++) {
        const angle = i * 6 * (Math.PI / 180);
        const x = 194 * Math.sin(angle) + 200;
        const y = -194 * Math.cos(angle) + 200;

        const tick = document.createElement('div');
        tick.className = 'tick-mark';
        tick.style.height = '6px';
        tick.style.left = `${x}px`;
        tick.style.top = `${y}px`;
        tick.style.transform = `translate(-50%, -100%) rotate(${i * 6}deg)`;
        clock.appendChild(tick);
    }

    // 添加两个实线圆圈（夹住中间刻度线）
    // 圆圈1 - 位于罗马数字和内圈刻度线之间
    const innerCircle = document.createElement('div');
    innerCircle.className = 'circle-dial';
    innerCircle.style.width = '301px';
    innerCircle.style.height = '301px';
    clock.appendChild(innerCircle);

    // 圆圈2 - 位于希腊字母和内圈刻度线之间
    const outerCircle = document.createElement('div');
    outerCircle.className = 'circle-dial';
    outerCircle.style.width = '321px';
    outerCircle.style.height = '321px';
    clock.appendChild(outerCircle);

    // 添加中间刻度线，绿色棱形
    // 垂直于中心刻度线 (内圈，介于罗马数字和希腊字母之间)
    for (let i = 0; i < 60; i++) {
        const angle = i * 6 * (Math.PI / 180);
        const x = 150 * Math.sin(angle) + 200;
        const y = -150 * Math.cos(angle) + 200;

        if (i % 5 === 0) {
            // 对于每5分钟的刻度，使用绿色棱形
            const diamond = document.createElement('div');
            diamond.style.position = 'absolute';
            diamond.style.width = '8px';
            diamond.style.height = '20px';
            diamond.style.backgroundColor = (i === 45) ? '#c1ff00' : '#88a4c3'; // 灰色色，但9点位置保持绿色
            diamond.style.left = `${x}px`;
            diamond.style.top = `${y}px`;
            diamond.style.transform = `translate(-50%, -50%) rotate(${i * 6 + 180}deg)`;
            diamond.style.transformOrigin = '50% 50%';
            diamond.style.clipPath = 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'; // 棱形形状
            clock.appendChild(diamond);
        } else {
            // 对于其他刻度，保持原有的线条样式
            const tick = document.createElement('div');
            tick.className = 'tick-mark';
            tick.style.height = '9.5px'; // 所有非5分钟刻度统一使用小刻度
            tick.style.left = `${x}px`;
            tick.style.top = `${y}px`;
            tick.style.transform = `translate(-50%, -100%) rotate(${i * 6}deg)`;
            clock.appendChild(tick);
        }
    }

    return createRotatingContainers();
}

// 创建旋转容器
function createRotatingContainers() {
    // 创建两个可旋转的容器
    const romanContainer = document.createElement('div');
    romanContainer.className = 'rotating-container roman-container';
    romanContainer.style.position = 'absolute';
    romanContainer.style.width = '260px';
    romanContainer.style.height = '260px';
    romanContainer.style.left = '50%';
    romanContainer.style.top = '50%';
    romanContainer.style.transform = 'translate(-50%, -50%)';
    clock.appendChild(romanContainer);

    const greekContainer = document.createElement('div');
    greekContainer.className = 'rotating-container greek-container';
    greekContainer.style.position = 'absolute';
    greekContainer.style.width = '360px';
    greekContainer.style.height = '360px';
    greekContainer.style.left = '50%';
    greekContainer.style.top = '50%';
    greekContainer.style.transform = 'translate(-50%, -50%)';
    clock.appendChild(greekContainer);

    // 创建罗马数字标记
    createSymbolMarkers(romanContainer, symbols, 130, 30);

    // 创建希腊字母标记
    createSpecialSymbolMarkers(greekContainer, specialSymbols, 180, 14.4);

    return { romanContainer, greekContainer };
}

// 创建符号标记
function createSymbolMarkers(container, symbols, radius, angleStep) {
    symbols.forEach((symbol, i) => {
        const angle = i * angleStep * (Math.PI / 180);
        const x = radius * Math.sin(angle) + radius;
        const y = -radius * Math.cos(angle) + radius;

        const marker = document.createElement('div');
        marker.className = 'marker';
        marker.textContent = symbol;
        marker.style.fontSize = '30px';
        marker.style.position = 'absolute';
        marker.style.left = `${x - 20}px`;
        marker.style.top = `${y - 12}px`;
        marker.style.transform = `rotate(${i * angleStep}deg)`;
        marker.style.transformOrigin = '20px 12px';
        container.appendChild(marker);
    });
}

// 创建特殊符号标记（希腊字母）
function createSpecialSymbolMarkers(container, symbols, radius, angleStep) {
    symbols.forEach((symbol, i) => {
        const angle = i * angleStep * (Math.PI / 180);
        const x = radius * Math.sin(angle) + radius;
        const y = -radius * Math.cos(angle) + radius;

        const marker = document.createElement('div');
        marker.className = 'marker';
        marker.style.position = 'absolute';
        marker.style.left = `${x - 20}px`;
        marker.style.top = `${y - 12}px`;
        marker.style.transform = `rotate(${i * angleStep}deg)`;
        marker.style.transformOrigin = '20px 12px';

        // 特殊处理最后一个叠加字符
        if (symbol === 'OVERLAY_CHAR') {
            marker.style.width = '40px';
            marker.style.height = '24px';
            marker.style.display = 'flex';
            marker.style.justifyContent = 'center';
            marker.style.alignItems = 'center';

            // 创建十字符号
            const cross = document.createElement('span');
            cross.textContent = '☩';
            cross.style.position = 'absolute';
            cross.style.fontSize = '24px';
            cross.style.zIndex = '2';

            // 创建数字0
            const zero = document.createElement('span');
            zero.textContent = '○';
            zero.style.position = 'absolute';
            zero.style.fontSize = '24px';
            zero.style.zIndex = '1';

            // 添加到叠加容器
            marker.appendChild(cross);
            marker.appendChild(zero);
        } else {
            marker.textContent = symbol;
        }

        container.appendChild(marker);
    });
}

// 创建并注入背景图片元素
function injectBackgroundImage() {
    const clockContainer = document.querySelector('.clock-container');
    const dateDisplay = document.querySelector('.date-display');

    // 创建图片元素
    const backgroundImage = document.createElement('img');
    backgroundImage.src = 'img.png';
    backgroundImage.className = 'background-image';

    // 将图片插入到时钟容器中，放在日期显示之前（确保图层顺序）
    clockContainer.insertBefore(backgroundImage, dateDisplay);
}

// 更新时间函数
function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // 获取旋转容器
    const romanContainer = document.querySelector('.roman-container');
    const greekContainer = document.querySelector('.greek-container');

    // 计算旋转角度
    // 最左边是指示器，所以加270。旋转方向需要是顺时针的，所以加负号
    // 外圈分钟，内圈小时
    const romanAngle = 270 - (hours * 30);
    const greekAngle = 270 + (minutes * 6 + seconds * 0.1);
    // 外圈秒钟，内圈分钟
    //const romanAngle = 270 - (minutes * 30);
    //const greekAngle = 270 + (seconds * 6);

    // 旋转数字容器
    romanContainer.style.transform = `translate(-50%, -50%) rotate(${romanAngle}deg)`;
    greekContainer.style.transform = `translate(-50%, -50%) rotate(${greekAngle}deg)`;

    // 更新日期显示
    const dateElement = document.getElementById('current-date');
    const monthNames = ["JanuarY", "FebruarY", "MarcH", "ApriL", "MaY", "JunE", "JulY", "AugusT", "SeptembeR", "OctobeR", "NovembeR", "DecembeR"];
    const month = monthNames[now.getMonth()];
    const day = now.getDate();
    //const year = now.getFullYear().toString().substring(2);
    const year = (now.getFullYear() + 10).toString().substring(2);
    dateElement.textContent = `${month} ${day}, 20${year}`;
}

// 获取当前屏幕尺寸
function adjustClockSize() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // 根据窗口大小计算缩放比例
    const scale = Math.min(windowWidth / 300, windowHeight / 200);

    // 获取时钟容器
    const clockContainer = document.querySelector('.clock-container');

    // 应用样式
    clockContainer.style.transform = `scale(${scale})`;
    clockContainer.style.position = 'fixed';
    clockContainer.style.right = '-10%';
    clockContainer.style.top = '50%';
    clockContainer.style.transformOrigin = 'center center';
    clockContainer.style.marginTop = '-200px'; // 假设时钟高度约为400px，使垂直居中

    // 确保时钟容器有明确的尺寸
    clockContainer.style.width = '400px';
    clockContainer.style.height = '400px';

    // 设置子元素的宽高并移动元素
    setupClockContainer(clockContainer);
}

// 设置时钟容器
function setupClockContainer(clockContainer) {
    // 如果时钟容器内已有clock元素则不添加
    if (!document.getElementById('clock')) {
        const clock = document.createElement('div');
        clock.id = 'clock';
        clock.style.width = '100%';
        clock.style.height = '100%';
        clock.style.position = 'relative';

        clockContainer.appendChild(clock);

        // 移动所有时钟元素到新的clock元素中
        const elements = document.querySelectorAll('.clock-container > div:not(#clock)');
        elements.forEach(el => {
            clock.appendChild(el);
        });
    }

    // 获取日期显示元素
    const dateDisplay = document.querySelector('.date-display');

    // 将日期显示左移
    dateDisplay.style.position = 'absolute';
    dateDisplay.style.right = '45%';
    dateDisplay.style.top = '48%';
    dateDisplay.style.transform = 'scale(0.5)';
    dateDisplay.style.transformOrigin = 'top';
}

// 创建最底层黑色背景
function createBackgroundLayer() {
    // 获取窗口分辨率
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // 创建SVG元素
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    
    // 设置SVG属性
    svg.setAttribute("width", windowWidth);
    svg.setAttribute("height", windowHeight);
    svg.setAttribute("id", "background-layer");
    
    // 设置SVG样式
    svg.style.position = "fixed";
    svg.style.top = "0";
    svg.style.left = "0";
    svg.style.zIndex = "-999"; // 确保在最底层
    svg.style.backgroundColor = "#000000";
    
    // 创建一个黑色矩形填充整个SVG
    const rect = document.createElementNS(svgNS, "rect");
    rect.setAttribute("width", "100%");
    rect.setAttribute("height", "100%");
    rect.setAttribute("fill", "#000000");
    
    // 将矩形添加到SVG
    svg.appendChild(rect);
    
    // 将SVG添加到文档中
    document.body.insertBefore(svg, document.body.firstChild);
    
    // 返回SVG元素，以便后续可能的操作
    return svg;
}

// 在页面加载完成后
document.addEventListener('DOMContentLoaded', initialize);

// 窗口大小改变时重新调整
window.addEventListener('resize', adjustClockSize);