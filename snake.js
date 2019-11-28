function Snake() {
  // Head location.
  this.x = 0;
  this.y = 0;

  // Speed vector.
  this.xspeed = 1;
  this.yspeed = 0;

  // Number of body parts.
  this.total = 1;

  // Locations of body parts.
  this.tail = [];

  this.dead = false;

  this.direction = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  this.eat = function(position) {
    let distance = dist(this.x, this.y, position.x, position.y);
    if (distance < 1) {
      this.total++;
      return true;
    }
    else {
      return false;
    }
  }

  this.death = function () {
    for (let i = 0; i < this.tail.length; i++) {
      let pos = this.tail[i];
      let d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        this.dead = true;
        // this.total = 0;
        // this.tail = [];
      }
    }
  }

  this.update = function() {
    for (let i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i+1];
    }
    if(this.total >= 1) {
      this.tail[this.total-1] = createVector(this.x, this.y);
    }

    this.x = this.x + this.xspeed*scale;
    this.y = this.y + this.yspeed*scale;

    if(this.x > width-scale) {
      this.x = 0;
    }
    if(this.x < 0) {
      this.x = width-scale;
    }
    if(this.y > height-scale) {
      this.y = 0;
    }
    if(this.y < 0 ) {
      this.y = height-scale;
    }

  }

  this.show = function() {
    fill(255);
    for (let i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scale, scale);
    }
    rect(this.x, this.y, scale, scale);
  }
}
