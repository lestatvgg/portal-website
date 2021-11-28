const clock = document.getElementById('clock');

function hexoClock () {
    let time = new Date();
    let h = (time.getHours() % 12).toString();
    let m = time.getMinutes().toString();

        if (h.length < 2) {
            h = '0' + h;
        }

        if (m.length < 2) {
            m = '0' + m;
        }

        let clockString = h + ":" + m ;

        clock.textContent = clockString;






}
hexoClock();
setInterval(hexoClock, 1000);