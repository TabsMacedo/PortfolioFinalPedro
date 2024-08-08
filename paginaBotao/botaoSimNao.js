let botao1 = document.querySelector("#botao1");

botao1.addEventListener("mouseover", function(){
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    let botaoWidth = botao1.offsetWidth;
    let botaoHeight = botao1.offsetHeight;

    let newLeft = Math.random() * (windowWidth - botaoWidth);
    let newTop = Math.random() * (windowHeight - botaoHeight);

    // aplique as novas posições ao botão
    botao1.style.position = "absolute";
    botao1.style.left = newLeft + "px";
    botao1.style.top = newTop + "px";
})
function botaoSim(){
    window.location = ""
}