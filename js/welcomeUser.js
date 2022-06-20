// Bienvenido "hero"
setTimeout(()=> {
    let bienvenida =  document.getElementById('bienvenida')
        bienvenida.innerHTML = `
        <h3>Proyecto final Coderhouse</h3>
        <p class="fs-5 col-md-8">Diego Rodriguez Pinedo - Comision 30360  <br> <span class="text-muted small">Este proyecto trata sobre una compra venta de guitarras, en la columna izquierda se puede ver las guitarras en stock y en la columna derecha aparecen las que carga el usuario atraves del formulario "Vender".</span></p>
        `
}, 500);

setTimeout(()=> {
    let nuevosInstrumentos = document.getElementById('nuevosInstrumentos')
        nuevosInstrumentos.innerHTML = `
        <h2>Publicá tu guitarra</h2>
        <p>Si estas buscando vender tu instrumento, podemos ayudarte, cargá tu instrumento aquí y nos comunicaremos.</p>
        `
    let stockInstrumentos = document.getElementById('stockInstrumentos')
        stockInstrumentos.innerHTML = `
        <h2>Instrumentos en venta</h2>
        <p>Aquí encontras nuestra selección de instrumentos vintage, únicos o interpretaciones modernas y finas de un clásico.</p>
        `
}, 1500);