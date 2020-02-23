<template>
  	<div id="app">
		<h1>Charts App</h1>
		<hr>
		<div v-for="film in films" :key="film.id">
			<h2>{{ film.title }}</h2>
			<p>{{ film.director }}</p>
		</div>
  	</div>
</template>

<script>

export default {
	name: 'App',
	data() {
		return {
			films: []
		}
	},
	async mounted() {
		const films = [];
		for (let i = 1; i < 8; i++) {
			const film = fetch(`https://swapi.co/api/films/${i}`)
				.then(resp => resp.json());
			films.push(film);
		}

		this.films = await Promise.all(films);
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
