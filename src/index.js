import scene from './scene';

function canvas() {
    const canvas = document.createElement('canvas');
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.touchAction = 'none';
    canvas.setAttribute('id', 'renderCanvas');
    return canvas;
  }

  document.body.appendChild(canvas());

  scene();
