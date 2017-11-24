'use strict';

window.renderStatistics = function (ctx, names, times) {
  var RECT_X = 100;
  var RECT_Y = 10;
  var RECT_H = 270;
  var RECT_W = 420;

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(RECT_X + 10, RECT_Y + 10, RECT_W, RECT_H);
  ctx.fillStyle = 'white';
  var sign = 1;
  ctx.beginPath();
  ctx.lineTo(RECT_X, RECT_Y + RECT_H);

  var i;

  function myframe1(x, y, stepX, stepY, iter) {
    for (i = 1; i <= iter; i++) {
      x += stepX;
      ctx.lineTo(x, y);
      y += stepY * sign;
      ctx.lineTo(x, y);
      sign *= -1;
    }
  }

  function myframe2(x, y, stepX, stepY, iter) {
    for (i = 1; i < iter; i++) {
      y += stepY;
      ctx.lineTo(x, y);
      x += stepX * sign;
      ctx.lineTo(x, y);
      sign *= -1;
    }
  }

  myframe2(RECT_X, RECT_Y + RECT_H, 10, -10, RECT_H / 10);
  myframe1(RECT_X, RECT_Y, 10, 10, RECT_W / 10);
  ctx.lineTo(RECT_X + RECT_W, RECT_Y + RECT_H);

  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var maxIndex = 0;

  for (i = 1; i < times.length; i++) {
    if (times[i] > times[maxIndex]) {
      maxIndex = i;
    }
  }

  var barHight = 150;
  var barWight = 40;
  var barSpace = 50;
  var initialX = 160;

  var coeff = barHight / (times[maxIndex] - 0); // px;

  for (i = 0; i < times.length; i++) {

    if (names[i] !== 'Вы') {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + (Math.random() * 0.8 + 0.2) + ')';
    } else {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }

    ctx.fillRect(initialX + i * (barWight + barSpace),
        RECT_H - times[i] * coeff - 20,
        barWight,
        times[i] * coeff
    );

    ctx.fillStyle = 'black';

    ctx.fillText(names[i],
        initialX + i * (barWight + barSpace),
        RECT_H

    );
    ctx.fillText(Math.floor(times[i]),
        initialX + i * (barWight + barSpace),
        RECT_H - times[i] * coeff - 30
    );

  }

};


