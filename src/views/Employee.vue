<script>
export default {
   name: "Employee",
   components: {},
   data: function() {
        return {
           search:'',
           firstName:'',
           lastName:'',
           role:'',
           number:'',
           email:'',
           employees:this.$store.state.employees,
           update:false,
           currentEmployee:null
        }
   },
   beforeCreate:function() {
       this.employees = this.$store.state.employees;
   },
   methods: {
       showForm:function () {
           this.$refs.addEmp.classList.add('active');
       },
       addEmployee: async function() {
            let firstName = this.firstName;
            let lastName = this.lastName;
            let role = this.role;
            let number = this.number;
            let email = this.email;
            await this.$store.dispatch( 'addEmployee',{firstName,lastName,role,number,email});
            this.$refs.addEmp.classList.remove('active');
            this.$refs.addEmp.classList.add('inactive');
       },
       updateEmployee: async function() {
            let firstName = this.firstName;
            let lastName = this.lastName;
            let role = this.role;
            let number = this.number;
            let email = this.email;
            let id = this.currentEmployee.id;
            await this.$store.dispatch( 'editEmployee',{id,firstName,lastName,email,role,number});
            this.$refs.addEmp.classList.remove('active');
            this.$refs.addEmp.classList.add('inactive');
            this.update=false;
            this.currentEmployee = null;
       },
       editEmployee:async function({id,firstName,lastName,role,number,email}) {
             this.currentEmployee = {id,firstName,lastName,role,number,email};
             this.update=true;
             this.firstName = firstName;
             this.lastName = lastName;
             this.role = role;
             this.number = number;
             this.email = email;
            this.$refs.addEmp.classList.remove('inactive');
            this.$refs.addEmp.classList.add('active');
       },
       deleteEmployee: async function (emp) {
           await this.$store.dispatch('deleteEmployee',emp);
       }
   }
}; 
</script>

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
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.99889 5.55556L10 0.00111334L0 0L4.99889 5.55556Z" fill="#013C61"/>
                    </svg>      
                </button>
            </div>
       </header>
       <section class="content">
            <nav>
                <ul>
                    <li >
                          <router-link  to="/employees">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M8.24963 1.37544H1.37444V8.25062H8.24963V1.37544ZM8.24963 9.62506H1.37444C0.615301 9.62506 0 9.00976 0 8.25062V1.37544C0 0.6163 0.615301 0 1.37444 0H8.24963C9.00876 0 9.62506 0.6163 9.62506 1.37544V8.25062C9.62506 9.00976 9.00876 9.62506 8.24963 9.62506ZM8.24963 13.7504H1.37444V20.6256H8.24963V13.7504ZM8.24963 22H1.37444C0.615301 22 0 21.3847 0 20.6256V13.7504C0 12.9902 0.615301 12.3749 1.37444 12.3749H8.24963C9.00876 12.3749 9.62506 12.9902 9.62506 13.7504V20.6256C9.62506 21.3847 9.00876 22 8.24963 22ZM20.6246 1.37544H13.7494V8.25062H20.6246V1.37544ZM20.6246 9.62506H13.7494C12.9902 9.62506 12.3749 9.00976 12.3749 8.25062V1.37544C12.3749 0.6163 12.9902 0 13.7494 0H20.6246C21.3837 0 22 0.6163 22 1.37544V8.25062C22 9.00976 21.3837 9.62506 20.6246 9.62506ZM20.6246 13.7504H13.7494V20.6256H20.6246V13.7504ZM20.6246 22H13.7494C12.9902 22 12.3749 21.3847 12.3749 20.6256V13.7504C12.3749 12.9902 12.9902 12.3749 13.7494 12.3749H20.6246C21.3837 12.3749 22 12.9902 22 13.7504V20.6256C22 21.3847 21.3837 22 20.6246 22Z" fill="#013C61"/>
                                </svg> 
                          </router-link> 
                    </li>

                     <li>
                          <router-link  class="active" to="/employees">
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
                    </li>
                </ul>
            </nav>
            <div class="employees">
                <div class="row header">
                   <h1>Employees</h1>
                     <button  @click.prevent="showForm" type="button">
                        Add New
                     </button>
                </div>
                <div class="row intro">
                    <h2>Josh Bakery Ventures</h2>
                    <p>62, Bode Thomas, Surulere, Lagos</p>
                </div>

                 <div ref="addEmp" class="intro add__form">
                    <p>Add a new employee</p>
                    <form  class="form" method="post">
                        <div class="row">
                            <div class="form__group">
                                <label>First Name</label>
                                <div class="input__row">
                                    <input type="text"
                                        name="firstName"
                                        class="form__group__input"
                                        placeholder="First Name"
                                        v-model="firstName"
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
                                        name="lastName"
                                        class="form__group__input"
                                        placeholder="Last Name"
                                        v-model="lastName"
                                        required />
                                        <figure>
                                            <img  class="form__group__input__icon" alt="icon" src="./assets/user.png" />
                                        </figure>
                                        
                                </div>
                            </div>

                        </div>
                         <div class="row">
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
                                <label>Number</label>
                                <div class="input__row">
                                    <input type="number"
                                        name="number"
                                        class="form__group__input"
                                        placeholder="Phone Number"
                                        v-model="number"
                                        required />
                                        <figure>
                                            <img  class="form__group__input__icon" alt="icon" src="./assets/user.png" />
                                        </figure>
                                        
                                </div>
                            </div>

                        </div>
                        
                         <div class="row">
                            <div class="form__group">
                                    <label>Role</label>
                                    <select v-model="role" required name="role">
                                            <option value="">Change Role</option>
                                            <option value="Admin">Admin</option>
                                            <option value="User">User</option>
                                </select> 
                            </div>
                            <button  v-if="!update" type="button" @click.prevent="addEmployee" class="form__button row">
                                Add Employee
                            </button>

                             <button v-if="update" type="button" @click.prevent="updateEmployee" class="form__button row">
                                Update Employee
                            </button>
                         </div>
                    </form>
                </div>
                <div class="row options">
                    <div class="left row">
                         <select name="role">
                                <option>Change Role</option>
                                <option value="Admin">Admin</option>
                                <option value="User">User</option>
                        </select> 
                         <button  @click.prevent="showForm"  type="button">
                           Add New
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
                                <th>
                                    <label class="checkbox-label">
                                        <input type="checkbox">
                                        <span class="checkbox-custom"></span>
                                    </label>
                                </th>
                                <th>FIRST NAME </th>
                                <th>LAST NAME</th>
                                <th>EMAIL</th>
                                <th>PHONE</th>
                                <th>ROLE</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-if="!this.$store.state.employees.length">Sorry, there are no employees.</tr>
                            <tr v-for="employee in this.$store.state.employees" v-bind:key="employee.id">
                                    <td>
                                         <label @click.prevent="editEmployee(employee)" class="checkbox-label">
                                            <input type="checkbox">
                                            <span class="checkbox-custom"></span>
                                         </label>
                                    </td>
                                    <td>{{ employee.firstName }}</td>
                                    <td>{{ employee.lastName }}</td>
                                    <td>{{ employee.email }}</td>
                                    <td>{{ employee.number }}</td>
                                    <td>{{ employee.role }}</td>
                                    <td>
                                        <button @click.prevent="deleteEmployee(employee)">
                                             <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 5.55556H2.77778H17" stroke="#6A7E8A" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M3.9778 5.55555C3.9778 4.89281 3.44054 4.35555 2.7778 4.35555V5.55555H3.9778ZM3.9778 18V5.55555H2.7778V18H3.9778ZM4.55557 18.5778C4.23647 18.5778 3.9778 18.3191 3.9778 18H2.7778C2.7778 18.9818 3.57373 19.7778 4.55557 19.7778V18.5778ZM13.4445 18.5778H4.55557V19.7778H13.4445V18.5778ZM14.0222 18C14.0222 18.3191 13.7636 18.5778 13.4445 18.5778V19.7778C14.4263 19.7778 15.2222 18.9818 15.2222 18H14.0222ZM14.0222 5.55555V18H15.2222V5.55555H14.0222ZM15.2222 4.35555C14.5595 4.35555 14.0222 4.89281 14.0222 5.55555H15.2222H15.2222V4.35555ZM16.4222 5.55555C16.4222 4.89281 15.885 4.35555 15.2222 4.35555V5.55555H16.4222ZM16.4222 18V5.55555H15.2222V18H16.4222ZM13.4445 20.9778C15.089 20.9778 16.4222 19.6446 16.4222 18H15.2222C15.2222 18.9818 14.4263 19.7778 13.4445 19.7778V20.9778ZM4.55557 20.9778H13.4445V19.7778H4.55557V20.9778ZM1.5778 18C1.5778 19.6446 2.91099 20.9778 4.55557 20.9778V19.7778C3.57373 19.7778 2.7778 18.9818 2.7778 18H1.5778ZM1.5778 5.55555V18H2.7778V5.55555H1.5778ZM2.7778 4.35555C2.11505 4.35555 1.5778 4.89281 1.5778 5.55555H2.7778V4.35555ZM6.64446 3.77777C6.64446 3.45867 6.90314 3.19999 7.22224 3.19999V1.99999C6.2404 1.99999 5.44446 2.79593 5.44446 3.77777H6.64446ZM6.64446 5.55555V3.77777H5.44446V5.55555H6.64446ZM5.44446 6.75555C6.1072 6.75555 6.64446 6.21829 6.64446 5.55555H5.44446V6.75555ZM4.24446 5.55555C4.24446 6.21829 4.78172 6.75555 5.44446 6.75555V5.55555H4.24446ZM4.24446 3.77777V5.55555H5.44446V3.77777H4.24446ZM7.22224 0.799994C5.57766 0.799994 4.24446 2.13319 4.24446 3.77777H5.44446C5.44446 2.79593 6.2404 1.99999 7.22224 1.99999V0.799994ZM10.7778 0.799994H7.22224V1.99999H10.7778V0.799994ZM13.7556 3.77777C13.7556 2.13319 12.4224 0.799994 10.7778 0.799994V1.99999C11.7596 1.99999 12.5556 2.79593 12.5556 3.77777H13.7556ZM13.7556 5.55555V3.77777H12.5556V5.55555H13.7556ZM12.5556 6.75555C13.2183 6.75555 13.7556 6.21829 13.7556 5.55555H12.5556V6.75555ZM11.3556 5.55555C11.3556 6.21829 11.8928 6.75555 12.5556 6.75555V5.55555H11.3556ZM11.3556 3.77777V5.55555H12.5556V3.77777H11.3556ZM10.7778 3.19999C11.0969 3.19999 11.3556 3.45867 11.3556 3.77777H12.5556C12.5556 2.79593 11.7596 1.99999 10.7778 1.99999V3.19999ZM7.22224 3.19999H10.7778V1.99999H7.22224V3.19999Z" fill="#6A7E8A"/>
                                                <path d="M7.22222 10V15.3333" stroke="#6A7E8A" stroke-width="1.2" stroke-linecap="square" stroke-linejoin="round"/>
                                                <path d="M10.7778 10V15.3333" stroke="#6A7E8A" stroke-width="1.2" stroke-linecap="square" stroke-linejoin="round"/>
                                            </svg>
                                        </button>
                                    </td>
                          </tr> 
                        </tbody>
                    </table>
                </div>
            </div>
        </section> 
  </main>
</template>


<style lang="scss">
        @import './styles/employees';

        .add__form {
           display: none;

            &.active {
                display:block;
                animation-name:slideIn;
                animation-duration: .3s;
                animation-fill-mode: forwards;
            }

            &.inactive { 
                animation-name:slideOut;
                animation-duration: .3s;
                animation-fill-mode: forwards;
                display:none;
            }
        }

        form.form {
        width:100%;
        padding:3rem;
        display:flex;
        flex-direction:column;


        button  {
          width:50%;
          align-self:flex-end;
          text-align:center;
          @include flexCenter;
        }


        .form__group {
            flex-basis:49%;
            display:flex;
            flex-direction:column;
            align-items:flex-start;

            select {
                            margin-right:1.2rem;
                            width:100%;
                            border:none;
                            outline:none;
                            border-bottom:1px solid #E6E7EB;
                            @include fontNormal(2rem,2.5rem,#013C61);
                            position:relative;
                            padding:1rem 2rem;
             }

          .input__row {
            position:relative;
            width:100%;

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
          

          label {
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 1.6rem;
            line-height: 2.2rem;
            color: #6A7E8A;
            margin-bottom:1rem;
          }

          input {
                width:100%;
                border:none;
                outline:none;
                border-bottom:1px solid #E6E7EB;
                @include fontNormal(2rem,2.5rem,#013C61);
                position:relative;
                margin-bottom:3rem;
                padding-bottom:1rem;

                &::-webkit-input-placeholder {
                    color: $blue2;
                }

                &:focus {
                    background-color:transparent;
                    color:$blue;
                }
          }
        }
      }
</style>