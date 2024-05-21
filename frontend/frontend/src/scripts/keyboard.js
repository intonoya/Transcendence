window.addEventListener('keyup', function(event) { Key.onKeyup(event); }, false);
window.addEventListener('keydown', function(event) { Key.onKeydown(event); }, false);
window.addEventListener('touchstart', function(event) { Key.onTouchStart(event); }, false);
window.addEventListener('touchmove', function(event) { Key.onTouchMove(event); }, false);
window.addEventListener('touchend', function(event) { Key.onTouchEnd(event); }, false);

var Key = {
  _pressed: {},
  _touchStartY: 0,
  _touchEndY: 0,

  W: 87,
  S: 83,
  I: 73,
  K: 75,
  L: 76,
  A: 65,

  isDown: function(keyCode) {
    return this._pressed[keyCode];
  },
  
  onKeydown: function(event) {
    this._pressed[event.keyCode] = true;
  },
  
  onKeyup: function(event) {
    delete this._pressed[event.keyCode];
  },

  onTouchStart: function(event) {
    if (event.touches.length === 1) {
      this._touchStartY = event.touches[0].clientY;
    }
  },

  onTouchMove: function(event) {
    if (event.touches.length === 1) {
      this._touchEndY = event.touches[0].clientY;
    }
  },

  onTouchEnd: function(event) {
    // For the Swipe Up //
    if (this._touchStartY > this._touchEndY + 50) {
      console.log('Swipe up detected');
      this._pressed[this.W] = true;
      setTimeout(() => { delete this._pressed[this.W]; }, 100);
    } 
    // For the Swipe Down //
    else if (this._touchStartY < this._touchEndY - 50) {
      console.log('Swipe down detected');
      this._pressed[this.S] = true;
      setTimeout(() => { delete this._pressed[this.S]; }, 100);
    }
  }
};