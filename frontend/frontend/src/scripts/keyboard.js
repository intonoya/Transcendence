window.addEventListener('keyup', function(event) { Key.onKeyup(event); }, false);
window.addEventListener('keydown', function(event) { Key.onKeydown(event); }, false);

// Добавляем обработчики касаний
window.addEventListener('touchstart', function(event) { Key.onTouchStart(event); }, false);
window.addEventListener('touchmove', function(event) { Key.onTouchMove(event); }, false);
window.addEventListener('touchend', function(event) { Key.onTouchEnd(event); }, false);

var Key = {
  _pressed: {},
  _touchStartY: 0,
  _touchEndY: 0,
  _swipeInterval: null,

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
      this._touchEndY = this._touchStartY;
    }
  },

  onTouchMove: function(event) {
    if (event.touches.length === 1) {
      this._touchEndY = event.touches[0].clientY;
      if (this._swipeInterval === null) {
        this._startSwipe();
      }
    }
  },

  onTouchEnd: function(event) {
    this._stopSwipe();
  },

  _startSwipe: function() {
    this._swipeInterval = setInterval(() => {
      if (this._touchStartY > this._touchEndY + 50) {
        // Swipe up
        console.log('Continuous swipe up detected');
        this._pressed[this.W] = true;
        this._pressed[this.S] = false; // Stop swipe down
      } else if (this._touchStartY < this._touchEndY - 50) {
        // Swipe down
        console.log('Continuous swipe down detected');
        this._pressed[this.S] = true;
        this._pressed[this.W] = false; // Stop swipe up
      } else {
        // Stop both swipes if no significant movement
        this._pressed[this.W] = false;
        this._pressed[this.S] = false;
      }
    }, 100); // Update every 100 ms
  },

  _stopSwipe: function() {
    clearInterval(this._swipeInterval);
    this._swipeInterval = null;
    this._pressed[this.W] = false;
    this._pressed[this.S] = false;
  }
};