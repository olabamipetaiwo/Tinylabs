import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name:"vico",
    employees: [
      {
        id:1,
        firstName:"Ola",
        lastName:'Taiwo',
        email:'teeola@gmail.com',
        number:'2348298456',
        role:'User'
      },
      {
        id:2,
        firstName:"Ade",
        lastName:'Kehinde',
        email:'keeola@gmail.com',
        number:'2348568456',
        role:'Admin'
      }
    ]
  },
  mutations: {
    ADD_EMPLOYEE(state,employee) {
      state.employees.push(employee);
    },
    EDIT_EMPLOYEE(state,employee) {
      const elIndex = this.state.employees.findIndex(el => el.id == employee.id);
      let newArr = [...state.employees];
      newArr[elIndex] = employee;
      state.employees = newArr;
    },
    DELETE_EMPLOYEE(state,emp) {
     var emps = state.employees;
     emps.splice(emps.indexOf(emp),1);
    },
  },
  actions: {
      addEmployee({commit},employee) {
        commit('ADD_EMPLOYEE',employee);
      },
      editEmployee({commit},employee) {
        commit('EDIT_EMPLOYEE',employee);
      },
      deleteEmployee({commit},emp) {
        commit('DELETE_EMPLOYEE',emp);
      },
  },
  modules: {}
});
