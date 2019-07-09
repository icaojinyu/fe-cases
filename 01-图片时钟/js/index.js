import '../less/index.less';
import './resize';

let currentTime = getTime();

function getTime() {
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  return add0(h) + add0(m) + add0(s);
}

function add0(n) {
  return n < 10 ? '0' + n : '' + n;
}

function init() {
  currentTime = getTime();
  $('.time').each(function (i) {
    $('span', this).eq(0).html(currentTime[i]);
  });
  setInterval(()=>{
    tick();
    showDots();
  },1000);
}

function tick() {
  // 下一秒
  let nextTime = getTime();
  $('.time').each(function (i) {
    if (currentTime[i] !== nextTime[i]) {
      $('span', this).eq(0).html(currentTime[i]);
      $('span', this).eq(1).html(nextTime[i]);
      $(this).css('margin-top', 0).animate({
        'margin-top': -$('.time>span').height()
      }, 500);
    }
  });
  currentTime = nextTime;
}

function showDots(){
  $('.dots span').hide();
  setTimeout(()=>{
    $('.dots span').show();
  },500);
}


$(function () {
  init();
});