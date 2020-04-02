import

<template>
  <div id="app" :class="typeof weather.main != 'undefined' && weather.main.temp > 16 ? 'warm' : ''">
    <main>
      
      <SearchBox @weather-result="getWeatherResult"/>

      <!-- conditional: if weather response is undefined don't show any result -->
      <div class="weather-wrap" v-if="typeof weather.main != 'undefined'">
        <div class="location-box">
          <div class="location">{{ weather.name }}, {{ weather.sys.country }}</div>
          <div class="date">{{ dateBuilder() }}</div>
        </div>

        <div class="weather-box">
          <div class="temperature">{{ Math.round(weather.main.temp) }}°</div>
          <div class="weather">{{ weather.weather[0].description }}</div>
        </div>

      </div>
    </main>
  </div>
</template>

<script>

import SearchBox from './components/SearchBox';

export default {
  components: { SearchBox },
  name: 'App',
  data() {
    return  { weather: {} }
  },
  methods: {
    getWeatherResult: function(result) {
      this.weather = result;
    },
    dateBuilder () {
      let d = new Date();
      let months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
      let days = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];

      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();

      return `${day}, der ${date}. ${month} ${year}`;
    }
  }
}

</script>