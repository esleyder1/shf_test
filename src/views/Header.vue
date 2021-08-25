<template>
  <header class="principalHeader">
    <div class="headerLogoContainer">
      <div v-if="isLogged" class="userInfoIsLogged">
       <i
          class="fas fa-bars headerQuestionImage"
          title="Ayuda"
          alt="Hacer una pregunta"
        ></i>
      </div>
      <img
        src="@/assets/images/logo.png"
        class="headerLogoImage"
        title="Inicio"
        alt="logo"
      />
    </div>
    <div v-if="isLogged" class="userInfo">
      <i
        class="far fa-shopping-cart headerQuestionImage OptionsIcon"

        alt="Carro de compras"
      ></i>
      <img class="photo" src="@/assets/images/foto.jpeg" width="20" />
      <p>{{ userName }}</p>

    </div>
    <div v-else class="questionSection">
      <div class="headerQuestionContainer">
        <i
          class="fas fa-question-circle headerQuestionImage"
          title="Ayuda"
          alt="Hacer una pregunta"
        ></i>
      </div>
    </div>
  </header>
</template>

<script>
import api from "@/logic/api";

export default {
  name: "Header",
  data: () => ({
    userName: "",
    isLogged: false,
  }),
  mounted() {
    this.getUserLogged();
  },
  methods: {
    //Obtiene el nombre de usuario guardado en Cookie
    getUserLogged() {
      let name = api.getUserLogged();
      console.log(name);
      if (name != null) {
        this.isLogged = true;
        this.userName = name;
      }
    },
  },
};
</script>
<style>
.userInfo p,
img {
  display: inline-block;
  margin: 4px;
}

.userInfo {
  float: right;
  width: 9.5em;
  margin-top: 14px;
}
.userInfo p {
    font-weight: bold;
    font-size: 13px;
}
.userInfo img {
  border-radius: 10em;
  width: 2em;
}
.OptionsIcon {
    padding-right: 14px;
}
.userInfoIsLogged {
    margin-right: 10px;
    margin-left: 1em;
}
header.principalHeader .headerLogoContainer img {
    width: 3.4em;
    position: relative;
    top: -4px;
}
</style>
