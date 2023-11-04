var colors=["#20e9d1"];

var body = document.querySelector("body");
var index = 0;
setInterval(()=>{
    body.style.backgroundColor = colors[index];
    index
},1000)
