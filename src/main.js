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
   */

// Funão delay aciona o .then após 1s
const delay = () => new Promise((resolve) => {
  setTimeout(() => { resolve('s')}, 1000);
});

async function executaPromise() {
  console.log('1' + await delay());
  console.log('2' + await delay());
  console.log('3' + await delay());
}

executaPromise();

import axios from 'axios';

class Api {
  static async getUserInfo(username) {
    try {
     const response = await axios.get(`https://api.github.com/users/${username}`);
     console.log(response.data);
    } catch (error) {
      console.warn('Usuário não existe');
    }
  }
}

Api.getUserInfo('WillianFarias');
Api.getUserInfo('WillianFariaasdasdasds');