const TOGGLEBUTTON = document.getElementsByClassName('toggle-button')[0];
const NAVBARLINKS = document.getElementsByClassName('navbar-links')[0];
const THEMECHANGE = document.getElementById('theme-change');

// Function to enable drop down toggle button when the viewport is smaller than a specific amount of pixels defined in css file. 
TOGGLEBUTTON.addEventListener('click', () => {
    NAVBARLINKS.classList.toggle('active');
});

//Function to enable toggle between dark and light theme. 
THEMECHANGE.addEventListener('click', checkMode);

function lightModeOn(){
    document.body.classList.add("light-mode");
}
 
function lightModeOff(){
    document.body.classList.remove("light-mode");
}

function checkMode(){
    if(THEMECHANGE.checked){
        lightModeOn();
    }
    else{
        lightModeOff();
    }
}
