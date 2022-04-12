document.querySelectorAll("button")[0].addEventListener("click",function()
{
  this.innerHTML =2;
  this.style.backgroundColor = "red";
});

var rando =Math.random();
document.querySelectorAll("button")[1].addEventListener("click",function()
{
  var sac = Math.floor(rando*2);
  this.innerHTML =sac;
  this.style.backgroundColor = "red";
});

var rands =Math.random();
document.querySelectorAll("button")[2].addEventListener("click",function()
{
  var sac =Math.floor(rands*8)+2;
  this.innerHTML =sac;
  this.style.backgroundColor = "red";
});

var randw =Math.random();
document.querySelectorAll("button")[3].addEventListener("click",function()
{
  var sac =Math.floor(randw*8)+2;
  this.innerHTML =sac;
  this.style.backgroundColor = "red";
});
