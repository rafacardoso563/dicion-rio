// variaveis para chamar os modias
const modal = document.getElementById("modal");
const modal1 = document.getElementById("modal1");
const modal2 = document.getElementById("modal2");
const modal3 = document.getElementById("modal3");
const modal4 = document.getElementById("modal4");
const modal5 = document.getElementById("modal5");
const modal6 = document.getElementById("modal6");
const modal7 = document.getElementById("modal7");
const modal8= document.getElementById("modal8");
const modal9 = document.getElementById("modal9");




// variaveis para abrir e fechar os modais
const palavra = document.querySelectorAll(".palavra")
const fechar = document.querySelectorAll('.fechar')


// funçao para mudar a visibilidade dos modais
palavra[0].addEventListener('click',() =>{
    modal.style.visibility = 'visible'
    
})

fechar[0].addEventListener('click', ()=>{
    modal.style.visibility= 'hidden'
})


palavra[1].addEventListener('click',() =>{
    
    modal1.style.visibility = 'visible'
})

fechar[1].addEventListener('click', ()=>{
    
    modal1.style.visibility= 'hidden'
})


palavra[2].addEventListener('click',() =>{
    modal2.style.visibility = 'visible'
})

fechar[2].addEventListener('click', ()=>{
    modal2.style.visibility= 'hidden'
})


palavra[3].addEventListener('click',() =>{
    modal3.style.visibility = 'visible'
})

fechar[3].addEventListener('click', ()=>{
    modal3.style.visibility= 'hidden'
})

palavra[4].addEventListener('click',() =>{
    modal4.style.visibility = 'visible'
})

fechar[4].addEventListener('click', ()=>{
    modal4.style.visibility= 'hidden'
})


palavra[5].addEventListener('click',() =>{
    modal5.style.visibility = 'visible'
})

fechar[5].addEventListener('click', ()=>{
    modal5.style.visibility= 'hidden'
})


palavra[6].addEventListener('click',() =>{
    modal6.style.visibility = 'visible'
})

fechar[6].addEventListener('click', ()=>{
    modal6.style.visibility= 'hidden'
})


palavra[7].addEventListener('click',() =>{
    modal7.style.visibility = 'visible'
})

fechar[7].addEventListener('click', ()=>{
    modal7.style.visibility= 'hidden'
})


palavra[8].addEventListener('click',() =>{
    modal8.style.visibility = 'visible'
})

fechar[8].addEventListener('click', ()=>{
    modal8.style.visibility= 'hidden'
})


palavra[9].addEventListener('click',() =>{
    modal9.style.visibility = 'visible'
})

fechar[9].addEventListener('click', ()=>{
    modal9.style.visibility= 'hidden'
})


// variaveis para tocar do audios
botao = document.getElementById("botao")
audio = document.getElementById("audio")

// funçao para tocar o audio quando o mouse ficar em cima
botao.addEventListener('mouseover', function(){
    audio.play();
})
// funcoa para pausar o audio e voltar do começo
botao.addEventListener('mouseleave', function(){
    audio.pause();
    audio.currentTime = 0;
})



botao1 = document.getElementById("botao1")
audio1 = document.getElementById("audio1")

botao1.addEventListener('mouseover', function(){
    audio1.play();
})

botao1.addEventListener('mouseleave', function(){
    audio1.pause();
    audio1.currentTime = 0;
})




botao2 = document.getElementById("botao2")
audio2 = document.getElementById("audio2")

botao2.addEventListener('mouseover', function(){
    audio2.play();
})

botao2.addEventListener('mouseleave', function(){
    audio2.pause();
    audio2.currentTime = 0;
})




botao3 = document.getElementById("botao3")
audio3 = document.getElementById("audio3")

botao3.addEventListener('mouseover', function(){
    audio3.play();
})

botao3.addEventListener('mouseleave', function(){
    audio3.pause();
    audio3.currentTime = 0;
})



botao4 = document.getElementById("botao4")
audio4 = document.getElementById("audio4")

botao4.addEventListener('mouseover', function(){
    audio4.play();
})

botao4.addEventListener('mouseleave', function(){
    audio4.pause();
    audio4.currentTime = 0;
})




botao5 = document.getElementById("botao5")
audio5 = document.getElementById("audio5")

botao5.addEventListener('mouseover', function(){
    audio5.play();
})

botao5.addEventListener('mouseleave', function(){
    audio5.pause();
    audio5.currentTime = 0;
})


botao6 = document.getElementById("botao6")
audio6 = document.getElementById("audio6")

botao6.addEventListener('mouseover', function(){
    audio6.play();
})

botao6.addEventListener('mouseleave', function(){
    audio6.pause();
    audio6.currentTime = 0;
})



botao7 = document.getElementById("botao7")
audio7 = document.getElementById("audio7")

botao7.addEventListener('mouseover', function(){
    audio7.play();
})

botao7.addEventListener('mouseleave', function(){
    audio7.pause();
    audio7.currentTime = 0;
})

botao8 = document.getElementById("botao8")
audio8 = document.getElementById("audio8")

botao8.addEventListener('mouseover', function(){
    audio8.play();
})

botao8.addEventListener('mouseleave', function(){
    audio8.pause();
    audio8.currentTime = 0;
})


botao9 = document.getElementById("botao9")
audio9 = document.getElementById("audio9")

botao9.addEventListener('mouseover', function(){
    audio9.play();
})

botao9.addEventListener('mouseleave', function(){
    audio2.pause();
    audio9.currentTime = 0;
})

// variaveis para o conto
const titulo = document.getElementById("titulo");
const con = document.getElementById("con");
const fechar2 = document.getElementById('fechar_texto')

// funcoes para mudar o display do conto
titulo.addEventListener('click',() =>{
    con.style.display = 'block'
    
})

fechar2.addEventListener('click', ()=>{
    con.style.display= 'none'
})