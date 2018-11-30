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
        <input class="genre--search-bar" type="text" placeholder="Search for a genre..." v-model="searchEntry" @change="searchGenres">
      </div>
    </div>
    <div class="row search-btns">
      <div class="col-3 search-btns--btn"><h1>Random Genre</h1></div>
      <div class="col-3 search-btns--btn"><h1>Recently Updated</h1></div>
      <div class="col-3 search-btns--btn"><h1>Mix Challenge</h1></div>
    </div>
    <div class="genre--container row">
      <div v-for="data in genreJson" class="genre--square col-2">
        <h1 class="h1">{{data.name}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
// random color picker
import json from '../lib/genres.json'

window.onload = function (e) {
  const genreSquares = document.getElementsByClassName('genre--square')
  let usedColors = []
  let genreNameArray = []
  Array.from(genreSquares).forEach(function (genreSquare, index) {
    genreNameArray.push(genreSquare.h1.textContent)
    console.log(genreNameArray)
    let randomColor = randomColorGen()
    if (!usedColors.includes(randomColor)) {
      genreSquare.style.backgroundColor = randomColor
    }
    usedColors.push(randomColor)
  })
}

function searchGenres(searchString){
}

function randomColorGen () {
  var letters = '0123456789ABCD'
  var color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 14)]
  }
  // console.log(color)
  return color
}

export default {
  name: 'HelloWorld',
  data () {
    return {
      searchEntry: '',
      genreJson: json
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
