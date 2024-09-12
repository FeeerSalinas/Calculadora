const viewer = document.querySelector(".viewer");
const botones = document.querySelectorAll(".ops");
const numeros = document.querySelectorAll(".num");
const clear = document.querySelector(".clear");
const igual = document.querySelector(".equals");

clear.addEventListener("click", () => {
    if(viewer.textContent.length === 1 || viewer.textContent ==="Error" || viewer.textContent ==="Infinity") {
        viewer.textContent = "0";
    }
    else{
        viewer.textContent = viewer.textContent.slice(0, -1);
    }
});

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        console.log(boton.textContent);
        const operacion = boton.textContent;
        if(viewer.textContent === "0") {
            viewer.textContent = "";
        }
        viewer.textContent += operacion;
    });
})

numeros.forEach(numero => {
    numero.addEventListener("click", () => {
        const numeroPrs = numero.textContent;
        if (viewer.textContent === "0") {
            viewer.textContent = "";
        }
        viewer.textContent += numeroPrs;
    });
})

igual.addEventListener("click", () => {

    try{
        viewer.textContent = eval(viewer.textContent);
    }
    catch{
        viewer.textContent = "Error";
    }
});