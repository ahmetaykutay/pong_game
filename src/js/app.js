import game from './game.js'
import Events from './Events'

game.init()
game.start()


const score_div = document.querySelector('.score')

Events.on("score", function(e){
  score_div.innerHTML = `Player 1: ${e.player_1} || Player 2: ${e.player_2}`
})

