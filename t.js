var fruits = [
    {
      id:1,
      firstName:"Ola",
      lastName:'Taiwo',
      email:'teeola@gmail.com',
      number:'+2348298456',
      role:'User'
    },
    {
      id:2,
      firstName:"Ade",
      lastName:'Kehinde',
      email:'keeola@gmail.com',
      number:'+2348568456',
      role:'Admin'
    }
  ];

 var n = {
    id: 2,
   firstName: "Adeolabnipe", 
   lastName: "Kehindettyyy", 
   email: "keeola@gmail.com", 
   role: "Admin"}

   let nr = [...fruits];
   console.log(nr);
    nr[1] = n;
    fruits = nr;
console.log("///////////////////////////////////////////")

 console.log(nr[1]);
 console.log(fruits);