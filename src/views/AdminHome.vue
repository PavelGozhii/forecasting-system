<template>
    <div class="admin-home">
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
                            <router-link to="/contacts" type="submit" class="navbar-brand">Контакти
                            </router-link>
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
            <div class="row d-frex align-items-center">
                <div class="shop-element col-md">
                    <div class="card">
                        <img class="card-img-top"
                             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFEf9iap5i30y9PqtVDb7W6JJILSf6Q_I42A&usqp=CAU"
                             alt="Card image cap">
                        <div class="card-body">
                            <h4 class="card-title">Кропивницький</h4>
                            <p class="card-text">Кіровоградська область</p>
                            <a href="view/element.html?id=data.id" class="btn btn-primary">Детальніше</a>
                        </div>
                    </div>
                </div>
                <div class="shop-element col-md">
                    <div class="card">
                        <img class="card-img-top" src="https://mistoboyarka.gov.ua/img/item/22619/1.jpg"
                             alt="Card image cap">
                        <div class="card-body">
                            <h4 class="card-title">Боярка</h4>
                            <p class="card-text">Київська область</p>
                            <a href="view/element.html?id=data.id" class="btn btn-primary">Детальніше</a>
                        </div>
                    </div>
                </div>
                <div class="shop-element col-md">
                    <div class="card">
                        <img class="card-img-top"
                             src="https://pmg.ua/uploads/2020-09/18/5f64e204749f5-5eda1c0abb87c-a6195a569051705b8519184e356fccae-wide-bigjpgjpg.jpg"
                             alt="Card image cap">
                        <div class="card-body">
                            <h4 class="card-title">Ужгород</h4>
                            <p class="card-text">Закарпатьска область</p>
                            <a href="view/element.html?id=data.id" class="btn btn-primary">Детальніше</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'AdminHome',
        components: {}
    }
</script>

<style>

</style>