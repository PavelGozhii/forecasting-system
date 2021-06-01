<template>
  <div style="overflow-x: hidden">
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
          <router-link to="/profile" class="btn btn-primary">
            Профіль
          </router-link>
        </div>
      </nav>
    </header>
    <div class="row">
      <div class="col-4">
        <div class="btn-group m-1">
          <button style="width: 300px" type="button" class="btn btn-danger btn-lg dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            {{selectedTown}}
          </button>
          <ul class="dropdown-menu" style="width: 300px">
            <li v-for="(item, index) in settlements" :key="index" @click="selectTown(item)">{{item.name}}, {{item.regionName}}, {{item.countryName}}</li>
          </ul>
        </div>
      </div>
      <div class="col-4">
        <table class="table">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Назва</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(item, index) in indicators" :key="index" @click="selectIndicator(item)" :class="{selected: item.isSelected}">
            <th>{{item.id}}</th>
            <td>{{item.name}}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="col-4">
        <select class="form-select" aria-label="Default select example" @change="selectPeriod">
          <option v-for="(item, index) in periods" :key="index">{{item}}</option>
        </select>
      </div>
    </div>
    <div>
      <button class="btn btn-primary m-1 btn-lg" @click="getCalc">Отримати прогноз</button>
    </div>
    <div>
      <p>Коефіцієнт кореляції {{corellationKoef}}</p>
      <p>{{corellationMessage}}</p>
    </div>
    <div>
      <field-state id="1" v-if="regression.year.length" :x="regression.x" :y="regression.y" :dates="regression.year"></field-state>
    </div>
    <div>
      <field-state id="1" v-if="extrapolation.value.length" :x="extrapolation.value" :dates="extrapolation.year"></field-state>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import baseUrl from "../util/api";
  import Vue from 'vue'
  import FieldState from "../components/FieldChart";

  export default {
    name: 'GetPredict',
    components: {FieldState},
    data: () => ({
      settlements: [],
      indicators: [],
      selectedTown: 'Оберіть місто',
      selectedTownId: null,
      selectedIndicators: [],
      periods: [1, 5, 10],
      corellationKoef: null,
      corellationMessage: null,
      periodId: null,
      regression: {
        x: [],
        y: [],
        year: []
      },
      extrapolation: {
        year: [],
        value: []
      }
    }),
    methods: {
      selectPeriod(e) {
        this.periodId = e.target.value
      },
      getCalc() {
        this.getPearson();
        this.getExtrapolation();
        this.getRegression();
      },
      getPearson() {
        axios.post(`${baseUrl}/forecast/pearson?indicator1=${this.selectedIndicators[0]}&indicator2=${this.selectedIndicators[1]}&human_settlement=${this.selectedTownId}`)
        .then(res => {
          this.corellationKoef = res.data.value
          this.corellationMessage = res.data.message
        })
      },
      getExtrapolation() {
        axios.post(`${baseUrl}/forecast/extrapolation?indicator=${this.selectedIndicators[1]}&human_settlement=${this.selectedTownId}&period=${this.periodId}`)
          .then((res) => {
            for(let item of res.data.promise) {
              this.extrapolation.year.push(item.year)
              this.extrapolation.value.push(item.value)
            }
          })
      },
      getRegression() {
        axios.post(`${baseUrl}/forecast/regression?indicator1=${this.selectedIndicators[0]}&human_settlement=${this.selectedTownId}&period=${this.periodId}&indicator2=${this.selectedIndicators[1]}`)
            .then((res) => {
              let data = res.data.promise;
              for(let item of data) {
                this.regression.x.push(item.x);
                this.regression.y.push(item.y);
                this.regression.year.push(item.year);
              }
            })
      },
      selectTown(town) {
        this.selectedTown = town.name;
        this.selectedTownId = town.humanSettlementId;
        this.findIndicatorBySettlements();
      },
      selectIndicator(indicator) {
        const el = this.selectedIndicators.find(i => i === indicator.id);
        if(!el) {
          indicator.isSelected = true;
          this.selectedIndicators.push(indicator.id)
        }
      },
      findIndicatorBySettlements() {
        axios.get(`${baseUrl}/human-settlement-data/find-indicator-by-settlement/${this.selectedTownId}`,)
            .then(res => {
              this.indicators = res.data
              for(let item of this.indicators) {
                Vue.set(item, 'isSelected', false)
              }
            })
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

<style>
  .selected {
    background: greenyellow!important;
  }
</style>
