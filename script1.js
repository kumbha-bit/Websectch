// Mobile menu toggle
function toggleMenu() {
  document.getElementById('nav-links').classList.toggle('show');
}

// Scroll effect for navbar
window.addEventListener('scroll', ()=>{
  const navbar = document.getElementById('navbar');
  if(window.scrollY > 50){
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Electrical animation
const canvas = document.getElementById('electricCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight*0.8;

let lines = [];
for(let i=0;i<50;i++){
    lines.push({
        x: Math.random()*canvas.width,
        y: Math.random()*canvas.height,
        length: 50 + Math.random()*50,
        angle: Math.random()*Math.PI*2,
        speed: 0.5 + Math.random(),
        width: 1 + Math.random()*2,
        color: `hsl(${Math.random()*360}, 80%, 60%)`
    });
}

function animate(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    for(let l of lines){
        ctx.beginPath();
        ctx.moveTo(l.x, l.y);
        ctx.lineTo(l.x + Math.cos(l.angle)*l.length, l.y + Math.sin(l.angle)*l.length);
        ctx.strokeStyle = l.color;
        ctx.lineWidth = l.width;
        ctx.shadowColor = l.color;
        ctx.shadowBlur = 10;
        ctx.stroke();

        l.x += Math.cos(l.angle)*l.speed;
        l.y += Math.sin(l.angle)*l.speed;

        if(l.x>canvas.width || l.x<0 || l.y>canvas.height || l.y<0){
            l.x = Math.random()*canvas.width;
            l.y = Math.random()*canvas.height;
        }
    }
    requestAnimationFrame(animate);
}
animate();

window.addEventListener('resize', ()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight*0.8;
});

// Simple frontend login demo
function loginUser(){
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const loginMsg = document.getElementById('loginMsg');

  if(username === "admin" && password === "1234"){
    loginMsg.style.color = "#00ff00";
    loginMsg.innerText = "Login Successful! Redirecting...";
    setTimeout(()=>{ window.location.href="#home"; }, 1000);
  } else {
    loginMsg.style.color = "#ff0000";
    loginMsg.innerText = "Invalid Username or Password!";
  }
}

