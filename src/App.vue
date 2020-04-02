<template>
  <!-- condition: check if the temperatur is higher than 16° and set class to warm for alternate background -->
  <div id="app" :class="typeof weather.main != 'undefined' && weather.main.temp > 16 ? 'warm' : ''">
    <main>
      
      <SearchBox @weather-result="getWeatherResult"/>

      <!-- condition: if weather response is undefined don't show any result -->
      <div class="weather-wrap" v-if="typeof weather.main != 'undefined'">
        <div class="location-box">
          <div class="location">{{ weather.name }}, {{ weather.sys.country }}</div>
          <ActualDate/>
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
import ActualDate from './components/ActualDate';

export default {
  components: { SearchBox, ActualDate },
  name: 'App',
  data() {
    return  { weather: {} }
  },
  methods: {
    getWeatherResult: function(result) {
      this.weather = result;
    }
  }
}
</script>