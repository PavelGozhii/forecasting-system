<template>
  <div class="user-home">
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
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'UserHome',
  components: {
  }
}
</script>
