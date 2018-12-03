<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h1 class="h1">Genre Hunt</h1>
        <hr>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-5">
        <input class="genre--search-bar" type="text" placeholder="Search for a genre..." v-model="search">
      </div>
    </div>
    <div class="row search-btns">
      <div class="col-3 search-btns--btn"><h1>Random Genre</h1></div>
      <div class="col-3 search-btns--btn"><h1>Recently Updated</h1></div>
      <div class="col-3 search-btns--btn"><h1>Mix Challenge</h1></div>
    </div>
    <div class="genre--container row">
      <div v-randomColor class="genre--square col-2" v-for="genre in filteredGenres" v-bind:key="genre.name">
        <h1 class="h1">{{genre.name}}</h1>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      genres: [],
      search: ''
    }
  },
  created () {
    this.$http.get('http://localhost:3000/genres').then(function (data) {
      this.genres = data.body
      console.log(this.genres)
    })
  },
  computed: {
    filteredGenres () {
      return this.genres.filter(genre => {
        return this.genre.name.indexOf(this.search) > -1
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.row {
  align-content: center;
  align-items: center;
}
.genre--container {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}
.genre--search-bar {
  display: flex;
  width: 100%;
  align-self: center;
  padding: 10px 15px;
  margin-bottom: 20px;
  font-size: 1.5rem;
  border: 2px solid slategrey;
  border-radius: 5px;
}
.search-btns{
  justify-content: space-evenly;
  margin:30px 0;
}
.genre--square {
  background: lightblue;
  height: calc(100vw / 6);
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  color: #fff;
  margin: 0;
  padding: 0;

  .h1 {
    width: 100%;
    padding: 20px 0;
  }
}
</style>
