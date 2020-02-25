<template>
    <div>
        <div class="film" v-if="isLoaded">
            <h2>{{film.title}}</h2>
            <p>{{film.opening_crawl}}</p>
            <hr>
            <h3>Characters</h3>
            <div class="characters">
                <div class="character" v-for="char in this.characters" :key="char.id">
                    <h4>{{char.name}}</h4>
                    <p>Homeworld: <b>{{char.homeworld.name}}</b></p>
                </div>
            </div>
        </div>
        <Preloader v-else />
    </div>
</template>

<script>
import Preloader from './Preloader';

export default {
    name: 'Film',
    data: () => ({
        film: {},
        characters: [],
        isLoaded: false
    }),
    async mounted() {
        this.film = await fetch(`https://swapi.co/api/films/${this.$route.params.id}`).then(film => film.json());
        this.characters = await Promise.all(
            this.film.characters.map(url => fetch(url)
                .then(char => char.json())
                .then(async char => {
                    const homeworld = await fetch(char.homeworld).then(hw => hw.json())
                    return {
                        name: char.name,
                        birth_year: char.birth_year,
                        homeworld
                    }
                })
            )
        );
        this.isLoaded = true;  
    },
    components: {
        Preloader
    }
}
</script>

<style lang="sass" scoped>
    .film
        width: 70%
        margin: auto

    .characters
        display: grid
        grid-template-columns: repeat(4, 1fr)
        grid-gap: 10px
        margin-bottom: 30px

        .character
            border: 1px dashed #ccc

</style>