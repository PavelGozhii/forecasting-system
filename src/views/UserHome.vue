<template>
    <div class="user-home">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src

    import axios from "axios";
    import baseUrl from "../util/api";
    import {mapActions} from "vuex";

    export default {
        name: 'UserHome',
        data: () => ({
            settlements: []
        }),
        components: {},
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
        mounted() {
            this.getHumanSettlements();
        }
    }
</script>
