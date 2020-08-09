<template>
  <div class="home">
      <div class="home__left">
          <h2>No Hazzle</h2>
            <p >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
            </p>
      </div>
       <div class="home__right">
            <h2 class="heading heading-blue">Login into your Account</h2>
            <p class="p p-blue">
               Not yet registered &nbsp;
                <router-link  class="p p-green" to="/login">Create an account</router-link> 
            </p>
            <form  class="form"  @submit.prevent="login" method="post">
    
                <div class="form__group">
                      <label>Email</label>
                    <div class="input__row">
                          <input type="email"
                              name="email"
                              class="form__group__input"
                              placeholder="Email"
                              v-model="email"
                              required />
                              <figure>
                                  <img  class="form__group__input__icon" alt="icon" src="./assets/user.png" />
                              </figure>
                              
                      </div>
                </div>

                <div class="form__group">
                      <label>Password</label>
                      <div class="input__row">
                          <input type="password"
                              name="password"
                              class="form__group__input"
                              placeholder="Password"
                              v-model="password"
                              required />
                              <figure>
                                  <img  class="form__group__input__icon" alt="icon" src="./assets/user.png" />
                              </figure>
                              
                      </div>
                </div>

                 <button type="submit" class="form__button row">
                        <span v-if="!loading">Login</span>
                         <span class="loading" v-if="loading"></span>
                </button>
               
            </form>
      </div>
  </div>
</template>

<script>
// import icon from './assets/user.png';

export default {
  name: "Login",
  components: {},
   data: function() {
        return {
          email:'',
          password:'',
          loading:false
        }
   },
   methods: {
        login: async function () {
            this.loading = true;
            setTimeout(() => {
             this.$router.push('/empoyee');
            }, 2000);
        }
		 }
};
</script>

<style lang="scss">
@import './styles/home';
</style>
