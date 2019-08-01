var stage = document.getElementById('stage')
var c = stage.getContext('2d')

var pen = {

x: 0,
y: 0,
down: false,
color: 'orange',
shape: 'square',
size: 5


}

function draw(){

  //where we do our drawing
if (pen.down){
c.beginPath()

if (pen.shape == 'square'){
c.rect(pen.x-5 , pen.y-5, pen.size, pen.size)
} else if (pen.shape =='circle'){
c.arc(pen.x, pen.y, pen.size/2, 0, 2*Math.PI)
}
else if(pen.shape == 'triangle'){

  c.moveTo(pen.x, pen.y - (pen.size/2))
  c.lineTo(pen.x-(pen.size/2), pen.y + (pen.size/2))
  c.lineTo(pen.x + (pen.size/2), pen.y + (pen.size/2))
}
else if (pen.shape = 'rectangele'){
c.rect(pen.x, pen.y-pen.size/2, pen.size/10, pen.size)
}

c.fillStyle= pen.color
c.fill()
}




  requestAnimationFrame(draw)
}
 

 requestAnimationFrame(draw)


 stage.addEventListener('mousemove', function (e){
   pen.x = e.pageX - this.offsetLeft
   pen.y = e.pageY - this.offsetTop

 })

stage.addEventListener('mousedown', function(e){

pen.down =true

})

stage.addEventListener('mouseup', function(e){

pen.down = false

})

var colourButtons = document.getElementById ('colors')
colourButtons.addEventListener ('click', function(e){
  var newColor = e.target.dataset.color
  pen.color = newColor
})

document.querySelectorAll('#colors button') .forEach (b => {
b.style.backgroundColor = b.dataset.color
})
var penButtons = document.getElementById ('pens')
penButtons.addEventListener ('click', function(e){
  var newshape = e.target.dataset.shape
  pen.shape = newshape
})

var clear = document.getElementById('clear')
clear.addEventListener('click', function(){

c.beginPath()
c.rect(0, 0, stage.width, stage.height)
c.fillStyle ='white'
c.fill()
})

var size = document.getElementById('size')
size.addEventListener('input',function(){
pen.size = this.value

})
