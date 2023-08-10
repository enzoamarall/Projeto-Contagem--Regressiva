const hr = document.querySelector('#horas')
const min = document.querySelector('#minutos')
const seg = document.querySelector('#segundos')
const dia = document.querySelector('#dias')

let tempo = setInterval(relogio,1000)

setInterval(relogio, 1000)

function relogio(){
    let sistema = new Date()
    let h = sistema.getHours()
    let m = sistema.getMinutes()
    let s = sistema.getSeconds()
 
    //new Date (ano, mes, dia)
 
 let diferenca =  new Date("1 January 2024") - sistema  //pego data atual e 1 de janeiro de 2023 e pego a diferença
 let diasTotais = Math.floor(diferenca/(1000 * 60 * 60 * 24)) // tranformar os milisegundos em dias

 if(h<10){
    h="0" + h
 }
 if(m<10){
    m="0" + m
 }
 if(s<10){
    s="0" + s
 }
 dia.textContent= diasTotais
 hr.textContent=23-h
 min.textContent=59-m
 seg.textContent=59-s


}

