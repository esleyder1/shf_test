<template>
  <transition
    enter-active-class="animate__animated animate__fadeInDown"
    leave-active-class="animate__animated animate__fadeOutUp"
  >
    <div class="home">
      <Header />
      <div class="welcome">
        <h5>Hola {{ userName }}, ¿Qué te entregamos hoy?</h5>
        <div class="searchear">
          <div class="cSearch">
            <i
              class="fas fa-search headerQuestionImage iconSearch"
              alt="Hacer una busqueda"
            ></i>
            <input
              v-model="query"
              @keyup="getStores()"
              placeholder="Busca productos y tiendas"
            />
          </div>
        </div>
      </div>
      <div class="principalContainer container">
        <!--Categories-->
        <div class="wrapper">
          <div class="headerP">
            <div class="title">
              <h2>Categorías</h2>
            </div>
            <div class="buttonsP">
              <div class="wrapButtons">
                <i
                  class="fas fa-arrow-left headerQuestionImage iconRow left"
                  alt="Anterior"
                ></i>
                <i
                  class="fas fa-arrow-right headerQuestionImage iconRow"
                  alt="Siguiente"
                ></i>
              </div>
            </div>
          </div>
          <!--Todas las categorias-->
          <Category
            v-for="category of categories"
            :key="category.id"
            :category="category"
          />
        </div>
        <!--Tiendas-->
        <div class="wrapper">
          <div class="headerP">
            <div class="title">
              <h2>
                <i
                  class="far fa-shopping-cart headerQuestionImage OptionsIcon"
                  alt="Carro de compras"
                ></i
                >Tiendas
              </h2>
            </div>
          </div>
          <h3 v-if="typing" class="searching">{{ searchingMsg }}</h3>
          <Store v-for="store of stores" :key="store.id" :store="store" />
        </div>
        <!--Promos-->
        <div class="wrapper">
          <div class="headerP">
            <div class="title">
              <h2>
                <i
                  class="far fa-percentage headerQuestionImage OptionsIcon"
                  alt="Carro de compras"
                ></i
                >Promos
              </h2>
            </div>
            <div class="buttonsP">
              <div class="wrapButtons">
                <i
                  class="fas fa-arrow-left headerQuestionImage iconRow left"
                  alt="Anterior"
                ></i>
                <i
                  class="fas fa-arrow-right headerQuestionImage iconRow"
                  alt="Siguiente"
                ></i>
              </div>
            </div>
          </div>
          <!--Todas las promociones-->
          <Promo v-for="promo of promos" :key="promo.id" :promo="promo" />
        </div>
      </div>
    </div>
  </transition>

</template>

<script>
// @ is an alias to /src

import api from "@/logic/api";
import Header from "@/views/Header.vue";
import Category from "@/views/Category.vue";
import Store from "@/views/Store.vue";
import Promo from "@/views/Promo.vue";
import Product from "@/views/Product.vue";

export default {
  name: "Home",
  components: {
    Header,
    Category,
    Store,
    Promo,
    Product
  },
  data: () => ({
    categories: [],
    stores: [],
    promos: [],
    userName: "Usuario",
    isLogged: false,
    query: "",
    searchingMsg: "Buscando...",
    typing: false
  }),
  mounted() {
    this.getUserLogged();
    this.getCategories();
    this.getStores();
    this.getPromos();
  },
  methods: {
    //obtiene usuario guardado en Cookie
    getUserLogged() {
      let name = api.getUserLogged();
      console.log(name);
      if (name != null) {
        this.isLogged = true;
        this.userName = name;
      } else {
        this.userName = "Usuario";
      }
    },
    //Usa la API para obtener categorias
    async getCategories() {
      try {
        let data = await api.getCategories();
        let categories = data.data;
        if (categories != null) {
          this.categories = categories;
        }
      } catch (error) {
        console.log(error);
        this.error = true;
      }
    },
    async getProducts() {
      try {
        let data = await api.getProducts();
        let products = data.data;
        if (products != null) {
          this.products = produccts;
        }
      } catch (error) {
        console.log(error);
        this.error = true;
      }
    },
    async getStores() {
      try {
        if (this.query != "") {
          this.typing = true;
          this.searchingMsg = "Buscando...";
        }

        this.stores = [];
        let data = await api.getStores(this.query);

        //desordenar la lista
        let stores = data.data.sort(function () {
          return Math.random() - 0.5;
        });
        console.log("sores", stores);
        if (stores.length != 0) {
          this.stores = stores;
          this.typing = false;
        } else {
          this.searchingMsg = "No se encontraron coincidencias";
        }
      } catch (error) {
        console.log(error);
        this.error = true;
      }
    },
    async getPromos() {
      try {
        let data = await api.getPromos();
        let promos = data.data;
        if (promos != null) {
          this.promos = promos;
        }
      } catch (error) {
        console.log(error);
        this.error = true;
      }
    },
  },
};
</script>
<style scoped>
.welcome {
  text-align: center;
  margin: 2em;
}
.welcome h5 {
  font-size: 1.1em;
  font-weight: bolder;
}
.searchear {
  margin-top: 1em;
  margin-bottom: 1em;
}
.cSearch {
  background: white;
  border-radius: 4px;
  width: 25em;
  margin: auto;
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 0%), 0 4px 5px 0 rgb(0 0 0 / 0%),
    0 1px 10px 0 rgb(0 0 0 / 11%);
  padding: 8px;
}
.cSearch input {
  border: none;
  font-size: 0.9em;
  width: 77%;
}
i.fas.fa-search.headerQuestionImage.iconSearch {
  padding-right: 1em;
  font-size: 12px;
}
.headerP .title h2 {
  font-size: 1.3em;
  font-weight: bold;
}
.headerP .title,
.headerP .buttonsP {
  width: 50%;
  display: inline-flex;
  vertical-align: top;
}
.headerP .buttonsP {
  width: 50%;
  text-align: right;
}
.headerP .buttonsP i {
  width: 5%;
  text-align: right;
  color: black;
  cursor: pointer;
}
.wrapButtons {
  width: 100%;
}
i.fas.fa-arrow-left.headerQuestionImage.iconRow.left {
  color: #d0cfcf;
}
h3.searching {
  text-align: center;
  font-weight: bold;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
@media (max-width: 800px) {
  .headerP .buttonsP i {
    width: 10%;
  }
}
@media (max-width: 600px) {
  .cSearch {
    width: 20em;
  }
}
</style>