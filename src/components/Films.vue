<template>
    <div>
        <div class="films" v-if="isLoaded">
            <div class="film" v-for="film in this.films" :key="film.id">
                <h2>{{film.title}}</h2>
                <p>{{film.director}} | {{film.release_date.split('-')[0]}}</p>
            </div>
        </div>
        <Preloader v-else />    
    </div>
</template>

<script>
import Preloader from './Preloader';

export default {
    name: 'Films',
    data: () => ({
        films: [],
        isLoaded: false
    }),
    async mounted() {
        const films = [];
        for (let i = 1; i < 8; i++) {
            const film = fetch(`https://swapi.co/api/films/${i}`)
                .then(resp => resp.json());
            films.push(film);
        }

        this.films = await Promise.all(films);
        this.isLoaded = true;
        console.log(this.films);
    },
    components: {
        Preloader
    }
}
</script>

<style lang="sass" scoped>
h2
    cursor: pointer;
    margin-bottom: 0px;

p
    margin: 0px;
</style>

