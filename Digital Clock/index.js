console.log("Project-3");

const clock = document.querySelector('#clock')

setInterval(function () {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
    // console.log(date.toLocaleDateString());
}, 1000)