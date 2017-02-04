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


resourceMngr.prototype.parseMetaData = function(_data, cb){
  var world = {maps:[]};
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
          var mapdata = {map:result, events:map.events}
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
