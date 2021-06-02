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
                        </li>
                    </ul>
                </div>
                <div>
                    <router-link to="/add-human-settlement" class="btn btn-primary mx-5">
                        Додати населений пункт
                    </router-link>
                </div>
                <div>
                    <button @click="logOut" class="btn btn-primary mx-5">
                        Вийти
                    </button>
                </div>
            </nav>
        </header>
        <div class="content container">
            <div class="row d-frex align-items-center">
                <div class="shop-element col-md" v-for="(item, index) in settlements" :key="index">
                    <div class="card">
                        <img class="card-img-top"
                             :src="item.photo"
                             alt="Card image cap">
                        <div class="card-body">
                            <h4 class="card-title">{{item.name}}</h4>
                            <p class="card-text">{{item.regionName}}</p>
                            <router-link to="/view-element/1" class="btn btn-primary">Детальніше</router-link>
                        </div>
                    </div>
                </div>
                <!--                <div class="shop-element col-md">-->
                <!--                    <div class="card">-->
                <!--                        <img class="card-img-top"-->
                <!--                             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFEf9iap5i30y9PqtVDb7W6JJILSf6Q_I42A&usqp=CAU"-->
                <!--                             alt="Card image cap">-->
                <!--                        <div class="card-body">-->
                <!--                            <h4 class="card-title">Кропивницький</h4>-->
                <!--                            <p class="card-text">Кіровоградська область</p>-->
                <!--                            <a href="view/element.html?id=data.id" class="btn btn-primary">Детальніше</a>-->
                <!--                        </div>-->
                <!--                    </div>-->
                <!--                </div>-->
                <!--                <div class="shop-element col-md">-->
                <!--                    <div class="card">-->
                <!--                        <img class="card-img-top" src="https://mistoboyarka.gov.ua/img/item/22619/1.jpg"-->
                <!--                             alt="Card image cap">-->
                <!--                        <div class="card-body">-->
                <!--                            <h4 class="card-title">Боярка</h4>-->
                <!--                            <p class="card-text">Київська область</p>-->
                <!--                            <a href="view/element.html?id=data.id" class="btn btn-primary">Детальніше</a>-->
                <!--                        </div>-->
                <!--                    </div>-->
                <!--                </div>-->
                <!--                <div class="shop-element col-md">-->
                <!--                    <div class="card">-->
                <!--                        <img class="card-img-top"-->
                <!--                             src="https://pmg.ua/uploads/2020-09/18/5f64e204749f5-5eda1c0abb87c-a6195a569051705b8519184e356fccae-wide-bigjpgjpg.jpg"-->
                <!--                             alt="Card image cap">-->
                <!--                        <div class="card-body">-->
                <!--                            <h4 class="card-title">Ужгород</h4>-->
                <!--                            <p class="card-text">Закарпатьска область</p>-->
                <!--                            <router-link :to="`/view/element/${1}`" class="btn btn-primary">Детальніше</router-link>-->
                <!--                        </div>-->
                <!--                    </div>-->
                <!--                </div>-->
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src

    import {mapActions} from "vuex";
    import axios from "axios";
    import baseUrl from "../util/api";

    export default {
        name: 'AdminHome',
        data: () => ({
            settlements: []
        }),
        methods: {
            ...mapActions({
                signOut: 'user/logOut'
            }),
            logOut() {
                this.signOut()
            },
            getHumanSettlements() {
                axios.get(`${baseUrl}/human-settlement`)
                    .then(res => {
                        this.settlements = res.data
                    })
            }
        },
        components: {},
        mounted() {
            this.getHumanSettlements();
        }
    }
</script>

<style>

</style>
