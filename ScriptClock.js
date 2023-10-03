//get all the values refernces

const body = document.querySelector("body"),
    handHour = document.querySelector(".hour"),
    handMinute = document.querySelector(".minute"),
    handSecond = document.querySelector(".second"),
    modeSwitch = document.querySelector(".mode-switch");

//add a event listener to the toggle 
modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    //check if dark mode is running in background
    const isDarkMode = body.classList.contains("dark");

    //switch a mode to light or dark
    modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";

    //set to local storage 
    localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");

    //if dark mode is already present in local storage so set background to dark mode
    if(localStorage.getItem("mode") === "Dark Mode"){
        body.classList.add("dark");
        modeSwitch.textContent = "Light Mode"; 
    }
});


const updateClock = () =>{
    //fetch current time and update hour, minute & second
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30 * hh + mm / 2;
    let mRotation = 6 * mm;
    let sRotation = 6 * ss; 


    //to rotate all hands accordingly 
    
    handHour.style.transform = `rotate(${hRotation}deg)`;
    handMinute.style.transform = `rotate(${mRotation}deg)`;
    handSecond.style.transform = `rotate(${sRotation}deg)`;
    
    
    
};


//an update function to set clock to evry second it goes
setInterval(updateClock, 1000);
