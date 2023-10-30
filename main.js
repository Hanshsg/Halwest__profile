let pic = document.querySelector('.profileImage');

pic.addEventListener('click',()=> {
    if (localStorage.getItem('theme') == 'white' || localStorage.getItem('theme') == null) {
        document.body.classList.add('D');
        localStorage.setItem('theme','dark');
    } else {
        document.body.classList.remove('D');
        localStorage.setItem('theme','white');
    }

    
});

 document.body.onload = check();
function check() {
    if (localStorage.getItem('theme') == 'white' || localStorage.getItem('theme') == null) {
        document.body.classList.remove('D');
    } else {
        document.body.classList.add('D');
    }
}