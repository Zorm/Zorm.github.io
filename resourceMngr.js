var resourceMngr = function(){

}

resourceMngr.prototype.loadResource = function(resource,cb){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     cb(this.responseText);
    }
  };
  xhttp.open("GET", resource, true);
  xhttp.send();
}
