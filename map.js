


var map = function(mapData, tileSize, game, cb){
  this.map = mapData;
  this.mapData = mapData.map;
  this.events = mapData.events;
  this.tileSize = tileSize;
  this.game = game
  this.ctx = game.ctx;
  this.items = [];
  this.gestalter = [];
  this.itemOffSet = 5;
  this.itemSize = 54;

  this.imageObj = new Image();
  this.imageObj.src = 'tilea4.png';
  this.imageObj.onload = function() {
    cb();
  }.bind(this);

}

//Event shit here!

map.prototype.onEvent = function(event)
{
  console.log('map.js got event ');
  console.dir(event);
  var textFil = document.getElementById('info')
  textFil.innerHTML= event.text;
  if(event.alternativ){
    event.alternativ.forEach(function(e,i){
      console.log("element"+i);
      console.dir(e);
      var createButton = document.createElement('button');
      createButton.innerHTML = e.text;
      textFil.appendChild(createButton)
       createButton.addEventListener('click', function(){
        console.log("Button"+i+"clicked!")
        if (e.action){
          console.log("Lights! Camera! Action!")
          this.doAThing(e.action);
        }
        if (e.event) this.onEvent(e.event);
      }.bind(this))

    }.bind(this))
  }
}

map.prototype.addKeyItem = function(item){
  this.game.player.inventory.push(item);
  console.log(item+"has been added to inventory!")
}

map.prototype.doAThing = function(i)
{
  switch(i){
    case 1:
      var key = []
      this.addKeyItem(key)
    break;
  }
}
//No more event shit!

map.prototype.addItem = function(item){
  this.items.push(item);
}

map.prototype.addGestalt = function(gestalter){
  this.gestalter.push(gestalter);
}

map.prototype.drawStuff = function(){
  this.items.forEach(function(item){
    this.drawItem(item);
  }.bind(this));
  this.gestalter.forEach(function(gestalter){
    this.drawGestalt(gestalter);
  }.bind(this));
}

map.prototype.drawItem = function(item){
  this.ctx.fillStyle = "magenta";
  this.ctx.fillRect((item.x*this.tileSize)+this.itemOffSet, (item.y*this.tileSize)+this.itemOffSet, this.itemSize, this.itemSize);
}

map.prototype.drawGestalt = function(gestalter){
  this.ctx.fillStyle = "blue";
  this.ctx.fillRect((gestalter.x*this.tileSize)+this.itemOffSet, (gestalter.y*this.tileSize)+this.itemOffSet, this.itemSize, this.itemSize);
}

map.prototype.draw = function(){
  this.mapData.forEach(function(row, y){
    row.forEach(function(tile, x){
      this.drawTile(tile, x, y);
    }.bind(this));
  }.bind(this));
}

 /*var imageObj = new Image();
      imageObj.onload = function() {
        context.drawImage(imageObj, 69, 50);
      };
      imageObj.src = 'tilea4.png'; */

map.prototype.drawTile = function(tile, x, y){

  var tiles = [];

  switch(tile){
    case 0:
      tiles = [0*64, 32+(0*160)]
      break;
    case 1:
      tiles = [1*64, 32+(0*160)]
      break;
    case 2:
      tiles = [2*64, 32+(0*160)]
      break;
    case 3:
      tiles = [3*64, 32+(0*160)]
      break;
    case 4:
      tiles = [4*64, 32+(0*160)]
      break;
    case 5:
      tiles = [5*64, 32+(0*160)]
      break;
    case 6:
      tiles = [6*64, 32+(0*160)]
	    break;
	  case 7:
      tiles = [7*64, 32+(0*160)]
	    break;
	  case 8:
      tiles = [0*64, 32+(1*160)]
	    break;
    case 9:
      tiles = [1*64, 32+(1*160)]
      break;
	  case 10:
      tiles = [2*64, 32+(1*160)]
	  break;
    case 11:
      tiles = [3*64, 32+(1*160)]
    break;
    case 12:
      tiles = [4*64, 32+(1*160)]
    break;
    case 13:
      tiles = [5*64, 32+(1*160)]
    break;
    case 14:
      tiles = [6*64, 32+(1*160)]
    break;
    case 15:
      tiles = [7*64, 32+(1*160)]
    break;
    case 16:
      tiles = [0*64, 32+(2*160)]
    break;
    case 17:
      tiles = [1*64, 32+(2*160)]
    break;
    case 18:
      tiles = [2*64, 32+(2*160)]
    break;
    case 19:
      tiles = [3*64, 32+(2*160)]
    break;
    case 20:
      tiles = [4*64, 32+(2*160)]
    break;
    case 21:
      tiles = [5*64, 32+(2*160)]
    break;
    case 22:
      tiles = [6*64, 32+(2*160)]
    break;
    case 23:
      tiles = [7*64, 32+(2*160)]
    break;
  }

  this.ctx.drawImage(this.imageObj, tiles[0], tiles[1], 64, 64, x*64, y*64, 64, 64);

  //this.ctx.fillStyle = color;
  //this.ctx.fillRect((x*this.tileSize)+1, (y*this.tileSize)+1, this.tileSize-1, this.tileSize-1);
  //console.log(x);
  //console.log(y);
  //console.log(tile);
  //console.log(this.tileSize);
  //console.log("done!")
}
