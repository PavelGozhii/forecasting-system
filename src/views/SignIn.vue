<template>
    <div>
        <div class="sidenav">
            <div class="login-main-text">
                <h2>Сторінка авторизації</h2>
                <p>Система економічного прогнозування</p>
            </div>
        </div>
        <div class="main">
            <div class="col-md-6 col-sm-12">
                <div class="login-form">
                    <form @submit.prevent="signIn">
                        <div class="form-group">
                            <label>Почта</label>
                            <input v-model="email" type="email" class="form-control" placeholder="Почта">
                        </div>
                        <div class="form-group">
                            <label>Пароль</label>
                            <input v-model="password" type="password" class="form-control" placeholder="Пароль">
                        </div>
                        <button type="submit" class="btn btn-black">Увійти</button>
                        <router-link to="/sign-up" type="submit" class="btn btn-secondary m-3">Зареєструватися
                        </router-link>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        data: () => ({
            email: null,
            password: null
        }),
        methods: {
            ...mapActions({
                login: "user/login"
            }),
            showAlert(message) {
              this.$swal(message);
            },
            signIn() {
                this.login({
                    email: this.email,
                    password: this.password
                }).then((response) => {
                    console.log(response);
                    if (response.role === 1) {
                        this.$router.push("/admin")
                    } else {
                        this.$router.push("/user")
                    }
                })
                  .catch((message) => {
                    this.showAlert(message)
                  })
            }
        }
    }
</script>

<style scoped>
    body {
        font-family: "Lato", sans-serif;
    }


    .main-head {
        height: 150px;
        background: #FFF;

    }

    .sidenav {
        height: 100%;
        background-color: #000;
        overflow-x: hidden;
        padding-top: 20px;
    }


    .main {
        padding: 0px 10px;
    }

    @media screen and (max-height: 450px) {
        .sidenav {
            padding-top: 15px;
        }
    }

    @media screen and (max-width: 450px) {
        .login-form {
            margin-top: 10%;
        }

        .register-form {
            margin-top: 10%;
        }
    }

    @media screen and (min-width: 768px) {
        .main {
            margin-left: 40%;
        }

        .sidenav {
            width: 40%;
            position: fixed;
            z-index: 1;
            top: 0;
            left: 0;
        }

        .login-form {
            margin-top: 100px;
        }

        .register-form {
            margin-top: 20%;
        }
    }


    .login-main-text {
        margin-top: 20%;
        padding: 60px;
        color: #fff;
    }

    .login-main-text h2 {
        font-weight: 300;
    }

    .btn-black {
        background-color: #000 !important;
        color: #fff;
    }
</style>
