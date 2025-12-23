'use strict';

const tree = document.querySelector('.tree');

tree.querySelectorAll('li').forEach((li) => {
  const text = li.firstChild;

  if (text.nodeType !== Node.TEXT_NODE) {
    return;
  }

  const span = document.createElement('span');

  span.textContent = text.textContent.trim();

  li.insertBefore(span, text);
  li.removeChild(text);
});

tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const ul = e.target.nextElementSibling;

  if (ul) {
    ul.hidden = !ul.hidden;
  }
});
