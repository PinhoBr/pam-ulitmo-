
function calcular() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let resultadoimc = document.getElementById("imc");
    let resultado = document.getElementById("resultado");
    let body = document.getElementById("bg");
    let button = document.getElementById("bu");
    let imagemResultado = document.getElementById("imagemResultado");
    let divImagem = document.getElementById("imagem-fundo");


    let imc = peso / (altura * altura);
    

    switch (true) {
        case (imc > 18.6 && imc < 24.9):
            body.style.backgroundColor = "#393E46";
            button.style.backgroundColor = "#8E1616";
            button.style.color = "#ffffff";
            resultadoimc.innerHTML = "IMC: " + imc 
            resultado.innerHTML = "peso ideal"
            imagemResultado.src = "../imagem/miranha.png";
            imagemResultado.style.height = "200px";
            break;
        case (imc > 25 && imc < 29.9):
            body.style.backgroundColor = "#00224D";
            button.style.backgroundColor = "#A0153E";
            button.style.color = "#ffffff";
            resultadoimc.innerHTML = "IMC: " + imc 
            resultado.innerHTML = "acima do peso"
            imagemResultado.src = "../imagem/eggman.png";
            imagemResultado.style.height = "220px";
            break;
        case (imc > 30 && imc < 34.9):
            body.style.backgroundColor = "#0C0C0C";
            button.style.backgroundColor = "#ffffff";
            button.style.color = "#0C0C0C";
            resultadoimc.innerHTML = "IMC: " + imc 
            resultado.innerHTML = "Obeso grau 1"
            imagemResultado.src = "../imagem/barba.png";
            imagemResultado.style.height = "250px";
            break;
        case (imc > 35 && imc < 39.9):
            body.style.backgroundColor = "#11aeca";
            button.style.backgroundColor = "#ffffff";
            button.style.color = "#1E201E";
            resultadoimc.innerHTML = "IMC: " + imc 
            resultado.innerHTML = "Obeso grau 2"
            imagemResultado.src = "../imagem/veku.png";
            imagemResultado.style.height = "250px";
            break;
        case (imc > 40):
            body.style.backgroundColor = "#C95792";
            button.style.backgroundColor = "#FFC6C6";
            button.style.color = "#ffffff";
            resultadoimc.innerHTML = "IMC: " + imc 
            resultado.innerHTML = "Obeso grau 3"
            imagemResultado.src = "../imagem/magin.png";
            imagemResultado.style.height = "250px";
            break;
        default:
            body.style.backgroundColor = "#3C3D37";
            button.style.backgroundColor = "#003161";
            button.style.color = "#ffffff";
            resultadoimc.innerHTML = "IMC: " + imc 
            resultado.innerHTML = "abaixo do peso"
            imagemResultado.src = "../imagem/luffy.png";
    }
}
