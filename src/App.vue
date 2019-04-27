<template>
  <div id="app">
    <h1>My Cakes</h1>
    <div class="summary">
      <p></p>
    </div>
    <div class="gallery">
      <div
        v-for="(image, imageIndex) in images"
        :key="imageIndex"
        @click="showImage(imageIndex)"
        class="gallery__image"
      >
        <img :src="image" />
      </div>
      <ImageBox
        :images="images"
        :index="imageIndex"
        @close="index = null"
      ></ImageBox>
    </div>
  </div>
</template>

<script>
import ImageBox from "vue-image-box";

export default {
  name: "app",
  components: {
    ImageBox
  },
  methods: {
    showImage: function(idx) {
      this.imageIndex = idx;
    },
    importAll(file) {
      file
        .keys()
        .reverse()
        .forEach(file => this.images.push(this.imageDir + file.slice(2)));
    }
  },
  data() {
    return {
      imageIndex: null,
      imageDir: "/images/cakes/",
      images: []
    };
  },
  mounted() {
    this.importAll(require.context("../public/images/cakes/", true, /\.jpg$/));
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Rancho");

body {
  background: #c5deea;
  background: linear-gradient(45deg, #c5deea 0%, #8abbd7 31%, #066dab 100%);
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 0 25px;
}

h1 {
  font-family: Rancho;
  font-size: 3rem;
  color: #fff;
  text-shadow: #222 2px 2px;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 200px;
  grid-gap: 15px;
  grid-auto-flow: dense;
  &__image {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    box-shadow: -2px 2px 10px 0px rgba(#222, 0.8);
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
      transform: scale(1.02);
    }
    &:nth-of-type(1),
    &:nth-of-type(3n + 1) {
      grid-row: span 2;
      grid-column: span 2;
    }
    & img {
      border-radius: 10px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

// @media (max-width: 500px) {
//   .gallery {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     &__image {
//       width: 90%;
//       height: 90%;
//       margin: 5px 0;
//     }
//   }
// }
</style>
