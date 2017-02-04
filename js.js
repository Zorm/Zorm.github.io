

var game = function(canvas){

  this.canvas = canvas;
  console.log ("Game I N I A T E");
  this.ctx = this.canvas.getContext('2d');
  this.init();
  this.draw();
}

game.prototype.setPlayer = function(player){
  this.player = player;  
}

game.prototype.init = function(){

  window.addEventListener("keydown", this.keyDown.bind(this), false);

}

game.prototype.keyDown = function(e){

  console.log(e.keyCode);
  //this.ctx.fillStyle = "black"
  //this.ctx.fillRect(0,0,200,200)
  if(e.keyCode == 87){this.player.move('up')}
  if(e.keyCode == 65){this.player.move('left')}
  if(e.keyCode == 68){this.player.move('right')}
  if(e.keyCode == 83){this.player.move('down')}
}

game.prototype.draw = function(){

  this.ctx.fillStyle = "yellow";
  this.ctx.fillRect(110,100,40,40);
}
