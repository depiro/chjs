class Movie {
    constructor (year,nameMovie) {
        this.year = year;
        this.nameMovie = nameMovie;
    }
}

const movies = [];
movies.push(new Movie (1988, `La tumba de las luciérnagas`));
movies.push(new Movie (1986, `El castillo en el cielo`));
movies.push(new Movie (1988, `Mi vecino Totoro`));
movies.push(new Movie (1989, `Nicky, la aprendiz de bruja`));
movies.push(new Movie (1989, `Kiki: Entregas a domicilio`));
movies.push(new Movie (1991, `Recuerdos del ayer`));
movies.push(new Movie (1992, `Porco Rosso`));
movies.push(new Movie (1993, `Puedo escuchar el mar	`));
movies.push(new Movie (1994, `Pompoko	Isao Takahata`));
movies.push(new Movie (1995, `Susurros del corazón`));
movies.push(new Movie (1997, `La princesa Mononoke`));
movies.push(new Movie (1999, `Mis vecinos los Yamada`));
movies.push(new Movie (2001, `El viaje de Chihiro`));
movies.push(new Movie (2002, `Haru en el reino de los gatos`));
movies.push(new Movie (2002, `El regreso del gato`));
movies.push(new Movie (2004, `El castillo ambulante`));
movies.push(new Movie (2004, `El increíble castillo vagabundo`));
movies.push(new Movie (2006, `Cuentos de Terrama`));
movies.push(new Movie (2008, `Ponyo en el acantilado`));
movies.push(new Movie (2008, `Ponyo y el secreto de la sireni`));
movies.push(new Movie (2010, `Arrietty y el mundo de los diminutos`));
movies.push(new Movie (2010, `El mundo secreto de Arriety`));
movies.push(new Movie (2011, `La colina de las amapolas`));
movies.push(new Movie (2013, `Se levanta el viento`));
movies.push(new Movie (2013, `El viento se levanta`));
movies.push(new Movie (2013, `El cuento de la princesa Kaguya`));
movies.push(new Movie (2014, `El recuerdo de Marnie`));
movies.push(new Movie (2020, `Earwig y la bruja`));

//Lista de peliculas
for (const movie of movies) {
    console.log(movie.year + ` ` + movie.nameMovie);
}

//Función de búsqueda
function searchMovie(year) {
    return movies.find(elemento => elemento.year == year);
}
 
for (let index = 0; index < 1; index++) {   
    let busqueda = searchMovie(Number(prompt(`Busca pelicula de Studio Ghibli por año`)));
    if(busqueda != undefined){
        alert(`En` + ` ` + busqueda.year + ` ` + `salió` + ` ` + busqueda.nameMovie );
    }else{
        // alert(`En` + ` `  + busqueda.year + ` ` + `no hubo pelicula`);
        alert(`Ese año no hubo pelicula`);
    }
}

