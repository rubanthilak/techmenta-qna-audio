<template>
  <div class="container">
    <div class="card">
      <h2>Welcome</h2>
      <p class="subs">
        By logging in you accept our
        <span>Privacy Policy</span> and
        <span>Terms of Service</span>.
      </p>
      <form @submit.prevent="validateCredentials" class="login-form flex">
        <input type="email" v-model="email" placeholder="Email" />
        <input type="password" v-model="password" placeholder="Password" />
        <p class="error-msg" v-if="errorMessage">{{errorMessage}}</p>
        <button type="submit" v-if="!isloading">Login</button>
        <button v-if="isloading">
          <div class="spinner">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
          </div>
        </button>
      </form>
    </div>
    <div class="container" style="height:auto;margin-top:10px;">
      <p style="font-size:14px">Don't have a account ? <router-link to="/signup" style="color: var(--accent-color-900);font-weight:var(--semibold)" >Sign up</router-link></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
      errorMessage: null,
      isloading: false,
    };
  },
  methods: {
    async validateCredentials() {
      if (this.email && this.password) {
        this.isloading = true;
        try {
          await this.$store.dispatch("login", {
            email: this.email,
            password: this.password,
          });
          this.$router.replace("/");
        } catch (err) {
          this.errorMessage = err.message;
        }
        this.isloading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.error-msg {
  color: var(--red);
  margin-top: 0px;
  margin-bottom: 10px;
  max-width: 350px;
  font-size: 12px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 100px);
  flex-direction: column;
}

.card {
  padding: 25px;
  background: var(--primary-color-800);
  display: inline-block;
  border-radius: 8px;

  .subs {
    max-width: 350px;
    font-size: 14px;
    margin-top: 10px;

    span {
      font-weight: var(--bold);
    }
  }
}

.login-form {
  flex-direction: column;
  max-width: 350px;
  max-height: 350px;
  margin-top: 25px;

  input {
    margin-bottom: 25px;
    padding: 12px 10px;
    border-radius: 6px;
    border: none;
    outline: none;
    background: var(--primary-color-700);
    color: var(--primary-color-100);
    font-family: var(--font);
    font-weight: var(--medium);
  }
}
</style>