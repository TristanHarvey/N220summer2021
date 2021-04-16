let objects = [

    { color: "#FF0000", height: 100, width: 300 },
   
    { color: "#FFFF00", height: 200, width: 200 },
   
    { color: "#ff0000", height: 300, width: 100 },
   
   ];

   for(let i=0; i < objects.length; i++) {
    let obj = objects[i];
    let elem = document.createElement("div");
    elem.style.backgroundColor = obj.color
    elem.style.width = obj.width + "px"
    elem.style.height = obj.height +"px"

    // ...
    document.body.appendChild(elem);
    }