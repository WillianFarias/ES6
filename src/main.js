const minhaPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => { resolve('OK')}, 2000);
});

/*
minhaPromise()
  .then(response => {
    console.log(response);
  })
  .catch(err ={

  });
  */

  //await só pode ser executado dentro de uma async function
  async function executaPromise() {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
  }

  /*
  const executaPromise = async () => {
    console.log(await minhaPromise());
  }
  */

  executaPromise();