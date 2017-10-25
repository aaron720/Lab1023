window.onload = init; // Wait for the page to load before we begin animation
var canvas;
var ctx;// This is a better name for a global variable
var moverArray = [];
var orbiter;


function init(){
  //get the canvas
  canvas = document.getElementById('cnv');
  // Set the dimensions of the canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.border = 'solid black 2px';
  canvas.style.backgroundColor = 'rgba(0,44,55, .5)';
  // get the context
  ctx = canvas.getContext('2d'); // This is the context
  createBalls(1);
  orbiter = new Orbiter();
  animate(); // Call to your animate function
}

function createBalls(n){
  for(var i = 0; i < n; i++){
    moveArray.push(new Ball());
  }
}

function update(q){
  q.loc.add(q.vel);
  if(q.loc.x + q.radius >= canvas.width || q.loc.x - q.radius <= 0){
    q.vel.x = -(q.vel.x);
    //this.loc.x = canvas.width-this.loc.x;
  }
  if(q.loc.y + q.radius >= canvas.height || q.loc.y - q.radius <= 0){
    q.vel.y = -(q.vel.y);
    //this.loc.y = canvas.width-this.loc.y;
    }
  if(q.dy > 30){
    q.dy = 30;
  }
  q.dy += q.gravity;
  q.aVel =
  }
}

function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,canvas.width, canvas.height);

  for(var i = 0; i < balls.length; i++){
    balls[i].update();
  //  balls[i].render();
    //balls[i].update();
    }
    for(var i = 0; i < atts.length; i++){
      var att = atts[i];
      att.update();
      att.render();
      for(var j = 0; j < balls.length; j++){
        var ball = balls[j];
        var att = atts[i];
        var distance = att.loc.distance(ball.loc)
        if (distance <= 300 && distance >= 50){
          var f = JSVector.subGetNew(atts[i].loc, balls[j].loc);
          f.normalize();
          f.mult(.75);
          ball.applyForce(f);
        }
      }
    }

    for(var i = 0; i < reps.length; i++){
      var rep = reps[i];
      rep.update();
      rep.render();
      for(var j = 0; j < balls.length; j++){
        var ball = balls[j];
        var rep = reps[i];
        var distance = ball.loc.distance(rep.loc)
        if (distance <= 300){
          var f = JSVector.subGetNew(balls[j].loc, reps[i].loc);
          f.normalize();
          f.mult(0.75);
          ball.applyForce(f);
        }
      }
    }
  for(var i = 0; i < x.length-1; i++){
    dragSegment(i+1, x[i], y[i]);
    }
  }

function dragSegment(i, xin, yin) {
  var dx = xin - x[i];
  var dy = yin - y[i];
  var angle = atan2(dy, dx);
  x[i] = xin - cos(angle) * segLength;
  y[i] = yin - sin(angle) * segLength;
  segment(x[i], y[i], angle);
}
