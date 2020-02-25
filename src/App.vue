<template>
      <div id="app">
        <h1>Vue SW wiki</h1>
        <ul>
            <li><router-link to="/films">Films</router-link></li>
            <li><router-link to="/films">Characters</router-link></li>
            <li><router-link to="/">Home</router-link></li>
        </ul>
        <hr>

        <router-view />
      </div>
</template>

<style lang="sass" scoped>
#app
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;

    ul
        list-style: none
        display: flex
        justify-content: center
        width: 300px
        margin: auto
        padding: 0

        li
            margin: 0 10px
            cursor: pointer

            a
                color: #000
</style>
