<template>
  <Header />
  <div class="container">
    <transition appear>
      <div
        class="row justify-content-center align-items-center minh-100 Loginform"
      >
        <div class="loginWrapper">
          <div id="loginContainer">
            <div class="imageContainer">
              <img src="@/assets/images/logo-x.png" class="companyLogo" />
            </div>
            <div class="titleContainer">
              <h4>Ingresa a tu tienda</h4>
            </div>
            <div class="datesContainer">
              <form
                action
                class="form"
                @submit.prevent="login"
                autocomplete="off"
              >
                <div class="inputContainer">
                  <div class="inputField">
                    <input
                      v-model="email"
                      class="form-input"
                      type="email"
                      id="email"
                      required
                      placeholder="Correo electrónico"
                    />
                  </div>

                  <div class="imgHelperIcon">
                    <i class="far fa-envelope"></i>
                  </div>
                </div>
                <div class="inputContainer">
                  <div class="inputField">
                    <input
                      v-model="password"
                      class="form-input"
                      type="password"
                      id="password"
                      placeholder="Contraseña"
                    />
                  </div>

                  <div class="imgHelperIcon">
                    <i class="far fa-key"></i>
                  </div>
                </div>
                <p v-if="error" class="error">
                  Has introducido mal el correo o la contraseña.
                </p>
                <div class="containerButton">
                  <button class="loginButton" type="submit">Ingresar</button>
                </div>
              </form>
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
  components: {
    Header,
  },
  data: () => ({
    show: false,
    email: "",
    password: "",
    error: false
  }),
  methods: {
    async login() {
      try {
        //si retorna 200, redirecciona a /home.
        let data = await api.login();
        let userData = data.data;

        if (
          userData.email == this.email &&
          userData.password == this.password
        ) {
          //este bloque de codigo extrae el nombre del correo y pone la primer letra en Mayuscula
          let nameFromEmail = userData.email.substring(
            0,
            userData.email.lastIndexOf("@")
          );
          let name =
            nameFromEmail.charAt(0).toUpperCase() + nameFromEmail.slice(1);
          //fin
          const user = {
            email: userData.email,
            password: userData.password,
            name: name,
          };
          console.log(user);
          //Guarda el Cookie el nombre de usuario de la persona logueada
          api.setUserLogged(user.name);
          this.$router.push("/home");
        } else {
          this.error = true;
        }
      } catch (error) {
        console.log(error);
        this.error = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.error {
  margin: 1rem 0 0;
  color: #ff4a96;
}
.msg {
  margin-top: 3rem;
  text-align: center;
}

</style>
