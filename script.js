const time = document.getElementById("time");

setInterval( () => {
    const dat = new Date();

   time.innerHTML = dat.toLocaleTimeString();
}, 1000);
