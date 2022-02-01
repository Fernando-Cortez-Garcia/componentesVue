//componentes
//tarjetas
Vue.component('movie-card', {
    props: ['img', 'title', 'year'],
    template: `
            <div class="card card-style mt-2 " style="width: 15rem; height:35rem;">
        <img width="100px" v-bind:src="img" class="card-img-top" alt="...">
        <div class="card-body">
            <h6 class="card-title">{{title}}</h6>
            <p class="card-text">Año: {{year}}</p>
            <div class="start"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
            <a href="#" class="btn btn-verpelicula ">Ver pelicula <i class="fas fa-eye"></i></a>
            
        </div>
        </div>
    `
});


//componente barra de navegacion
Vue.component('nav-bar', {
    template: ` 
    <div class="nav">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark container-fluid">
            <div class="container-fluid">
                <a class="titulo-nav" href="#" id="titulo-nav">Peli-Pop <i class="fas fa-film"></i></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a class="titulo-nav m-lg-3" href="#" id="titulo-nav2">Peli-Pop <i class="fas fa-film"></i></a>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-2">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Estrenos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Peliculas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled">Series</a>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2 " type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-buscar" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

    </div>`
})

Vue.component('footer-bar', {
    template: `<footer class="py-5 container">
  <div class="row">
    

    <div class="col-2 m-lg-5">
      <h5>Section</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Estrenos</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Peliculas</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Series</a></li>
  
      </ul>
    </div>

    <div class="col-4 offset-1 m-lg-5">
      <form>
        <h5>Subscribete</h5>
        <div class="d-flex w-100 gap-2">
          <label for="newsletter1" class="visually-hidden">Email address</label>
          <input id="newsletter1" type="text" class="form-control" placeholder="Correo">
          <button class="btn btn-primary" type="button">Subscribirse</button>
        </div>
      </form>
    </div>
    <p ml-5>© Fernando Cortez G 2022</p>
  </div>
</footer>`
});

const app = new Vue({
    el: '#app',

    data: {
        movies: [
            { title: 'Volver al Futuro', img: 'http://es.web.img3.acsta.net/pictures/14/07/09/11/59/106906.jpg', year: '1985' },
            { title: 'La verdad duele', img: 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SY445_.jpg', year: '2017' },
            { title: 'No manches frida', img: 'https://www.pelis24tv.co/wp-content/uploads/2020/02/no-manches-frida-3567-poster-scaled.jpg', year: '2016' },
            { title: 'Son como niños', img: 'http://3.bp.blogspot.com/_rsdqufw36s8/TFHqQayCJCI/AAAAAAAACWQ/bvcf4fDdgL4/s1600/20100308063607.jpg', year: '2010' },
            { title: 'Como si fuera la primera vez', img: 'https://i.pinimg.com/originals/d2/c8/d5/d2c8d5d6637bc760a7dd7beb08dfaf93.jpg', year: '2004' },
            { title: 'Spiderman', img: 'https://torrentsdepeliculas.org/wp-content/uploads/2018/06/220px-spider-man2002poster.jpg', year: '2004' },
            { title: 'The amazing spaiderman', img: 'https://image.tmdb.org/t/p/w1280/ww2YPsGe6Yd1nUHH6XVvfj4Rrin.jpg', year: '2015' },
            { title: 'Spiderman home coming', img: 'https://4.bp.blogspot.com/-TrI1BmAORWw/WYUJ7R1kYiI/AAAAAAAADXk/56qOMm9Ph3UajgnaMaTJVpeYPEftSPMsQCLcBGAs/s1600/1.jpg', year: '2017' },



        ]

    },
});