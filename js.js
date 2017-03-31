

var game = function(canvas, world, images){

  this.canvas = canvas;
  this.world = world;
  console.log ("Game I N I A T E");
  this.ctx = this.canvas.getContext('2d');
  this.init();
  this.draw();
  ;
  this.mapObjs = {};
  this.world.maps.forEach(function(m)
  {
    var mo = new map(m, 64, this, images);
    this.mapObjs[m.name] = mo;
  }.bind(this))
  this.activeMap = this.mapObjs["map1"];
  console.log("active map is " + this.activeMap.name)
  console.dir(this.mapObjs);

  requestAnimationFrame(this.frame.bind(this)); // start the first frame
}

game.prototype.changeMap = function (mapName)
{
  var map = this.mapObjs[mapName];
  //this.activeMap.addGestalt();
  this.activeMap = map;
  this.player.map = map;
  this.activeMap.addGestalt(this.player);
}

game.prototype.frame = function ()
{
  if(this.player)
  {
    this.activeMap.draw();
    this.activeMap.drawStuff();
    requestAnimationFrame(this.frame.bind(this)); // request the next frame
  }
}

game.prototype.setPlayer = function(player){
  this.player = player;
  this.changeMap("map1");

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
