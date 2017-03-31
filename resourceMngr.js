var resourceMngr = function(){

}

resourceMngr.prototype.loadResource = function(resource, cb){
  var xhttp = new XMLHttpRequest();
  var that = this;
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     that.parseMetaData(this.responseText,cb);
    }
  };
  xhttp.open("GET", resource, true);
  xhttp.send();
}

resourceMngr.prototype.loadTiles = function(cb)
{
//loading images!
  var images = {};
  var imagestoload = 5;
  var checkFinish = function()
  {
    if (--imagestoload == 0)
    {
      cb(images)
    }
  }


  var imageObj = new Image();
  imageObj.src = 'tilea4.png';
  var imageItem = new Image();
  imageItem.src = 'img/sprites_RPG_icons.png';
  var imageGestalter = new Image();
  imageGestalter.src = 'Character.png';
  var imageMob1 = new Image();
  imageMob1.src = 'Zombies1.png';
  var imageMob2 = new Image();
  imageMob2.src = 'Zombie2.png';

  images ["mapTiles"] = imageObj;
  images ["items"] = imageItem;
  images ["characters"] = imageGestalter;
  images ["mob1"] = imageMob1;
  images ["mob2"] = imageMob2;

  imageObj.onload = function() {
    checkFinish();
  }.bind(this);

  imageItem.onload = function() {
    checkFinish();
  }.bind(this);

  imageGestalter.onload = function() {
    checkFinish();
  }.bind(this);

  imageMob1.onload = function() {
    checkFinish();
  }.bind(this);

  imageMob2.onload = function() {
    checkFinish();
  }.bind(this);

//No longer loading images!
}

resourceMngr.prototype.parseMetaData = function(_data, cb){
  var world = {maps:[]};
  console.log(_data);
  var data = JSON.parse(_data);
  var count = data.maps.length
  data.maps.forEach(function(_map)
  {
    (function(map)
    {
      var xhttp = new XMLHttpRequest();
      var that = this;
      xhttp.onreadystatechange = function()
      {
        if (this.readyState == 4 && this.status == 200)
        {
          var result = JSON.parse(this.responseText);
          var mapdata = {map:result, events:map.events, name:map.name}
          world.maps.push(mapdata);
          if(--count === 0)
          {
            cb(world);
          }
        }
      };
      xhttp.open("GET", map.url, true);
      xhttp.send();
    }.bind(this))(_map);
  }.bind(this))
}
