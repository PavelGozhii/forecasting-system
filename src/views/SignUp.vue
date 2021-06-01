<template>
    <div>
        <div class="sidenav">
            <div class="login-main-text">
                <h2>Сторінка реєстрації</h2>
                <p>Система економічного прогнозування</p>
            </div>
        </div>
        <div class="main">
            <div class="col-md-6 col-sm-12">
                <div class="login-form">
                    <form>
                        <div class="form-group">
                          <label>Ім'я</label>
                          <input type="text" class="form-control" placeholder="Ім'я">
                        </div>
                        <div class="form-group">
                          <label>Прізвище</label>
                          <input type="text" class="form-control" placeholder="Прізвище">
                        </div>
                        <div class="form-group">
                          <label>По батькові</label>
                          <input type="text" class="form-control" placeholder="По батькові">
                        </div>
                        <div class="form-group">
                          <label>Дата народження</label>
                          <input type="text" class="form-control" placeholder="Дата народження">
                        </div>
                        <div class="form-group">
                            <label>Пошта</label>
                            <input type="email" class="form-control" placeholder="Почта">
                        </div>
                        <div class="form-group">
                            <label>Пароль</label>
                            <input type="password" class="form-control" placeholder="Пароль">
                        </div>
                        <div class="form-group">
                          <label>Повторіть пароль</label>
                          <input type="password" class="form-control" placeholder="Повторіть пароль">
                        </div>
                        <button type="submit" @click="signUp" class="btn btn-black">Зареєструватися</button>
                        <router-link to="/sign-in" type="submit" class="btn btn-secondary m-3">Увійти
                        </router-link>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data: () => ({
      name: null,
      secondName: null,
      thirdName: null,
      birthDate: null,
      email: null,
      password: null,
      repeatPassword: null
    })
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
