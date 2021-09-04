


function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      ctx.fillStyle = "#FF0000";
      ctx.fillRect(200,400, 100, 500);

    }
  }

  draw();