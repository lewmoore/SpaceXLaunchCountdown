fetch('https://api.spacexdata.com/v2/launches/next')
.then((response) => {
    return response.json();
})
.then((json) => {
    let nextLaunch = json.launch_date_local

    let deadline = new Date(nextLaunch).getTime();
    let x = setInterval(function() {
    let now = new Date().getTime();
    let t = deadline - now;
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML = days + "d " 
    + hours + "h " + minutes + "m " + seconds + "s ";
        if (t < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "EXPIRED";
        }
    }, 1000);
});



