<template>
  <div class="categories group">
    <div class="categoryCard">
      <div class="content" >
        <a>
          <div class="content-overlay">
            <span>$ {{ promo.price }}</span>
          </div>
          <img
            :src="promo.picture"
            class="categoryImage content-image"
            :alt="`imagen-${promo.name}`"
          />
        </a>
        <p class="promoName">{{ promo.name }}</p>
        <div class="LocationAndRanting">
          <p class="storeLocation">
            <i
              class="far fa-map-marker-alt iconCheck"
              alt="Hacer una busqueda"
            ></i>
            <span>{{ promo.store }}</span>
          </p>
          <p class="storeRating">
            <i class="far fa-star iconCheck" alt="Hacer una busqueda"></i>
            {{ promo.rating }}
          </p>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import api from "@/logic/api";
import Header from "@/views/Header.vue";
export default {
  name: "Login",
  props: ["promo"],
  components: {
    Header,
  },
  data: () => ({}),
  mounted() {},
  methods: {},
};
</script>
<style scoped>
.categories.group {
  background: white;
  padding-top: 7px;
  border-radius: 6px;
}
.categories.group {
  width: 25%;
  display: inline-block;
  align-content: center;
  overflow: hidden;
}
.categoryCard p {
  text-align: left;
  font-weight: bold;
  margin-top: 6px;
  font-size: 16px;
  color: #353638;
  margin-bottom: 0;
}
.categoryCard img {
  width: 100%;
}
/* Blur-zoom Container */
.img-hover-zoom--blur img {
  transition: transform 1s, filter 2s ease-in-out;
  filter: blur(2px);
  transform: scale(1.2);
}

/* The Transformation */
.img-hover-zoom--blur:hover img {
  filter: blur(0);
  transform: scale(1);
}

.content {
  position: relative;
  width: 90%;
  max-width: 400px;
  margin: auto;
  overflow: hidden;
}

.content .content-overlay {
  background: #fc757c;
  position: absolute;
  height: 2em;
  width: 6em;
  left: 56%;
  top: 19px;
  bottom: 0;
  right: 100%;
  opacity: 1;
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  border-radius: 4px;
  text-align: center;
}
.content .content-overlay span {
  color: white;
  font-weight: bold;
  position: relative;
  top: 3px;
}
.content-image[data-v-23c46fc5] {
  width: 100%;
  border-radius: 12px;
}

.content-image {
  width: 100%;
}

.content-details {
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 40%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.content:hover .content-details {
  top: 42%;
  left: 50%;
  opacity: 1;
}

.content-details h3 {
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.15em;
  margin-bottom: 0.5em;
  text-transform: uppercase;
}

.content-details p {
  color: #fff;
  font-size: 0.8em;
}

.fadeIn-bottom {
  top: 80%;
}

.fadeIn-top {
  top: 20%;
}

.fadeIn-left {
  left: 20%;
}

.fadeIn-right {
  left: 80%;
}
i.fas.fa-check.iconCheck {
  color: white;
  font-size: 2em;
}

.LocationAndRanting{
  margin-bottom: 10px;
}
.LocationAndRanting p {
  font-size: 14px;
  color: #a0b5c2;
  font-weight: bold;
  display: inline;
}
p.storeLocation span {
  margin: 10px;
}

@media (max-width: 1200px) {
.content .content-overlay[data-v-23c46fc5] {
    height: 2em;
    left: 50% ;
    top: 14px;
}
}
@media (max-width: 1000px) {
.content .content-overlay[data-v-23c46fc5] {
    height: 2em;
    left: 32%;
    top: 14px;
}

}
@media (max-width: 800px) {
  .categories.group {
    width: 50%;
}
.content .content-overlay {
    height: 2em !important;
    left: 53% !IMPORTANT;
    top: 14px !IMPORTANT;
}
}
</style>

