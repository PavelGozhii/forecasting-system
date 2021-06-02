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
                            <router-link to="/contacts" type="submit" class="navbar-brand">Контакти
                            </router-link>
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

        <div class="content container">
            <h1 class="display-3">Додати населений пункт</h1>
            <form>
                <div class="form-group">
                    <label for="exampleInputDescription">Країна</label>
                    <input type="text" class="form-control" id="country" placeholder="Регіон">
                </div>
                <div class="form-group">
                    <label for="exampleInputDescription">Регіон</label>
                    <input type="text" class="form-control" id="exampleInputDescription" placeholder="Регіон">
                </div>
                <div class="form-group">
                    <label for="exampleInputName">Населений пункт</label>
                    <input type="text" class="form-control" id="exampleInputName" aria-describedby="nameHelp"
                           placeholder="Назва населеного пункту">
                </div>
                <div class="form-group">
                    <label for="exampleInputPicture">Зображення</label>
                    <input type="text" class="form-control" id="exampleInputPicture"
                           placeholder="Посилання на картинку">
                    <br/>
                    <button type="button" class="btn btn-primary picture-button">Перевірити</button>
                    <br/>
                    <br/>
                    <img class="img-fluid rounded-lg picture-element">
                </div>
                <div class="dropdown row">
                    <div class="col-2">
                        <button class="btn btn-secondary dropdown-toggle " type="button" id="dropdownMenuButton1"
                                data-bs-toggle="dropdown" aria-expanded="false">
                            Вибрати показник
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a class="dropdown-item" href="#">Інвестиції в інновації млн</a></li>
                            <li><a class="dropdown-item" href="#">ВВП на душу населення дес.млн грн</a></li>
                            <li><a class="dropdown-item" href="#">Витрати на оплату праці дес.млн.грн</a></li>
                        </ul>
                    </div>
                    <div class="form-group col-8">
                        <input type="text" class="form-control" id="value" placeholder="Показник">
                    </div>
                    <div>
                        <a href="#" class="btn btn-outline-primary add-element-btn">Додати показник</a>
                    </div>
                </div>
                <br/>
                <br/>
                <div class="row">
                    <div class="col">
                        <ul class="list">
                            <li class="list-item">Кількость населення (тыс.)</li>
                            <li class="list-item">Інвестиції в освіту (млн. грн.)</li>
                            <li class="list-item">Інвестиції в науку (млн. грн.)</li>
                        </ul>
                    </div>
                    <div class="col">
                        <ul class="list">
                            <li class="list-item">1000</li>
                            <li class="list-item">30</li>
                            <li class="list-item">13.5</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <button type="button" class="btn btn-danger">Видили показник</button>
                </div>
                <br/>
                <br/>
                <a href="#" class="btn btn-outline-primary add-element-btn">Додати</a>
            </form>
        </div>
    </div>
</template>

<script>

</script>

<style>

</style>