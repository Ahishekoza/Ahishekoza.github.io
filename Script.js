




const menu=document.getElementById('menu');
const cancel=document.getElementById('cancel');
const navLink=document.getElementById('navLinks');


if(this.menu){
    menu.addEventListener('click',()=>{
        navLink.classList.add('show-menu')
    })
}

if(this.cancel){
    cancel.addEventListener('click',()=>{
        navLink.classList.remove('show-menu')
    })
}


const navLinks=document.querySelectorAll('.nav_links')

const lineAction=()=>{
    
    navLink.classList.remove('show-menu')
}

navLinks.forEach((n)=>{
    n.addEventListener('click',lineAction)
})


/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader=()=>{
    const header=document.getElementById('header')

    this.scrollY>=50?header.classList.add('bg-header')
                    :header.classList.remove('bg-header')  
    
    this.scrollY>=50?navLink.classList.remove('show-menu')  
                    :navLink
}
window.addEventListener('scroll',scrollHeader)


// ==================================Loader ================================= //
function loader(){
    document.querySelector('.loader-container').classList.add('fade-Out');
  }
  
  function fadeOut(){
    setInterval(loader, 3000);
  }
  
  window.onload = fadeOut;

   
 function Submit(){
    window.location.href="../HTMLpages/sub-projects.html"
  }