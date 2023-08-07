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

const show = (summary, src) => {
  if (!showing) {
    showing = true;
    document.querySelector('#summary').innerText = summary;
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
    const summary = c.getAttribute('data-summary');
    c.onpointerenter = function() { show(summary, c.parentNode.href); };
    c.onpointerleave = hide;
    c.oncontextmenu = function() { return false; };
  }
});
