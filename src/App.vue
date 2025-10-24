<template>
  <div id="app">
    <h1>My Cakes</h1>
    <div class="arrow bounce">
      <a
        href="#gallery"
        title="Jump to Gallery"
        aria-label="Jump to Cake Gallery"
        >⌄</a
      >
    </div>
    <div class="summary">
      <p>
        I've been baking and decorating my own cakes since my oldest son turned
        two years old. When I started, my skills were very mediocre with me
        baking the cake in a large casserole dish and only frosting the top.
        That kind of bare-minimum effort. 🤷🏻‍♂️
      </p>
      <p>
        Fortunately my confectionery skills have improved a bit over the years.
        I'm still an amateur - far from profesional grade - but cooking is one
        of my pleasures in life, especially when making cakes. I don't have to
        be perfect as long as the cake looks nice and people are happy with it.
        I have worked with store-bought frosting for most of my creations but
        have been learning how to handle fondant and making my own buttercream
        from scratch. 👨🏼‍🍳
      </p>
      <p>
        The gallery below is in reverse chronological order (newest to oldest).
        It's not a complete representation of what I've made - photos get
        misplaced, some deserve only
        <a
          href="https://www.cakewrecks.com/"
          target="_blank"
          aria-label="Go to Cake Wrecks .com"
          >Cake Wrecks</a
        >
        praise, and sometimes these kids only want plain looking cupcakes.
        <em>Sigh...</em> That's when I start putting gummy sharks and cocktail
        umbrellas on them. 🦈
      </p>
      <p>Enjoy!</p>
    </div>
    <div id="gallery" class="gallery">
      <div
        v-for="(image, imageIndex) in images"
        :key="imageIndex"
        @click="showImage(imageIndex)"
        class="gallery__image">
        <img
          :src="image.thumbUrl"
          :alt="image.caption"
          :title="image.caption"
          loading="lazy" />
      </div>
      <ImageBox
        :images="images"
        :index="imageIndex"
        @close="imageIndex = null"></ImageBox>
    </div>
    <footer>
      Built with
      <a href="https://vuejs.org" target="_blank">Vue.js</a> and
      <span style="color: red">❤</span>️
    </footer>
  </div>
</template>

<script>
import ImageBox from "vue-image-box";
import cakesJSON from "./cakes.json";

export default {
  name: "app",
  components: {
    ImageBox,
  },
  methods: {
    showImage: function (idx) {
      this.imageIndex = idx;
    },
  },
  data() {
    return {
      bgColor: "rgba(51, 51, 51, .9)",
      imageIndex: null,
      images: [...cakesJSON],
    };
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Rancho");

html {
  scroll-behavior: smooth;
}

body {
  background: #c5deea;
  background: linear-gradient(45deg, #c5deea 0%, #31a8f1 31%, #066dab 100%);
}

#app {
  font-family: Rancho, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 0 25px;
}

h1 {
  font-size: 3rem;
  color: #fff;
  text-shadow: #222 2px 2px;
}

.arrow {
  a {
    display: block;
    text-decoration: none;
    color: #fff;
    text-shadow: #222 1px 1px;
    font-size: xx-large;
    font-weight: bold;
  }
}

.bounce {
  animation: bounce 1.75s infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

.summary {
  max-width: 700px;
  margin: 0 auto;
  p {
    text-align: left;

    font-size: 1.75rem;
    color: #efefef;
    text-shadow: #222 1px 1px;
  }
  a {
    color: #fff;
    &:hover {
      color: #369;
    }
  }
}

.gallery {
  padding-top: 30px;
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
    &:nth-of-type(2n + 1) {
      grid-row: span 2;
    }
    &:nth-of-type(3n + 1) {
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

.imgBox figcaption {
  font-size: 1.5rem;
}

footer {
  margin: 2rem auto;

  font-size: 1.25rem;
  color: #222;
  a {
    color: #222;
    &:hover {
      color: #369;
    }
  }
}
</style>
