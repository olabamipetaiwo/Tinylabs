<template>
  <div class="home">
      <div class="home__left">
          <h2>No Hazzle</h2>
            <p >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
            </p>
            <div class="row dots">
               <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <rect x="0.5" y="0.5" width="10.5" height="10.5" rx="5.25" fill="#2BDA53"/>
               </svg>


                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 5.75C0.5 2.85051 2.85051 0.5 5.75 0.5C8.6495 0.5 11 2.85051 11 5.75C11 8.6495 8.6495 11 5.75 11C2.85051 11 0.5 8.6495 0.5 5.75Z" fill="#D0E8DF"/>
                </svg>


            </div>
      </div>
       <div class="home__right">
            <h2 class="heading heading-blue">Create your free Account</h2>
            <p class="p p-blue">
                Already registered &nbsp;
                <router-link  class="p p-green" to="/login">Sign in</router-link> 
            </p>
            <form  class="form"  @submit.prevent="register" method="post">
              <div class="row">
                   <div class="form__group">
                      <label>First Name</label>
                      <div class="input__row">
                          <input type="text"
                              name="fname"
                              class="form__group__input"
                              placeholder="First Name"
                              v-model="fname"
                              required />
                              <figure>
                                  <img  class="form__group__input__icon" alt="icon" src="./assets/user.png" />
                              </figure>
                              
                      </div>
                   </div>
                    <div class="form__group">
                      <label>Last Name</label>
                      <div class="input__row">
                          <input type="text"
                              name="lname"
                              class="form__group__input"
                              placeholder="Last Name"
                              v-model="lname"
                              required />
                              <figure>
                                  <img  class="form__group__input__icon" alt="icon" src="./assets/user.png" />
                              </figure>
                              
                      </div>
                  </div>

              </div>

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
                                  <img  class="form__group__input__icon" alt="icon" src="./assets/@.png" />
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
                                  <img  class="form__group__input__icon" alt="icon" src="./assets/eye.png" />
                              </figure>
                              
                      </div>
                </div>

                 <button type="submit" class="form__button row">
                        <span v-if="!loading">Register</span>
                         <span class="loading" v-if="loading"></span>
                </button>
               
            </form>
           
      </div>

     
  </div>
</template>

<script>
// import icon from './assets/user.png';

export default {
  name: "Home",
  components: {},
   data: function() {
        return {
          email:'',
          password:'',
          loading:false
        }
   },
   methods: {
        register: async function () {
           this.loading = true;
           setTimeout(() => {
            this.$router.push('/login');
           }, 2000);
           
        }
		 }
};
</script>

<style lang="scss">
    @import './styles/home';
</style>