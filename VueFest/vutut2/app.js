new Vue({

el:'#vue-app',
data:
{
    name: 'Shaun',
    age: 26,
    job:"ninja",
    website:"https://runescape.com/",
    websiteTag: '<a href = "https://runescape.com">RS3</a>'
    ,x:0,
    y:0,
    keycheck: "press a key"

},

methods:{

greet: function(time){
    return "h8 u " + time + " mr. " + this.job
}
,
add: function(inc){
    this.age+=inc
},

subtract: function(inc){

   this.age-=inc
},

keyedup: function(event){
    this.keycheck +=event.key;

},

UpdateXY: function(event){


    this.x = event.offsetX;
    this.y = event.offsetY;

}
, 

click: function(){

    alert("you clicked me");

}

}


});