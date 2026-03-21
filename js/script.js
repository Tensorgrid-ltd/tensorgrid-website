
function toggleMenu(){
document.getElementById("menu").classList.toggle("show");
}
// on smaller screens allow parent items to open their submenu by tapping/clicking
function setupSubmenuToggles(){
    const menuLinks = document.querySelectorAll('nav ul#menu > li > a');
    menuLinks.forEach(link => {
        const submenu = link.nextElementSibling;
        if(submenu && submenu.tagName === 'UL'){
            link.addEventListener('click', function(e){
                if(window.innerWidth <= 768){
                    e.preventDefault(); // prevent following the # link
                    link.parentElement.classList.toggle('active');
                }
            });
        }
    });
}

