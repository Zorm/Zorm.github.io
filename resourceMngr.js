var resourceMngr = function(){

}

resourceMngr.prototype.loadResource = function(resource, cb){
  var xhttp = new XMLHttpRequest();
  var that= this;
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     that.parseMetaData(this.responseText,cb);
    }
  };
  xhttp.open("GET", resource, true);
  xhttp.send();
}


resourceMngr.prototype.parseMetaData = function(_data, cb){
  var world = {}
  var data = JSON.parse(_data);
  console.log('metadata is now')
  console.dir(data)
  cb(world)
}
