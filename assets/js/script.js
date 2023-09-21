const hours = window.document.getElementById('horas')
const min = window.document.getElementById('minutos')
const seconds = window.document.getElementById('segundos')

const relogio = setInterval(function time() {
    let dateToday = new Date

    let h = dateToday.getHours()
    let m = dateToday.getMinutes()
    let s = dateToday.getSeconds()


    hours.textContent = h;
    min.textContent = m;
    seconds.textContent = s

    
})

