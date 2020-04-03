<template>
    <div class="search-box">
        <input type="text" class="search-bar" placeholder="Suche..." v-model="query" @keypress="fetchWeather"/>
    </div>
</template>:

<script>
    export default {
        data() {
            return  {
                api_key: '36cf36c5cb03aac232269fda01ee4db2',
                url_base: 'https://api.openweathermap.org/data/2.5/',
                query: ''
            }
        },
        methods: {
            fetchWeather (e) {
                if(e.key == "Enter") {
                    fetch(`${this.url_base}weather?q=${this.query}&units=metric&lang=de&appid=${this.api_key}`)
                    .then(res => {
                        return res.json();
                    }).then(this.emitResultToApp);
                }
            },
            // emits the result to the @weather-result of the parent
            emitResultToApp (result) {
                this.$emit('weather-result', result)
            }
        }
    }
</script>