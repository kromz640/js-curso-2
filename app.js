let titulo=document.querySelector('h1');
titulo.innerHTML="Hora de desafio";


function clickConsola()
{
    alert("Hiciste click en boton consola")
}


function preguntarCiudad()
{
    let ciudad=prompt("Escribe una ciudad de brazil");
    alert(`Estuve en la ciudad de ${ciudad} y me acorde de ti`);
}

function amoJs()
{
    alert("Yo amo JS");
}

function sumarDosNumeros()
{
    let numero1=parseInt(prompt("Escribe el primer numero"));
    let numero2=parseInt(prompt("Escribe el segundo numero"));
    let suma=parseInt(numero1+numero2);
    alert(`La suma es ${suma}`);

}