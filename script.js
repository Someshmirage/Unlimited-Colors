//generated random color
const randomcolor = function(){
    const hex = "0123456789ABCDF"
    let color = '#'

    for(let i = 0; i<6; i++ ){
    color += hex[Math.floor(Math.random() * 16)]
    }
    return color

};
//console.log(randomcolor()); console madhe random color value diste
let intervalId;
const startChangingColor = function(){
if (!intervalId) {
    intervalId = setInterval(changeBGColor,1000);
}

    function changeBGColor  (){
        document.body.style.backgroundColor = randomcolor();
    }
   
};
const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
};


document.querySelector("#start").addEventListener
('click',startChangingColor)
document.querySelector("#stop").addEventListener
('click',stopChangingColor)