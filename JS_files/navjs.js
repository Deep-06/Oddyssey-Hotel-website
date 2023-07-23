let room=document.getElementById('roombtn')
let activity=document.getElementById('activitybtn')
let actmodal=document.getElementById('modal-activities')
let roomodal=document.getElementById('modal-rooms')
room.addEventListener('mouseover',()=>{
    roomodal.style.display='flex';
})
activity.addEventListener('mouseover',()=>{
actmodal.style.display='flex';
})
room.addEventListener('mouseout',()=>{
    roomodal.style.display='none';
})
activity.addEventListener('mouseout',()=>{
    actmodal.style.display='none';
})
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('sticky-navbar');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition > 0) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});