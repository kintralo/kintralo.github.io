const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener ("click", () => {
        const botonApretado = boton.textContent;

if (boton.id ==="clear") {
    pantalla.textContent="0";
    return;
    }

 if (boton.id === "igual"){
     pantalla.textContent = eval(pantalla.textContent);
     return;
    }
if (pantalla.textContent === "0"){
    pantalla.textContent = botonApretado;

}else{
    pantalla.textContent += botonApretado;
}
       
        
    })
})
