const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

   burger.addEventListener('click', () => {
          nav.classList.toggle('nav-active');

          navLinks.forEach((link, index)=>{
            if(link.style.animation){
              link.style.animation = ""
            }else{
              link.style.animation =`navlinkfade 0.5s ease forwards ${index/7 + 1.5}s`
            }
            
         })

         burger.classList.toggle('toggle')
         
   });

 
}

navSlide();





var observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry)=> {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }else {
            // entry.target.classList.remove('show');
        }
    });
});


var hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


var observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry)=> {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show1');
        }else {
            // entry.target.classList.remove('show1');
        }
    });
});


var observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry)=> {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show1');
        }else {
            // entry.target.classList.remove('show1');
        }
    });
});


var hiddenElements = document.querySelectorAll('.hidden1');
hiddenElements.forEach((el) => observer.observe(el));



let countDownDate = new Date('Dec 3, 2023 00:00:00').getTime();
let x = setInterval(function(){
   let now = new Date().getTime();
   let distance = countDownDate - now;


   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

   document.getElementById('days').innerHTML = days;
   document.getElementById('hours').innerHTML = hours;
   document.getElementById('mins').innerHTML = minutes;
   document.getElementById('seconds').innerHTML = seconds;

   if(distance < 0){
    clearInterval(x)
    document.getElementById('days').innerHTML = '00';
    document.getElementById('hours').innerHTML = '00';
    document.getElementById('mins').innerHTML = '00';
    document.getElementById('seconds').innerHTML = '00';
   }
   
},1000);