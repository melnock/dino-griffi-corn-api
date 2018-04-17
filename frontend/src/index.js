const canvas = document.querySelector('#game')
const twoD = canvas.getContext('2d')


window.addEventListener('load', function() {

  Adapter.fetchItems();

  const start = new Start();
  start.render()

  // const game = new Game();

})
