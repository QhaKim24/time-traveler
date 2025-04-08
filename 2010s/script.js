let allFrames = document.querySelectorAll('.win-frame');

for (let i = 0; i < allFrames.length; i++) {
  let frame = allFrames[i];

  frame.addEventListener('click', openArticle);
}

function openArticle(event) {
  let frame = event.currentTarget;
  let url = frame.getAttribute('data-link');

  if (url) {
    window.open(url, '_blank');
  }
}