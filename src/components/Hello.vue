<template>
  <div>
    <md-card
      class="cat-card"
      v-for="picture in pictures"
      v-bind:key="picture.id"
    >
      <md-card-media>
        <img :src="picture.url" alt="People">
      </md-card-media>

      <md-card-content>
        {{ picture.title }}
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import data from '../data';
export default {
  name: 'hello',
  data () {
    return {
      pictures: data.pictures
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.cat-card {
  margin: 20px;
}
</style>
