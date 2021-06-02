<template>
    <div>
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <router-link to="/user" class="navbar-brand">Система прогнозування</router-link>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav mr-auto mt-2 mt-md-0">
                        <li class="nav-item">
                            <router-link to="/contacts" type="submit" class="navbar-brand">Контакти
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div>
                    <router-link to="/predict" class="btn btn-primary mx-5">
                        Отримати прогноз
                    </router-link>
                </div>
                <div>
                    <router-link to="/profile" class="btn btn-primary">
                        Профіль
                    </router-link>
                </div>
            </nav>
        </header>
        <div class="container">
            <div class="main-body">
                <div class="row gutters-sm">
                    <div class="col-md-4 mb-3">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex flex-column align-items-center text-center">
                                    <img src="https://cdn4.iconfinder.com/data/icons/e-commerce-181/512/477_profile__avatar__man_-512.png"
                                         alt="Admin"
                                         class="rounded-circle" width="150">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="card mb-3">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Name</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        Володька
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Surname</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        Саєнко
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Email</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        volodka@gmail.com
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Birth date</h6>
                                    </div>
                                    <div class="col-sm-9 text-secondary">
                                        09/06/2000
                                    </div>
                                </div>
                                <hr>
                                <hr>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content container">
                <div class="card" v-for="(item, index) in forecasting" :key="index">
                    <div class="card-body">
                        <h4 class="card-title">{{item.methodName}}</h4>
                        <p class="card-text">{{item.name}}</p>
                        <p class="card-text">{{item.description}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import baseUrl from "../util/api";

    export default {
        name: 'Profile',
        data: () => ({
            forecasting: []
        }),
        methods: {
            getForecasting() {
                axios.get(`${baseUrl}/forecast/user/2`)
                    .then(res => {
                        this.forecasting = res.data
                    })
            }
        },
        components: {},
        mounted() {
            this.getForecasting();
        }
    }
</script>

<style>

</style>