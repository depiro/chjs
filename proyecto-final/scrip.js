class Guitar {
    constructor (brand,model,price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }

    toString() {
        return `${this.brand}. ${this.model}, ${this.price} USD`;
    }
}

// Agrega una guitarra a la lista de venta
function newGuitar(brand, model, price) {
    stockGuitars.unshift(new Guitar(brand, model, price));
}
const stockGuitars = []
newGuitar(`Fender`, `Stratocaster Custom Shop 60's Relic`, 4490);
newGuitar(`Fender`, `Telecaster AVRI '52 Butterscotch 2016`, 2290);
newGuitar(`Gibson`, `SG Standard '61`, 4990);
newGuitar(`Gibson`, `Les Paul 25/50 Tobacco Burst 1978`, 3490);

// Menu de navegción
function navMenu() {
    const selectItem = prompt(
        `Bienvenido! compramos y vendemos guitarras \n Selecciona una opción ingresando un número: \n
        1- Comprar \n
        2- Vender \n
        3- Salir \n`);

    switch(selectItem){
            case `1`:
                function saleGuitars() {
                    let listStockGuitars = '';
                    
                    for(const guitar of stockGuitars) {
                        let seeGuitar = `${stockGuitars.indexOf(guitar) + 1} - ${guitar.brand}, (${guitar.model}), ${guitar.price} USD\n`;
                        
                        listStockGuitars += seeGuitar;
                    }
                    return listStockGuitars;
                }

                let selectGuitar = parseInt(prompt(`Selecciona la que te gustaría comprar ingresando el número correspondiente: \n ${saleGuitars()}`));

                let indexGuitar = selectGuitar - 1;

                alert(`Compraste ${stockGuitars[indexGuitar].brand} ${stockGuitars[indexGuitar].model} ${stockGuitars[indexGuitar].price} USD\n Te llamaremos para finalizar la compra.`);

                stockGuitars.splice(indexGuitar, 1);
                navMenu();
                break;

            case `2`:
                alert('Para iniciar la venta, describenos tu instrumento.');
    
                let brandGuitar = prompt('¿Que marca es tu guitarra?');
                let modelGuitar = prompt('¿Que modelo?');
                let priceGuitar = prompt('¿Cual es precio?');
 
                newGuitar(brandGuitar,modelGuitar,priceGuitar);
    
                alert(`Ya está en venta tu guitarra.\nPodes verla seleccionando la opcion COMPRAR.\n 
                ${stockGuitars.join("\n")}`);
                
                navMenu();
                break;

            case `3`:
                break;
            
            default:
                navMenu();
                break;

    }
}
navMenu()

