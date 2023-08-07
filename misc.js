let showing = false;
const wrap = document.querySelector('#wrap');
const clip = document.querySelector('#clip');

const follow = e => {
  if (e.x + 640 > document.documentElement.clientWidth - 100)
    wrap.style.left = (e.x - 650) + 'px';
  else
    wrap.style.left = (e.x + 10) + 'px';
  if (e.y + 360 > document.body.clientHeight)
    wrap.style.top = (e.pageY - 370) + 'px';
  else
    wrap.style.top = (e.pageY + 10) + 'px';
};

const show = src => {
  if (!showing) {
    showing = true;
    wrap.style.display = 'block';
    clip.src = src;
    document.addEventListener('pointermove', follow);
  }
};

const hide = () => {
  showing = false;
  wrap.style.display = 'none';
  document.removeEventListener('pointermove', follow);
};

window.addEventListener('DOMContentLoaded', () => {
  for (const c of document.querySelectorAll('.cell')) {
    c.onpointerenter = function() { show(c.parentNode.href); };
    c.onpointerleave = hide;
    c.oncontextmenu = function() { return false; };
  }
});
