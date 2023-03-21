
// var x=Number (prompt("enter numder"))
// var z=Number (prompt("enter another number"))
// var numbers =document.getElementById('numbers')
// if (x>z){
// numbers.innerHTML= "first number > second number"
// }
// else if (z>x){
// numbers.innerHTML= "second number > first number"
// }
// else{
// numbers.innerHTML= "first number = second number"
// }

// var result=document.getElementById('result')
// var x=Number(prompt('enter number 1'))
// var y=Number(prompt('enter number 2'))
// var opr=prompt('enter * / - +')
// if(opr=='+'){
// result.innerHTML='result' + (x+y)
// }
// else if (opr=='-'){
//     result.innerHTML='result ='+(x-y)
// }
// else if (opr=='*'){  
//     result.innerHTML='result ='+ (x*y)
// }
// else if (opr=='/'){ 
//     result.innerHTML='result ='+ (x/y)
// }



//   function sumNumbers (){
//  var x =Number(prompt('enter number'))
//   var sum=1
//   for(var i=1 ; i<=x; i++){
//  sum=sum*i
//  }
//   result.innerHTML=(sum)
//   }
//  sumNumbers()





//  var max=chekMax(533,67,877)
//  console.log('max number =' , max)
// var x=Number(prompt("enter your number"))
// var result=document.getElementById("result")
//  function Numbers(){

// for(var i=0 ; i<=12 ; i++){
//   result.innerHTML+=(x + "*" + i + "=" + x*i  )
//   }
//   }
//   Numbers()

 


//  function Numbers(){
//  var result=document.getElementById('result')
//  var x=Numbers(prompt("enter current year"))
//  var y=Numbers(prompt("enter birth year"))
//  result.innerHTML=x + "-" + y + "=" + (x-y)
//  }
 

// var change=document.getElementById('change')
// var demo=document.getElementById('demo')
// function changeolor(){
//   demo.style.backgroundColor='blue'
// }

// var input1=document.getElementById('input1')
// function changebg(){
//   input1.style.backgroundColor='blue'
// }

//  var bg=document.getElementById('form')
//  function ecolor(color){
// bg.style.backgroundColor=color
//  }

// var years=document.getElementById('years')

// for(var i=1980 ; i<=2022 ; i++){
//     years.innerHTML+='<option>1980'+i+'</option>'
// }


// var num2=document.getElementById('num2')
// var num1=document.getElementById('num1')
// x=Math.round(Math.random()*20)
// y=Math.round(Math.random()*20)
// num1.value=x
// num2.value=y

// function checkans(){
// if(answer.value==x+y)


// }




//  var equal=document.getElementById('equal')
//  var clear=document.getElementById('clear')
//  var input=document.getElementById('input1')
// var numbers=document.getElementsByClassName('num')
//  console.log(numbers)
// for(var i=0 ; i<numbers.length ; i++){
//  numbers[i].onclick=function(){
//      input.value+=this.value
//  }
//  }

// equal.onclick=function(){
// input.value=eval(input.value)

// }

// clear.onclick=function(){
// input.value=''
// }



// var x= Number(prompt("enter your age"))
// var result =document.getElementById('result')
//  if(x<20){
// result.innerHTML="you are young"
// }
//  else if (x>=20){
//    result.innerHTML="you are adult"
// }
// function chekMax(x,y,z){
// if(x>y && x>z){
// return x
// }

// else if (y>x && y>z){
//    return y
// }

// else{
// return z
// } 
// }

// var x=document.getElementById('demo')
// var dives=document.getElementsByClassName('test')
// console.log(dives[0]);
// var text=document.getElementsByTagName('p')
// console.log(text[0]);
// var demo=document.querySelector('#demo')
// var demo=document.querySelectorAll('.test')
// console.log(demo[1]);

// var photo=document.images
// console.log(photo[1])

//var btn=document.getElementById('ok')
//var photo=document.images
//console.log(photo[1]);
//btn.onclick=function(){
//photo[1].src='img/img/hero.jpg'
//}

//  var forms=document.forms
//  console.log(forms[2])
// forms[0].text1.value='js'
// forms[0].number1.value=452
// forms[1].text2.value='index'
// var links=document.links
// console.log(links);

// btn.addEventListener('click' , 
// function(){
//     if(forms[2].pass.type=='number'){
//         forms[2].pass.type='password'
//         btn.innerHTML='show'
//     }
//     else{
//         forms[2].pass.type='number'
//         btn.innerHTML='hide'
//     }
    
// }

// )

// var divOne=document.getElementById('divOne')
//  btn.addEventListener('click' , 
//  function(){
// if(divOne.classList.contains('one')){
// divOne.classList.replace('one' , 'two')
// }
// else{
//     divOne.classList.replace('two' , 'one')
// }
//  }
//  )

// var img =document.getElementById('photo')
// var input =document.getElementById('text')
// var btn =document.getElementById('btn')
// btn.addEventListener('click' ,change)
// function change (){
// img.setAttribute('src' , 'img/img/bg.jpg')
// img.setAttribute('alt' , 'photo')
// }

// var width=document.getElementById('width')
// var height=document.getElementById('height')
// window.onreset=function(){
//     height.innerHTML=window.innerHeight
//     height.innerHTML=window.innerWidth
// }

//  var input1=document.getElementById('input1')

// function time(){
// input1.value='2 sec'
// }

// function time2(){
//     input1.value='4 sec'
//     }

// setTimeout(time , 2000)
// setTimeout(time2 , 4000)

// 

// var i=0
// function count(){

// if (i==10){
// clearInterval(x)
// }
//     input1.innerHTML=i
//     i++
    

// }

// x=setInterval(count ,1000)

// 

// var TxtType = function(el, toRotate, period) {
//     this.toRotate = toRotate;
//     this.el = el;
//     this.loopNum = 0;
//     this.period = parseInt(period, 10) || 2000;
//     this.txt = '';
//     this.tick();
//     this.isDeleting = false;
// };

// TxtType.prototype.tick = function() {
//     var i = this.loopNum % this.toRotate.length;
//     var fullTxt = this.toRotate[i];

//     if (this.isDeleting) {
//     this.txt = fullTxt.substring(0, this.txt.length - 1);
//     } else {
//     this.txt = fullTxt.substring(0, this.txt.length + 1);
//     }

//     this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

//     var that = this;
//     var delta = 200 - Math.random() * 100;

//     if (this.isDeleting) { delta /= 2; }

//     if (!this.isDeleting && this.txt === fullTxt) {
//     delta = this.period;
//     this.isDeleting = true;
//     } else if (this.isDeleting && this.txt === '') {
//     this.isDeleting = false;
//     this.loopNum++;
//     delta = 500;
//     }
//     setTimeout(function() {
//     that.tick();
//     }, delta);
// };

// window.onload = function() {
//     var elements = document.getElementsByClassName('typewrite');
//     for (var i=0; i<elements.length; i++) {
//         var toRotate = elements[i].getAttribute('data-type');
//         var period = elements[i].getAttribute('data-period');
//         if (toRotate) {
//           new TxtType(elements[i], JSON.parse(toRotate), period);
//         }
//     }
//     // INJECT CSS
//     var css = document.createElement("style");
//     css.type = "text/css";
//     css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
//     document.body.appendChild(css);
// };



// var btn=document.getElementById('btn')
// btn.addEventListener('click' , scroll)

// function scroll(){
// window.scrollTo(0 ,714)
// }

// var test=document.getElementById('demo')
// console.log(test.offsetTop);


var divs=document.getElementsByClassName('list')
var links=document.getElementsByClassName('li-link')
window.onscroll=function(){
for(var i=0 ; i<divs.length ; i++){
if(scrollY > divs[i].offsetTop && scrollY< divs[i].offsetTop +divs[i].offsetHeight) {
    links [i].classList.add('activeLink')
}
else{
    links[i].classList.remove('activeLink')
}
}
}

// for(var i=0 ; i<links.length ; i++){
//     links[i].onclick=function(){
//     alert('bb')
//     }
// }

// for(var i=0 ; i<lis.lenth ; i++){
//     links[i].onclick=function(){
//     this.classList.add('active')
//     for(var j=0 ; j<links.lenth ; j++){
//     links[i].cclassList.remove('active')
//     }
//     }
// }

// var display=document.getElementById('display')
// var photo=document.getElementById('photo')
// var imeges=['my app/img04.jpg' ,'my app/img05.jpg','my app/img06.jpg','my app/img07.jpg','my app/img08.jpg']
// var randomNum=Math.floor(Math.random()*imeges.length)
// display.onclick=function(){
// var randomNum=Math.floor(Math.random()*imeges.length) 
// photo.setAttribute('src' , imeges[randomNum])
// }


// var lis=document.getElementsByClassName('li-link')
// var lis=document.getElementsByClassName('list')

// window.onscroll=function(){
//     for(var i=0 ; i<dispatchEvent.length ; i++){
//         if(scrollY >divs[i].offsetTop && scrollY<divs[i].offsetTop +divs[i].offsetHeight){
//             lis[i].classList.add('activeLink')
//         }
        
//         else{
//             lis[i].classList.remove('activeLink')
//         }
//     }
// }






