<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="../index.html">Система прогнозування</a>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-md-0">
            <li class="nav-item">
              <a class="nav-link" href="contact.html">Контакти</a>
            </li>
          </ul>
        </div>
        <div>
          <a href="view/create-element.html" class="btn btn-primary">
            Додати населений пункт
          </a>
        </div>
      </nav>
    </header>

    <div class="content container m-5">
      <div class="row">
        <div class="col-md">
          <img class="card-img rounded-lg" id="element-img"
               src="https://pmg.ua/uploads/2020-09/18/5f64e204749f5-5eda1c0abb87c-a6195a569051705b8519184e356fccae-wide-bigjpgjpg.jpg">
        </div>
        <div class="col-md element-data">
          <h4 class="card-title" id="element-name"></h4>
          <p class="card-text" id="element-description">
          </p>
          <button class="btn btn-warning element-btn-edit m-4">Змінити</button>
          <button class="btn btn-danger element-btn-delete m-4">Видалити</button>
        </div>
      </div>
    </div>
    <footer class="pt-4 my-md-5 pt-md-5 border-top" style="overflow-x: hidden;">
      <div class="row">
        <div class="col-12 col-md footer-icon">
          <img class="mb-2" src="https://image.flaticon.com/icons/svg/2261/2261695.svg" alt="" width="24"
               height="24">
          <small class="d-block mb-3 text-muted">© Pavel Go 2019</small>
        </div>
        <div class="col-6 col-md">
          <h5>Features</h5>
          <ul class="list-unstyled text-small">
            <li><a class="text-muted" href="http://localhost:8081/swagger-ui.html#">Documenation for API</a></li>
          </ul>
        </div>
        <div class="col-6 col-md">
          <h5>Resources</h5>
          <ul class="list-unstyled text-small">
            <li><a class="text-muted" href="https://github.com/PavelGozhii/TeaMarketSpring">Resource</a></li>
            <li><a class="text-muted" href="https://spring.io/">Spring</a></li>
            <li><a class="text-muted" href="https://www.postgresql.org/">Postgres</a></li>
            <li><a class="text-muted" href="https://getbootstrap.com/">Bootstrap</a></li>
            <li><a class="text-muted" href="https://jquery.com/">JQuery</a></li>
          </ul>
        </div>
        <div class="col-6 col-md">
          <h5>About</h5>
          <ul class="list-unstyled text-small">
            <li><a class="text-muted"
                   href="https://www.linkedin.com/in/%D0%B3%D0%BE%D0%B6%D0%B8%D0%B9-%D0%BF%D0%B0%D0%B2%D0%BB%D0%BE-2bba92187/">LinkedIn</a>
            </li>
            <li><a class="text-muted" href="https://github.com/PavelGozhii">GitHub</a></li>
            <li><a class="text-muted"
                   href="https://drive.google.com/open?id=1VkUaG3p-QRzT2uATUaMAvIveeLzqv5QWmbgBUjzvzeI">Portfolio</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'CityDetails',
  }
</script>
