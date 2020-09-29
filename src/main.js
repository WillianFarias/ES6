/*const minhaPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => { resolve('OK')}, 2000);
});


minhaPromise()
  .then(response => {
    console.log(response);
  })
  .catch(err ={

  });


  //await só pode ser executado dentro de uma async function
  async function executaPromise() {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
  }

  const executaPromise = async () => {
    console.log(await minhaPromise());
  }

  executaPromise();
  */
 import axios from 'axios';

 class Api {
   static async getUserInfo(username) {
     try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      console.log(response);
     } catch (error) {
       console.warn('Erro na API');
     }
   }
 }

 Api.getUserInfo('WillianFarias');
 Api.getUserInfo('WillianFariaasdasdasds');