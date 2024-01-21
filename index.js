let sideBarT = document.querySelector('.sidebar-toggle');
let sideBar = document.querySelector('.sidebar');
let btn = document.querySelector('.close-btn');
sideBarT.addEventListener('click',()=>{
    if(sideBar.classList.contains('show-sidebar')){
        sideBar.classList.remove('show-sidebar')
    }else{
        sideBar.classList.add('show-sidebar')
    }
})
btn.addEventListener('click',()=>{
    sideBar.classList.remove('show-sidebar')
})
sideBar.classList.add('show-sidebar');
btn.addEventListener('click',()=>{
sideBar.classList.remove('show-sidebar');
})




































