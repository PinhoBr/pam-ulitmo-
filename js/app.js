
function calcular() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let resultadoimc = document.getElementById("imc");
    let resultado = document.getElementById("resultado");
    let body = document.getElementById("bg");
    let button = document.getElementById("bu");
    


    let imc = peso / (altura * altura);
    

    switch (true) {
        case (imc > 18.6 && imc < 24.9):
            body.style.backgroundColor = "#393E46";
            button.style.backgroundColor = "#8E1616";
            button.style.color = "#ffffff";
            resultadoimc.innerHTML = "IMC: " + imc 
            resultado.innerHTML = "peso ideal"
            
            break;
        case (imc > 25 && imc < 29.9):
            body.style.backgroundColor = "#00224D";
            button.style.backgroundColor = "#A0153E";
            button.style.color = "#ffffff";
            resultadoimc.innerHTML = "IMC: " + imc 
            resultado.innerHTML = "acima do peso"
            
            break;
        case (imc > 30 && imc < 34.9):
            body.style.backgroundColor = "#0C0C0C";
            button.style.backgroundColor = "#ffffff";
            button.style.color = "#0C0C0C";
            resultadoimc.innerHTML = "IMC: " + imc 
            resultado.innerHTML = "Obeso grau 1"
            
            break;
        case (imc > 35 && imc < 39.9):
            body.style.backgroundColor = "#11aeca";
            button.style.backgroundColor = "#ffffff";
            button.style.color = "#1E201E";
            resultadoimc.innerHTML = "IMC: " + imc 
            resultado.innerHTML = "Obeso grau 2"
            
            break;
        case (imc > 40):
            body.style.backgroundColor = "#C95792";
            button.style.backgroundColor = "#FFC6C6";
            button.style.color = "#ffffff";
            resultadoimc.innerHTML = "IMC: " + imc 
            resultado.innerHTML = "Obeso grau 3"
            
            break;
        default:
            body.style.backgroundColor = "#3C3D37";
            button.style.backgroundColor = "#003161";
            button.style.color = "#ffffff";
            resultadoimc.innerHTML = "IMC: " + imc 
            resultado.innerHTML = "abaixo do peso"
            
    }
}
