// toggle nav bar
const toggleButton = document.getElementById("toggle");
const navbarLinks = document.getElementsByTagName("nav")[0];

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
});


//goto top
const goto_top = document.getElementById("goto-top");
window.onscroll = function(){
    scrollFunction();
  navbarLinks.classList.remove("active");
}
function scrollFunction() {
    if (document.getElementsByTagName("body")[0].scrollTop > 20 || document.getElementsByTagName("html")[0].scrollTop > 20) {
        goto_top.classList.add("goto-active");
    } else {
        goto_top.classList.remove("goto-active");
    }
}
//scroll to top
goto_top.addEventListener("click", ()=>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});


//theme settings
let theme = localStorage.getItem('theme')

if(theme == null){
    setTheme('light')
}else{
    setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log('Option clicked:', mode)
        setTheme(mode)
    })
}

function setTheme(mode){
    if(mode == 'light'){
        document.getElementById('theme-style').href = 'default.css'
    }

    if(mode == 'black'){
        document.getElementById('theme-style').href = 'black.css'
    }

    localStorage.setItem('theme', mode)
}

