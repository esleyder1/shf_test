<template>
  <div class="store group">
    <div class="categoryCard">
      <div class="content" @click="showModal = true">
        <div class="cont">
          <img
            :src="store.picture"
            class="storeImage content-image"
            :alt="`imagen-${store.name}`"
          />
        </div>
        <div class="storeInfo">
          <p class="storeName">{{ store.name }}</p>
          <div class="LocationAndRanting">
            <p class="storeLocation">
              <i
                class="far fa-map-marker-alt iconCheck"
                alt="Hacer una busqueda"
              ></i>
              <span>{{ store.location }}</span>
            </p>
            <p class="storeRating">
              <i class="far fa-star iconCheck" alt="Hacer una busqueda"></i>
              {{ store.rating }}
            </p>
          </div>
          <div class="AgrupedLabels">
            <p
              class="storeLabels"
              v-for="(label, index) in store.labels"
              :key="store.label"
            >
              <span>{{ label }}</span>
              <span v-if="index < store.labels.length - 1">,</span>
              <span v-else>...</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="showModal">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper" role="dialog">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">
                  {{ store.name }}
                </h5>

                <!--Close Icon-->
                <button
                  type="button"
                  class="btn close"
                  @click="showModal = false"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="cont">
                  <img
                    :src="store.picture"
                    class="storeImage content-image modalImage"
                    :alt="`imagen-${store.name}`"
                  />
                  <div class="LocationAndRanting">
                    <p class="storeLocation">
                      <i
                        class="far fa-map-marker-alt iconCheck"
                        alt="Hacer una busqueda"
                      ></i>
                      <span>{{ store.location }}</span>
                    </p>
                    <p class="storeRating">
                      <i
                        class="far fa-star iconCheck"
                        alt="Hacer una busqueda"
                      ></i>
                      {{ store.rating }}
                    </p>
                  </div>
                </div>

                <div class="productsContainer">
                  <div v-for="prod of store.products" :key="store.products">
                    <div class="categoryCard">
                      <div class="content" @click="showModal = true">
                        <div class="cont imageModalProduct">
                          <img
                            :src="prod.picture"
                            class="storeImage content-image modalImage"
                            :alt="`imagen-${prod.name}`"
                          />
                        </div>
                        <div class="storeInfo modalInfo">
                          <p class="storeName">{{ prod.name }}</p>
                          <div class="LocationAndRanting">
                            <p class="storeLocation">
                              <i
                                class="far fa-map-marker-alt iconCheck"
                                alt="Hacer una busqueda"
                              ></i>
                              <span>{{ prod.location }}</span>
                            </p>
                            <p class="storeRating">
                              <i
                                class="far fa-star iconCheck"
                                alt="Hacer una busqueda"
                              ></i>
                              {{ prod.rating }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import api from "@/logic/api";
import Header from "@/views/Header.vue";
export default {
  name: "Login",
  props: ["store"],
  components: {
    Header,
  },
  data: () => ({
    showModal: false,
  }),
  mounted() {},
  methods: {},
};
</script>
<style scoped>
.content {
  background: white;
  border-radius: 6px;
}
.content .cont,
.content .storeInfo {
  display: inline-block;
  vertical-align: top;
  width: 21%;
  height: 17%;
  margin: 10px;
}
.store.group {
  vertical-align: top;
  width: 48%;

  display: inline-flex;
  margin: 1%;
  border-radius: 6px;
}
.categoryCard {
  width: 100%;
}
.content .cont,
.content .storeInfo {
  display: inline-block;
  vertical-align: top;
}
.cont img {
  width: 99%;
}
.content .storeInfo {
  width: 66% !important;
}
.cont.storePicturePostre {
  width: 27% !important;
}
.storeInfo.storeInfoPostre {
  width: 63% !important;
}
.store.group {
  vertical-align: top;
  width: 49%;
  display: inline-flex;
  border-radius: 6px;
  margin: 0.5%;
}
p.storeLabels {
  display: inline-block;
  padding-right: 2px;
}
.AgrupedLabels .storeLabels {
  font-size: 14px;
}
.AgrupedLabels p {
  margin: 0;
}
p.storeName {
  font-weight: bold;
  font-size: 18px;
}

.LocationAndRanting {
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
p.storeName {
  font-weight: bold;
  margin-bottom: 8px;
}
.content:hover {
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 0%), 0 4px 5px 0 rgb(0 0 0 / 0%),
    0 1px 10px 0 rgb(0 0 0 / 11%);
  transition: 0.5s;
  cursor: pointer;
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
img.storeImage.content-image.modalImage {
  width: 40%;
}
.modal-body .cont > img {
  width: 3em !important;
}

.cont .LocationAndRanting {
  margin-left: 1em;
}
.storeInfo.modalInfo p {
  font-size: 14px;
  padding: 0 !important;
  margin: 0 !important;
}
.content .storeInfo.modalInfo {
  width: auto !important;
}
@media (max-width: 1200px) {
  .content .cont,
  .content .storeInfo {
    display: inline-block;
    vertical-align: top;
    width: 16%;
    height: 12%;
    margin: 10px;
  }

  p.storeName {
    font-size: 15px;
    margin-bottom: 6px;
  }
  .LocationAndRanting p {
    font-size: 13px;
  }
  .AgrupedLabels .storeLabels {
    font-size: 13px;
  }
}
@media (max-width: 900px) {
  .content .cont,
  .content .storeInfo {
    display: inline-block;
    vertical-align: top;
    width: 21%;
    height: 12%;
    margin: 10px;
  }

  p.storeName {
    font-size: 15px;
    margin-bottom: 6px;
  }
  .LocationAndRanting p {
    font-size: 13px;
  }
  .AgrupedLabels .storeLabels {
    font-size: 13px;
  }
}
@media (max-width: 800px) {
  * {
    transition: 0.2s;
  }
  .store.group {
    vertical-align: top;
    width: 100%;

    display: inline-flex;
    margin: 0%;
    border-radius: 6px;
  }
  .content .cont,
  .content .storeInfo {
    display: inline-block;
    vertical-align: top;
    width: 21%;
    height: 12%;
    margin: 10px;
  }

  p.storeName {
    font-size: 18px;
    margin-bottom: 6px;
  }
  .LocationAndRanting p {
    font-size: 15px;
  }
  .AgrupedLabels .storeLabels {
    font-size: 14px;
  }
}
</style>

