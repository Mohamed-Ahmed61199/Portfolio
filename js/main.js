const showContact = document.querySelector('#show')
const inf = document.querySelector('.inf');
const navAnc = document.querySelectorAll('#nav ul li a');
const sections = document.querySelectorAll('section');


function header() {
    //when click in showcontact add show class to info
    showContact.addEventListener('click', (e) => {
        inf.classList.toggle('show');
    });
    //when your are in width more than 1200px add show class to info
    if (window.innerWidth  > 1200 ) {
        inf.classList.add('show');
    } else if (window.innerWidth < 1200) {
        inf.classList.remove('show');
    }
}
// add (active) class to navigation links and (show) class to its section
function nvabar(){
    navAnc.forEach((a, index) => {
        // when click in any link 
        a.addEventListener('click', () => {
            // remove (active) class from all navigation links and add it to the clicked link
            navAnc.forEach(item => item.classList.remove('active'));
            a.classList.add('active');
            // remove (show) class from all sections and add it to the section corresponding to the clicked link
            sections.forEach(section => section.classList.remove('show'));
            sections[index].classList.add('show');
        });
    });
}

window.addEventListener('resize', header);
header();
nvabar();


