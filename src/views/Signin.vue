<template>
  <div class="container">
    <div class="logo">
      <img
        alt="Dialog Insight"
        src="../assets/DialogInsight_Logo_hackathon.png"
      />
    </div>
    <div class="signin">
      <div v-if="signingIn" class="container-loading">
        <img src="../assets/loading.gif" alt="Loading Icon" />
      </div>
      <div class="errors">
        <p v-if="signinErrors.message">{{ signinErrors.message }}</p>
        <p v-if="signinErrors.email">{{ signinErrors.email }}</p>
        <p v-if="signinErrors.password">{{ signinErrors.password }}</p>
      </div>
      <form @submit.prevent="signinFormSubmit">
        <input type="email" placeholder="email" v-model="email" />
        <input type="password" placeholder="password" v-model="password" />
        <button class="btn-signin" type="submit">Sign in</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'Signin',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  computed: {
    ...mapGetters('authentication', ['signingIn', 'signinErrors'])
  },
  methods: {
    ...mapActions('authentication', ['signIn']),
    signinFormSubmit() {
      this.signIn({
        email: this.email,
        password: this.password
      }).then(_ => {
        this.$router.push(this.$route.query.redirect || '/');
      });
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  margin-top: 3.75rem;
}
.logo {
  margin-bottom: 1rem;
  img {
    max-height: 3.75rem;
  }
}
.signin {
  border: 1px solid #2c997a;
  border-radius: 5px;
  padding: 1.5rem;
  width: 25rem;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  .container-loading {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(44, 153, 122, 0.3);
    img {
      width: 2rem;
      height: 2rem;
    }
  }
  .errors {
    color: red;
    font-size: 0.75rem;
  }
  form {
    display: flex;
    flex-flow: column;
    *:not(:last-child) {
      margin-bottom: 1rem;
    }
    input {
      padding: 0.5rem;
    }
    button {
      padding: 0.5rem;
      border: 1px solid;
      border-radius: 3px;
      cursor: pointer;
    }
    button.btn-signin {
      color: white;
      background-color: #2c997a;
      &:hover {
        background-color: #56ad95;
      }
    }
  }
}
</style>
