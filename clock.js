// Esta función agrega un 0 delante de cada valor cuando éste es menor o igual a '9'.
function addZero(num){
    if (num <= 9) {
        return ("0"+num)
    } else {return (num)}
}

// Esta función agrega las siglas AM o PM dependiendo si son horas antes o después del mediodía, respectivamente.
function addAmPm(num){
    if (num >= 12) {
        return ("PM")
    } else {return ("AM")}
}

// Esta función convierte las horas del formato de 24 a 12.
function converter(num){
    if (num >= 13 && num <= 24) {
        return (num - 12)
    } else {return (num)}
}

// Declaro las variables dia, horas, minutos y segundos mediante funciones del objeto Date.
function digitalClock() {
    const today = new Date();
    const hours = today.getHours(); 
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();

    //Acá se realiza la llamada a la función setClock.
    setClock(addZero(converter(hours)), addZero(minutes), addZero(seconds));
}

function analogClock() {
    setInterval(() => {
        const deg = 6;
        const hr = document.querySelector('#hr');
        const mn = document.querySelector('#mn');
        const sc = document.querySelector('#sc');

        let day = new Date();
        let hh = day.getHours() * 30;
        let mm = day.getMinutes() * deg;
        let ss = day.getSeconds() * deg;

        hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
        mn.style.transform = `rotateZ(${mm}deg)`;
        sc.style.transform = `rotateZ(${ss}deg)`;
    })
}

//  Setea el reloj digital en el tag <h1> del HTML
function setClock(hours, minutes, seconds) {

    //document.querySelector devuelve el primer elemento del documento que coincida con el grupo de selectores.
    const h1 = document.querySelector(".digital h1");

    const today2 = new Date();
    const hour2 = today2.getHours();

    const cartel = addAmPm(hour2);

    h1.textContent = [hours, minutes, seconds].join(":") + " " + cartel;
}

setInterval(digitalClock, 1000);
digitalClock();
analogClock();