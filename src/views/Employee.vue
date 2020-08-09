<template>
  <main class="main">
       <header class="row">
           <figure>
               <img src="./assets/logo.png" alt="Logo" />
            </figure>
            <div class=" row profile">
                <figure>
                  <img src="./assets/p5.png" alt="Owner Picture" />
                </figure>
                <h1>Hi, Joshua</h1>
                <button>
                    <!-- <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.99889 5.55556L10 0.00111334L0 0L4.99889 5.55556Z" fill="#013C61"/>
                    </svg>       -->
                </button>
            </div>
       </header>
       <section class="content">
            <nav>
                <ul>
                    <!-- <li class="active">
                          <router-link  to="/employees">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M8.24963 1.37544H1.37444V8.25062H8.24963V1.37544ZM8.24963 9.62506H1.37444C0.615301 9.62506 0 9.00976 0 8.25062V1.37544C0 0.6163 0.615301 0 1.37444 0H8.24963C9.00876 0 9.62506 0.6163 9.62506 1.37544V8.25062C9.62506 9.00976 9.00876 9.62506 8.24963 9.62506ZM8.24963 13.7504H1.37444V20.6256H8.24963V13.7504ZM8.24963 22H1.37444C0.615301 22 0 21.3847 0 20.6256V13.7504C0 12.9902 0.615301 12.3749 1.37444 12.3749H8.24963C9.00876 12.3749 9.62506 12.9902 9.62506 13.7504V20.6256C9.62506 21.3847 9.00876 22 8.24963 22ZM20.6246 1.37544H13.7494V8.25062H20.6246V1.37544ZM20.6246 9.62506H13.7494C12.9902 9.62506 12.3749 9.00976 12.3749 8.25062V1.37544C12.3749 0.6163 12.9902 0 13.7494 0H20.6246C21.3837 0 22 0.6163 22 1.37544V8.25062C22 9.00976 21.3837 9.62506 20.6246 9.62506ZM20.6246 13.7504H13.7494V20.6256H20.6246V13.7504ZM20.6246 22H13.7494C12.9902 22 12.3749 21.3847 12.3749 20.6256V13.7504C12.3749 12.9902 12.9902 12.3749 13.7494 12.3749H20.6246C21.3837 12.3749 22 12.9902 22 13.7504V20.6256C22 21.3847 21.3837 22 20.6246 22Z" fill="#013C61"/>
                                </svg> 
                          </router-link> 
                    </li>

                     <li>
                          <router-link  to="/employees">
                                <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 19.3333V17.2963C17 15.0463 15.2091 13.2222 13 13.2222H5C2.79086 13.2222 1 15.0463 1 17.2963V19.3333" stroke="#2BDA53" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 9.14815C11.2091 9.14815 13 7.32412 13 5.07407C13 2.82403 11.2091 1 9 1C6.79086 1 5 2.82403 5 5.07407C5 7.32412 6.79086 9.14815 9 9.14815Z" stroke="#2BDA53" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M23 19.3333V17.2963C22.9986 15.4397 21.765 13.8188 20 13.3546" stroke="#2BDA53" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M16 1.1324C17.7699 1.59396 19.0078 3.21832 19.0078 5.07916C19.0078 6.94 17.7699 8.56436 16 9.02592" stroke="#2BDA53" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                               </svg> 
                          </router-link> 
                    </li>

                     <li>
                          <router-link  to="/employees">
                                <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.5">
                                    <rect x="1" y="1" width="22" height="16" rx="2" stroke="#013C61" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M1 7H23" stroke="#013C61" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                </svg> 

                          </router-link> 
                    </li> -->
                </ul>
            </nav>
            <div class="employees">
                <div class="row header">
                   <h1>Employees</h1>
                     <button type="button">
                        Add New
                     </button>
                </div>
                <div class="row intro">
                    <h2>Josh Bakery Ventures</h2>
                    <p>62, Bode Thomas, Surulere, Lagos</p>
                </div>
                <div class="row options">
                    <div class="left row">
                         <select name="cars">
                                <option value="Change Role">Change Role</option>
                                <option value="Admin">Admin</option>
                                <option value="User">User</option>
                        </select> 
                         <button type="button">
                           Change
                         </button>
                         <div class="input__row">
                            <input type="text"
                                name="search"
                                class="search"
                                placeholder="Enter your staff name"
                                v-model="search"
                                required />

                              <figure>
                                  <img  alt="icon" src="./assets/user.png" />
                              </figure>    
                      </div>
                    </div>
                    <div class="right row">
                        <p><span>1</span> of 2 </p>
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.996975 8.04924C0.996975 12.4947 4.60074 16.0985 9.04622 16.0985C13.4917 16.0985 17.0955 12.4947 17.0955 8.04924C17.0955 3.60377 13.4917 0 9.04622 0C4.60074 0 0.996975 3.60377 0.996975 8.04924Z" fill="#2BDA53"/>
                            <path d="M9.85114 4.82954L6.63144 8.04924L9.85114 11.2689" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9136 8.04924C16.9136 12.4947 13.3098 16.0985 8.86437 16.0985C4.41889 16.0985 0.815125 12.4947 0.815125 8.04924C0.815125 3.60377 4.41889 0 8.86437 0C13.3098 0 16.9136 3.60377 16.9136 8.04924Z" fill="#2BDA53"/>
                            <path d="M8.05945 4.82954L11.2791 8.04924L8.05945 11.2689" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                    </div>
                </div>
                <div class="employees__table">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>FIRST NAME</th>
                                <th>LAST NAME</th>
                                <th>EMAIL</th>
                                <th>PHONE</th>
                                <th>ROLE</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        </section> 
  </main>
</template>

<script>
// import icon from './assets/user.png';

export default {
  name: "Employee",
  components: {},
   data: function() {
        return {
          search:''
        }
   },
   methods: {}
};
</script>

<style lang="scss">
        .row {
            display:flex;
            justify-content:space-between;
            align-items: center;
        }

        .main {
            height:100vh;
            width:100%;
            background-color:$white;
            display:flex;
            flex-direction:column;

            header {
                height:8rem;
                background:$white;
                border: 1px solid rgba(106, 126, 138, 0.1);
                width:100%;
                padding:1rem 2rem;

                

                .profile {
                    figure {
                        margin-right:1rem;
                    }

                    h1 {
                      @include fontNormal(1.6rem,2.5rem,$blue);
                        margin-right:.5rem;
                    }

                    button {
                        outline:none;
                        border:none;
                        background-color:transparent;
                        box-shadow:none;
                        cursor:pointer;
                    }
                }
            }

            .content {
                display:flex;

                nav {
                        flex-basis: 8.5rem;
                        width:8.5rem;
                        background-color:$white;
                        border: 1px solid rgba(106, 126, 138, 0.1);
                        overflow-y: hidden;
                        height: calc(100vh - 8.5rem);
                        position: fixed;
                        display:flex;
                        flex-direction:column;
                        justify-content: flex-start;
                        align-items: center;

                        ul {
                            list-style:none;
                            cursor:pointer;

                            li {
                                width: 8.5rem;
                                margin-top: 4.5rem;
                                margin-bottom: 4.5rem;
                                transition:all .2s;
                                @include flexCenter;

                                a {
                                        svg {
                                            g {
                                                opacity:0.5;
                                            }

                                            path {
                                                stroke:#013C61;
                                            }
                                        }
                                    }
                                &.active {
                                    border-left: 5px solid $green;

                                    a {
                                        svg {

                                            path {
                                                stroke:$green;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                }

                .employees {
                        background-color: rgba(#E5E5E5,0.5);
                        flex-basis: auto;
                        margin-left: 8rem;
                        width: 100%;
                        padding: 2rem;

                        h1 {
                            @include fontBold(2.6rem,1.5rem,$blue);
                        }

                        h2 {
                             @include fontBold(3.6rem,1.5rem,$blue);
                        }

                        p {
                             @include fontNormal(2.2rem,1.5rem,$blue);
                        }

                        .header {
                            margin-bottom:1.5rem;
                        }

                        .intro {
                            background: #FFFFFF;
                            border-radius: 5px;
                            margin-bottom: 2rem;
                            padding:4.5rem;
                        }

                        .options {
                            width:100%;
                            margin-bottom: 2rem;

                            select {
                                margin-right:1.2rem;

                            }
                            button {
                                margin-right:1.2rem;
                            }

                             input {
                                    width:100%;
                                    border:none;
                                    outline:none;
                                    border-bottom:1px solid #E6E7EB;
                                    @include fontNormal(2rem,2.5rem,#013C61);
                                    position:relative;
                                    margin-bottom:3rem;
                                    padding-bottom:1rem 2rem;

                                    &::-webkit-input-placeholder {
                                      color: $blue2;
                                    }

                                    &:focus {
                                      background-color:transparent;
                                      color:$blue;
                                    }
                                }

                            .left {
                               .input__row {
                                position:relative;
                                width:100%;
                                background-color: yellow;
                                @include flexCenter;

                                    figure {
                                    position:absolute;
                                    top:.8rem;
                                    right:1rem;
                                    width:1rem;
                                    height:1rem;

                                    img {
                                        width:100%;
                                        height:100%;
                                    }

                              }
                             }
                            }
                           
                           

                            p {
                                margin-right:.8rem; 

                                span {
                                    border: 1px solid rgba(1, 60, 97, 0.1);
                                    padding:.5rem;
                                    border-radius: 3px;
                                }
                            }

                            svg {
                                margin-right:.8rem;
                            }
          
                        }
                }
            }
    }
</style>