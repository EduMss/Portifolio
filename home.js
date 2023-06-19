window.onload = function () { 
    txt = document.querySelector(".text-GCB");
    overflow = document.querySelector(".overflow-GCB");    
    txt.style.maxHeight = overflow.dataset.state === "fechado" ? "0px" : "500px";

    txt = document.querySelector(".text-CUDB");
    overflow = document.querySelector(".overflow-CUDB");
    txt.style.maxHeight = overflow.dataset.state === "fechado" ? "0px" : "500px";

    txt = document.querySelector(".text-SNA");
    overflow = document.querySelector(".overflow-SNA");
    txt.style.maxHeight = overflow.dataset.state === "fechado" ? "0px" : "500px";

    txt = document.querySelector(".text-SPA");
    overflow = document.querySelector(".overflow-SPA");
    txt.style.maxHeight = overflow.dataset.state === "fechado" ? "0px" : "500px";

    txt = document.querySelector(".text-PVP");
    overflow = document.querySelector(".overflow-PVP");
    txt.style.maxHeight = overflow.dataset.state === "fechado" ? "0px" : "500px";

    txt = document.querySelector(".text-PMP");
    overflow = document.querySelector(".overflow-PMP");
    txt.style.maxHeight = overflow.dataset.state === "fechado" ? "0px" : "500px";
} 

const btnGCB = document.querySelector(".button-GCB-toggle");
const btnCUDB = document.querySelector(".button-CUDB-toggle");
const btnSNA = document.querySelector(".button-SNA-toggle");
const btnSPA = document.querySelector(".button-SPA-toggle");
const btnPVP = document.querySelector(".button-PVP-toggle");
const btnPMP = document.querySelector(".button-PMP-toggle");

btnGCB.addEventListener("click", initToggleGCB);
btnCUDB.addEventListener("click", initToggleCUDB);
btnSNA.addEventListener("click", initToggleSNA);
btnSPA.addEventListener("click", initToggleSPA);
btnPVP.addEventListener("click", initTogglePVP);
btnPMP.addEventListener("click", initTogglePMP);

//Gerenciamento de Contas Bancarias
function initToggleGCB(e){
    const txt = document.querySelector(".text-GCB");
    const overflow = document.querySelector(".overflow-GCB");

    txt.style.maxHeight = e.target.dataset.state === "aberto" ? "0px" : "500px";

    e.target.setAttribute("data-state", e.target.dataset.state === "aberto" ? "fechado" : "aberto");

    textoBotao = "Gerenciamento de Contas Bancarias ";
    e.target.innerHTML = e.target.dataset.state === "aberto" ? textoBotao+"&#9650;" :  textoBotao+"&#9660;" ;

    overflow.setAttribute("data-state", e.target.dataset.state === "aberto" ? "aberto" : "fechado" );
}

//Calculadora utilizando deslocamento de Bit
function initToggleCUDB(e){
    const txt = document.querySelector(".text-CUDB");
    const overflow = document.querySelector(".overflow-CUDB");

    txt.style.maxHeight = e.target.dataset.state === "aberto" ? "0px" : "500px";

    e.target.setAttribute("data-state", e.target.dataset.state === "aberto" ? "fechado" : "aberto");

    textoBotao = "Calculadora utilizando deslocamento de Bit ";
    e.target.innerHTML = e.target.dataset.state === "aberto" ? textoBotao+"&#9650;" :  textoBotao+"&#9660;" ;

    overflow.setAttribute("data-state", e.target.dataset.state === "aberto" ? "aberto" : "fechado" );
}

//Site de nuvem de arquivos
function initToggleSNA(e){
    const txt = document.querySelector(".text-SNA");
    const overflow = document.querySelector(".overflow-SNA");

    txt.style.maxHeight = e.target.dataset.state === "aberto" ? "0px" : "500px";

    e.target.setAttribute("data-state", e.target.dataset.state === "aberto" ? "fechado" : "aberto");

    textoBotao = "Site de nuvem de arquivos ";
    e.target.innerHTML = e.target.dataset.state === "aberto" ? textoBotao+"&#9650;" :  textoBotao+"&#9660;" ;

    overflow.setAttribute("data-state", e.target.dataset.state === "aberto" ? "aberto" : "fechado" );
}

//Site de passagens aéreas
function initToggleSPA(e){
    const txt = document.querySelector(".text-SPA");
    const overflow = document.querySelector(".overflow-SPA");

    txt.style.maxHeight = e.target.dataset.state === "aberto" ? "0px" : "500px";

    e.target.setAttribute("data-state", e.target.dataset.state === "aberto" ? "fechado" : "aberto");

    textoBotao = "Site de passagens aéreas ";
    e.target.innerHTML = e.target.dataset.state === "aberto" ? textoBotao+"&#9650;" :  textoBotao+"&#9660;" ;

    overflow.setAttribute("data-state", e.target.dataset.state === "aberto" ? "aberto" : "fechado" );
}

//Player de Vídeo
function initTogglePVP(e){
    const txt = document.querySelector(".text-PVP");
    const overflow = document.querySelector(".overflow-PVP");

    txt.style.maxHeight = e.target.dataset.state === "aberto" ? "0px" : "500px";

    e.target.setAttribute("data-state", e.target.dataset.state === "aberto" ? "fechado" : "aberto");

    textoBotao = "Player de Vídeo ";
    e.target.innerHTML = e.target.dataset.state === "aberto" ? textoBotao+"&#9650;" :  textoBotao+"&#9660;" ;

    overflow.setAttribute("data-state", e.target.dataset.state === "aberto" ? "aberto" : "fechado" );
}

//Player de Música
function initTogglePMP(e){
    const txt = document.querySelector(".text-PMP");
    const overflow = document.querySelector(".overflow-PMP");

    txt.style.maxHeight = e.target.dataset.state === "aberto" ? "0px" : "500px";

    e.target.setAttribute("data-state", e.target.dataset.state === "aberto" ? "fechado" : "aberto");

    textoBotao = "Player de Música ";
    e.target.innerHTML = e.target.dataset.state === "aberto" ? textoBotao+"&#9650;" :  textoBotao+"&#9660;" ;

    overflow.setAttribute("data-state", e.target.dataset.state === "aberto" ? "aberto" : "fechado" );
}