var typed=new Typed(".text",{
     strings:["• Technologist", "• Ecosystem Builder"],
     typeSpeed:100,
     backSpeed:100,
     backDelay:1000,
     loop:true
});
const circles = document.querySelectorAll('.circle');
circles.forEach(elem => {
    var dots = elem.getAttribute('data-dots')
    var marked = elem.getAttribute('data-percent');
    var percent = Math.floor(dots * marked / 100);
    var rotate = 360 / dots;
    var points = "";
    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i: ${i}; --rot: ${rotate}deg"></div>`;
    }
    elem.innerHTML = points;
    const pointsMarked = elem.querySelectorAll('.points');
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked')
    }
})
