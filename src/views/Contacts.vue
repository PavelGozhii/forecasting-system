<template>
    <div>
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <router-link to="/admin" class="navbar-brand">Система прогнозування</router-link>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav mr-auto mt-2 mt-md-0">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Контакти</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <router-link to="/add-human-settlement" class="btn btn-primary">
                        Додати населений пункт
                    </router-link>
                </div>
            </nav>
        </header>

        <div class="content container">
            <h2>Зв'яжіться з нами</h2>
            <h3>Наша почта: <p class="font-weight-bold">pavelgozhii@gmail.com</p></h3>
            <h3>Наш номер <p class="font-weight-bold">+38(066)029-8008</p></h3>
            <h3>Наш адрес <p class="font-weight-bold">вул. Ломоносова 67</p></h3>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17114.887072009366!2d30.470524982523617!3d50.382529306180395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c8e8a3917bdd%3A0x8ca3e5a1dbcfc402!2sVystavkovyi%20tsentr!5e0!3m2!1sen!2sua!4v1576071767373!5m2!1sen!2sua"
                    width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
        </div>
        <footer class="pt-4 my-md-5 pt-md-5 border-top">
            <div class="row">
                <div class="col-12 col-md footer-icon">
                    <img class="mb-2" src="https://image.flaticon.com/icons/svg/2261/2261695.svg" alt="" width="24"
                         height="24">
                    <small class="d-block mb-3 text-muted">© Pavel Go 2020</small>
                </div>
                <div class="col-6 col-md">
                    <h5>Features</h5>
                    <ul class="list-unstyled text-small">
                        <li><a class="text-muted" href="http://localhost:8081/swagger-ui.html#">Documenation for API</a>
                        </li>
                    </ul>
                </div>
                <div class="col-6 col-md">
                    <h5>Resources</h5>
                    <ul class="list-unstyled text-small">
                        <li><a class="text-muted" href="https://github.com/PavelGozhii/TeaMarketSpring">Resource</a>
                        </li>
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

</script>

<style>

</style>