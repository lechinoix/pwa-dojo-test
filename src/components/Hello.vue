<template>
  <div>
    <md-card
      class="cat-card"
      v-for="(cat, index) in cats"
      v-bind:key="index"
    >
      <md-card-media>
        <img :src="cat.url" alt="People">
      </md-card-media>

      <md-card-content>
        {{ cat.title }}
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import { catsRef } from '../database';

export default {
  name: 'hello',
  firebase: {
    cats: catsRef,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.cat-card {
  margin: 20px;
}
</style>
