


var map = function(mapData, tileSize, game, cb){
  this.map = mapData;
  this.mapData = mapData.map;
  this.events = mapData.events;
  this.tileSize = tileSize;
  this.game = game
  this.ctx = game.ctx;
  this.items = [];
  this.gestalter = [];
  this.itemOffSet = 16;
  this.itemSize = 54;
  this.keyItems=
  {
    'key': { name: "key", row: 34*5, col: 34*7}
  }

  this.inEvent = false;

//loading images!

  var imagestoload = 5
  var checkFinish = function()
  {
    if (--imagestoload == 0)
    {
      cb()
    }
  }
  this.imageObj = new Image();
  this.imageObj.src = 'tilea4.png';
  this.imageItem = new Image();
  this.imageItem.src = 'img/sprites_RPG_icons.png';
  this.imageGestalter = new Image();
  this.imageGestalter.src = 'Character.png';
  this.imageMob1 = new Image();
  this.imageMob1.src = 'Zombies1.png';
  this.imageMob2 = new Image();
  this.imageMob2.src = 'Zombie2.png';

  this.imageObj.onload = function() {
    checkFinish();
  }.bind(this);

  this.imageItem.onload = function() {
    checkFinish();
  }.bind(this);

  this.imageGestalter.onload = function() {
    checkFinish();
  }.bind(this);

  this.imageMob1.onload = function() {
    checkFinish();
  }.bind(this);

  this.imageMob2.onload = function() {
    checkFinish();
  }.bind(this);

//No longer loading images!

}

//Event shit here!

map.prototype.onEvent = function(event)
{
  console.log('map.js got event ');
  console.dir(event);
  this.inEvent = true;
  var textFil = document.getElementById('info')
  textFil.innerHTML = event.text;
  if (e.action)
  {
    console.log("Lights! Camera! Action!")
    this.doAThing(e.action);
    console.log("Action done!")
  if(event.alternativ)
  {
    event.alternativ.forEach(function(e,i)
    {
      console.log("element"+i);
      console.dir(e);
      var createButton = document.createElement('button');
      createButton.innerHTML = e.text;
      textFil.appendChild(createButton)
       createButton.addEventListener('click', function()
       {
        console.log("Button"+i+"clicked!")
        console.dir(e);
        if (e.item)
        {
          console.log("I'm looking for a item!")
          if (this.isItemInInventory(e.item))
          {
            console.log("I found an item!")
            if (e.action)
            {
              console.log("Lights! Camera! Action!")
              this.doAThing(e.action);
            }
            if (e.event) this.onEvent(e.event);
          }
          else
          {
            console.log("I didn't find an item......")
            this.onEvent(e.failstate);
          }
        }
        else{
          console.log("I'm not looking for an item!")
          if (e.action)
          {
            console.log("Lights! Camera! Action!")
            this.doAThing(e.action);
            console.log("Action done!")
          }
          if (e.event) this.onEvent(e.event);
        }
      }.bind(this))

    }.bind(this))
  }
}

//Backpack troubles here!

map.prototype.isItemInInventory = function(name)
{
  var rv = false;
  if(name)
  {
    this.game.player.inventory.forEach(function(el)
    {
      if(el.name == name)
      {
        rv = true;
      }
    })
  }
  return rv;
}

map.prototype.addKeyItem = function(item){
  this.game.player.inventory.push(item);

  console.log(item+" has been added to inventory!")
  this.drawBackpack();
}

map.prototype.removeKeyItem = function(item){
  var index = this.game.player.inventory.indexOf(item)
  this.game.player.inventory.splice(index, 1);

  console.log(item+" has been removed from inventory!")
  this.drawBackpack();
}

map.prototype.drawBackpack = function(){
  var backpack = document.getElementById('backpack')
  backpack.innerHTML = "";
  this.game.player.inventory.forEach(function(item){
    var img = document.createElement('div');
    img.style.width = '32px';
    img.style.height = '32px';
    var bg = "url('img/sprites_RPG_icons.png') -"+item.row+"px -"+item.col+"px";
    //var bg = "url('img/sprites_RPG_icons.png') -64px 0";
    console.log(bg);
    img.style.background = bg;
    backpack.appendChild(img);
  })
}
map.prototype.doAThing = function(i)
{
  var key = this.keyItems['key']

  switch(i){
    case 1:
      this.addKeyItem(key)
    break;
    case 2:
      this.removeKeyItem(key)
    break;
    case 3:
      this.inEvent = false;
      this.game.player.move('up')
    break;
    case 4:
      this.inEvent = false;
      this.game.player.move('left')
    break;
    case 5:
      this.inEvent = false;
      this.game.player.move('right')
    break;
    case 6:
      this.inEvent = false;
      this.game.player.move('down')
    break;
  }
}

//No more backpack troubles!
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
 // this.ctx.fillStyle = "magenta";
  //this.ctx.fillRect((item.x*this.tileSize)+this.itemOffSet, (item.y*this.tileSize)+this.itemOffSet, this.itemSize, this.itemSize);
}

map.prototype.drawGestalt = function(gestalter){
    this.ctx.drawImage(this.imageGestalter, 0, 0, 32, 32, (gestalter.x*64)+this.itemOffSet+4, (gestalter.y*64)+this.itemOffSet, 30, 32);
}

//Reference!!!!
//context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);


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
    case 24:
      tiles = [0*64, 96+(0*160)]
    break;
    case 25:
      tiles = [2*64, 96+(0*160)]
      break;
    case 26:
      tiles = [3*64, 96+(0*160)]
      break;
    case 27:
      tiles = [4*64, 96+(0*160)]
      break;
    case 28:
      tiles = [5*64, 96+(0*160)]
      break;
    case 29:
      tiles = [6*64, 96+(0*160)]
      break;
    case 30:
      tiles = [7*64, 96+(0*160)]
      break;
    case 31:
      tiles = [0*64, 96+(1*160)]
      break;
    case 32:
      tiles = [1*64, 96+(1*160)]
      break;
    case 33:
      tiles = [2*64, 96+(1*160)]
    break;
    case 34:
      tiles = [3*64, 96+(1*160)]
    break;
    case 35:
      tiles = [4*64, 96+(1*160)]
    break;
    case 36:
      tiles = [5*64, 96+(1*160)]
    break;
    case 37:
      tiles = [6*64, 96+(1*160)]
    break;
    case 38:
      tiles = [7*64, 96+(1*160)]
    break;
    case 39:
      tiles = [0*64, 96+(2*160)]
    break;
    case 40:
      tiles = [1*64, 96+(2*160)]
    break;
    case 41:
      tiles = [2*64, 96+(2*160)]
    break;
    case 42:
      tiles = [3*64, 96+(2*160)]
    break;
    case 43:
      tiles = [4*64, 96+(2*160)]
    break;
    case 44:
      tiles = [5*64, 96+(2*160)]
    break;
    case 45:
      tiles = [6*64, 96+(2*160)]
    break;
    case 46:
      tiles = [7*64, 96+(2*160)]
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
