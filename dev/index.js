import {Scene, Label} from '../src/index';
const container = document.getElementById('stage');
const scene = new Scene({
  container,
  width: 1200,
  height: 600,
});
const layer = scene.layer();

const setDefault = Symbol.for('spritejs_setAttributeDefault');


class Button extends Label {
  constructor(attrs = {}) {
    super(attrs);
    // this.addEventListener('mousedown', () => {
    //   this.attr({scale: 0.9});
    // });
    // this.addEventListener('mouseup', () => {
    //   this.attr({scale: 1.0});
    // });
    // this.addEventListener('mouseenter', () => {
    //   this.layer.canvas.style.cursor = 'pointer';
    // });
    // this.addEventListener('mouseleave', () => {
    //   this.layer.canvas.style.cursor = '';
    // });
  }
}

const button = new Button({
  text: 'Click Me',
  pos: [600, 300],
});
layer.append(button);

window.button = button;
console.log(button);
button.addEventListener('click', () => {
  console.log('button clicked');
});