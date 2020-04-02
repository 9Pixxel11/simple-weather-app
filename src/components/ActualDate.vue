<template>
    <div class="date">{{ dateBuilder() }}</div>
</template>

<script>
    export default {
        data() {
            return  {
               date: new Date()
            }
        },
        methods: {
            dateBuilder () {
                let months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
                let days = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];

                let day = days[this.date.getDay()];
                let date = this.date.getDate();
                let month = months[this.date.getMonth()];
                let year = this.date.getFullYear();

                return `${day}, der ${date}. ${month} ${year}`;
            }
        }
    }
</script>