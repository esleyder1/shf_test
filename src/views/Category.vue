<template>
  <div class="categories group">

    <div class="categoryCard">
      <div class="content">
       <a> 
      <div class="content-overlay"></div>
      <img
          :src="category.picture"
          class="categoryImage content-image"
          :alt="`imagen-${category.name}`"
        />
      
      <div class="content-details fadeIn-top">
         <i
            class="fas fa-check iconCheck"
            alt="Hacer una busqueda"
          ></i>
      </div>
    </a>
          <p class="categoryName">{{category.name}}</p>
  </div>
      

    </div>
    </div>
</template>
<script>
import api from "@/logic/api";
import Header from '@/views/Header.vue'
export default {
  name: "Login",
  props: ['category'],
  components: {
    Header
  },
  data: () => ({

  }),
  mounted(){

  },
  methods: {
    
  },
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
    text-align: center;
    font-weight: bold;
    margin: 6px;
    font-size: 14px;
    color: #9db5ce;
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
  background: rgba(0,0,0,0.7);
  position: absolute;
  height: 80%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  border-radius: 4px;
}

.content:hover .content-overlay{
  opacity: 1;
}

.content:hover p{
  color:black;
}

.content-image{
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

.content:hover .content-details{
  top: 42%;
  left: 50%;
  opacity: 1;
}

.content-details h3{
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.15em;
  margin-bottom: 0.5em;
  text-transform: uppercase;
}

.content-details p{
  color: #fff;
  font-size: 0.8em;
}

.fadeIn-bottom{
  top: 80%;
}

.fadeIn-top{
  top: 20%;
}

.fadeIn-left{
  left: 20%;
}

.fadeIn-right{
  left: 80%;
}
i.fas.fa-check.iconCheck {
    color: white;
    font-size: 2em;
}

  @media (max-width: 800px) {
    .categories.group {
      width: 50%;
    }
    
  }
</style>

