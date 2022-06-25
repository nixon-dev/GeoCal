console.log("Hello")

// Código de cuadrado

console.group("Cuadrado")

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * 2;
}

//Código de interación de cuadrado con HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const result = document.getElementById("resultsquare");
    const value = input.value;


    const perimetro = perimetroCuadrado(value);
    result.innerText = "El perímetro es de " + perimetro + " cm";

}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const result = document.getElementById("resultsquare")
    const value = input.value;

    const area = areaCuadrado(value);
    result.innerText = "El área es de " + area + " cm2";
}

console.groupEnd()


//Código de triángulo

console.group("triángulo")

function perimetroTriangulo(lado1, lado2, base){
    return Number.parseInt(lado1) + Number.parseInt(lado2) + Number.parseInt(base);
}

function areaTriangulo(base, altura){
    return (Number.parseInt(base) * Number.parseInt(altura)) / 2;
}

function calcularAlturaTriangulo(lado1, lado2, base){
    if(lado1 === lado2){
        return Math.sqrt((lado1 * lado1) - ((base / 2) * (base / 2)))
    } else{
        return (lado1 * lado2) / base
    }
}

//Código de interacción de triángulo con HTML

function calcularPerimetroTriangle(){
    let lado1 = document.getElementById("inputTriangle_lado1");
    let lado1Value = lado1.value;

    let lado2 = document.getElementById("inputTriangle_lado2");
    let lado2Value = lado2.value;

    let base = document.getElementById("inputBase");
    let baseValue = base.value;

    const result = document.getElementById("resultTriangle");
    
    let perimetro = perimetroTriangulo(lado1Value, lado2Value, baseValue);
    result.innerText = "El perímetro es de " + perimetro + " cm";
}

function calcularAreaTriangle(){
    let lado1 = document.getElementById("inputTriangle_lado1");
    let lado1Value = lado1.value;

    let lado2 = document.getElementById("inputTriangle_lado2");
    let lado2Value = lado2.value;

    let base = document.getElementById("inputBase");
    let baseValue = base.value;

    const result = document.getElementById("resultTriangle");
    
    let altura = calcularAlturaTriangulo(lado1Value, lado2Value, baseValue);
    let area = areaTriangulo(altura, baseValue);

    result.innerText = "El área es de " + area + " cm2";
}

console.groupEnd()

//Código de círculo

console.group("círculo");

function diametroCirculo(radio){
    return Number.parseInt(radio * 2);
}

const PI = Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return Number.parseInt(diametro * PI);
}

function areaCirculo(radio){
    return Number.parseInt((radio**2) * PI);
}

//Código de interacción con HTML

function calcularAreaCircle(){
    const input = document.getElementById("inputCircle"); 
    const result = document.getElementById("resultCircle");
    const value = input.value;

    const area = areaCirculo(value); 
    result.innerText = "The area is " + area + " cm2"
}

function calcularCircunferenciaCircle(){
    const input = document.getElementById("inputCircle"); 
    const result = document.getElementById("resultCircle");
    const value = input.value;

    const circunferencia = perimetroCirculo(value); 
    result.innerText = "The circumference is " + circunferencia + " cm"
}

function calcularDiametroCircle(){
    const input = document.getElementById("inputCircle"); 
    const result = document.getElementById("resultCircle");
    const value = input.value;

    const diametro = diametroCirculo(value); 
    result.innerText = "The diameter is " + diametro + " cm"
}

console.groupEnd()

