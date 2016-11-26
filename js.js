

var game = function(canvas){

  this.canvas = canvas;
  console.log ("Game I N I A T E");
  this.ctx = this.canvas.getContext('2d');
  this.init();
  this.draw();
}

game.prototype.init = function(){

  window.addEventListener("keydown", this.keyDown.bind(this), false);

}

game.prototype.keyDown = function(e){

  console.log(e.keyCode);
  //this.ctx.fillStyle = "black"
  //this.ctx.fillRect(0,0,200,200)

}

game.prototype.draw = function(){

  this.ctx.fillStyle = "yellow";
  this.ctx.fillRect(110,100,40,40);
}
