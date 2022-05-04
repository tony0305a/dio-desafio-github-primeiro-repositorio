(function(){
    var saldo = document.getElementById("valor");
    var saldoc = document.getElementById("valorc");
    saldoc.innerHTML = 600;

    // depositar
    var inputD = document.getElementById("input-depo");
    saldo.innerHTML = 1;
    const deposit = document.getElementById("confirmar-deposito");
    deposit.addEventListener("click",function(){
        saldo.innerHTML = parseInt(saldo.innerHTML) + parseInt(inputD.value);
        inputD.value = "";
    })
    //sacar
    var inputS = document.getElementById("input-saca");
    const saq = document.getElementById("confirmar-saque");
    saq.addEventListener("click",function(){
        if(parseInt(inputS.value) <= parseInt(saldo.innerHTML)){
        saldo.innerHTML = parseInt(saldo.innerHTML) - parseInt(inputS.value)
        inputS.value = "";
        } else{
            alert("saldo insuficiente - operação negada");
            console.log("Saldo insuficiente");
            inputS.value = "";
        }
    })
    //tran sferir
    var inputT = document.getElementById("input-trans");
    const trans = document.getElementById("confirmar-trans");
    trans.addEventListener("click", function(){
        if(parseInt(inputT.value) <= parseInt(saldo.innerHTML)){
            saldoc.innerHTML = parseInt(saldoc.innerHTML) + parseInt(inputT.value)           
            saldo.innerHTML = parseInt(saldo.innerHTML) - parseInt(inputT.value)
            inputT.value = "";    
            } else{
                alert("saldo insuficiente - operação negada");
                console.log("Saldo insuficiente");
                inputT.value = "";
            }
    })


})();

const depo = document.getElementById("depositar-1");
const saca = document.getElementById("sacar-1");
const trans = document.getElementById("transferir-1");

const depoModal = document.getElementById("modal-depositar");
const sacaModal = document.getElementById("modal-sacar");
const transModal = document.getElementById("modal-trans");

depo.addEventListener("click",function(){
    depoModal.classList.toggle('show');
});
saca.addEventListener("click",function(){
    sacaModal.classList.toggle('show');
});
trans.addEventListener("click",function(){
    transModal.classList.toggle('show');
});

