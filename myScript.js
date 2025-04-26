
  function fun1() {
    document.querySelector('.cssGridContainer1').classList.toggle("-toggled");
  }
  async function fun2() {
  let myUrl = 'https://www.flytechfree.com/.netlify/functions/getEnvVars'
  let response =   await fetch(myUrl) // magic double-await, promise / result
  let resObj   =   await response.json()
  // resObj is like: {getWhichDb: 'turso'}
  console.log(Date.now()/10000,'12 resObj from getEnvVars.ts getWhichDb:')
  console.log(resObj)
  }
