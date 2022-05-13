
document.querySelector('#enviar').addEventListener("click", (evento) => {
    evento.preventDefault();
    let n1 = document.querySelector('#n1').value;
    let n2 = document.querySelector('#n2').value;
    let n3 = document.querySelector('#n3').value;
    let n4 = document.querySelector('#n4').value;
    let n5 = document.querySelector('#n5').value;

    somar(n1, n2, n3, n4, n5);

});

function somar(n1, n2, n3, n4, n5) {
    let rt = Number(n1) + Number(n2) + Number(n3);
    let dt = Number(n4) + Number(n5);
    let tl = rt - dt
    let receba = document.getElementById("receba");
    receba.value = rt;
    let receba2 = document.getElementById("receba2");
    receba2.value = dt;
    let receba3 = document.getElementById("receba3");
    receba3.value = tl;

}

function limpar(n1, n2, n3, n4, n5) {

    document.querySelector('#n1').value = "";
    document.querySelector('#n2').value = "";
    document.querySelector('#n3').value = "";
    document.querySelector('#n4').value = "";
    document.querySelector('#n5').value = "";
    document.querySelector('#rt').value = "";
    document.querySelector('#dt').value = "";
    document.querySelector('#tl').value = "";

}
