$(document).ready( function() {



  $('#r').on('click', function() {
    var winnerIs = $('.winner-is')
    var enemyChoice = $('.enemy-decision')
    var playerChoice = "r"
    var computerOpts = ["r", "p", "s"]
    var computerChoice = computerOpts[Math.floor(Math.random()*computerOpts.length)]
    var combo = playerChoice + computerChoice
    switch(combo){
      case "rr":
        enemyChoice.replaceWith('<div class="enemy-decision" id="enemy-choice"><img src="images/rock.png" alt="rock" ></div>')
        winnerIs.replaceWith('<div class="winner-is">ITS A DRAW</div>')
        var combo = ""
        break
      case "rs":
        enemyChoice.replaceWith('<div class="enemy-decision" id="enemy-choice"><img src="images/scissors.png" alt="scissors" ></div>')
        winnerIs.replaceWith('<div class="winner-is">PLAYER WINS!</div>')
        var combo = ""
        break
      case "rp":
        enemyChoice.replaceWith('<div class="enemy-decision" id="enemy-choice"><img src="images/paper.png" alt="paper" ></div>')
        winnerIs.replaceWith('<div class="winner-is">COMPUTER WINS!</div>')
        var combo = ""
        break
    }
})

$('#p').on('click', function() {
  var winnerIs = $('.winner-is')
  var enemyChoice = $('.enemy-decision')
  var computerOpts = ["r", "p", "s",]
  var playerChoice = "p"
  var computerChoice = computerOpts[Math.floor(Math.random()*computerOpts.length)]
  var combo = playerChoice + computerChoice
  switch(combo){
    case "pp":
      enemyChoice.replaceWith('<div class="enemy-decision" id="enemy-choice"><img src="images/paper.png" alt="paper" ></div>')
      winnerIs.replaceWith('<div class="winner-is">ITS A DRAW</div>')
      var combo = ""
      break
    case "pr":
      enemyChoice.replaceWith('<div class="enemy-decision" id="enemy-choice"><img src="images/rock.png" alt="rock" ></div>')
      winnerIs.replaceWith('<div class="winner-is">PLAYER WINS!</div>')
      var combo = ""
      break
    case "ps":
      enemyChoice.replaceWith('<div class="enemy-decision" id="enemy-choice"><img src="images/scissors.png" alt="scissors" ></div>')
      winnerIs.replaceWith('<div class="winner-is">COMPUTER WINS!</div>')
      var combo = ""
      break
  }
})

$('#s').on('click', function() {
  var winnerIs = $('.winner-is')
  var enemyChoice = $('.enemy-decision')
  var computerOpts = ["r", "p", "s",]
  var playerChoice = "s"
  var computerChoice = computerOpts[Math.floor(Math.random()*computerOpts.length)]
  var combo = playerChoice + computerChoice
  switch(combo){
    case "ss":
      enemyChoice.replaceWith('<div class="enemy-decision" id="enemy-choice"><img src="images/scissors.png" alt="scissors" ></div>')
      winnerIs.replaceWith('<div class="winner-is">ITS A DRAW</div>')
      var combo = ""
      break
    case "sp":
      enemyChoice.replaceWith('<div class="enemy-decision" id="enemy-choice"><img src="images/paper.png" alt="paper" ></div>')
      winnerIs.replaceWith('<div class="winner-is">PLAYER WINS!</div>')
      var combo = ""
      break
    case "sr":
      enemyChoice.replaceWith('<div class="enemy-decision" id="enemy-choice"><img src="images/rock.png" alt="rock" ></div>')
      winnerIs.replaceWith('<div class="winner-is">COMPUTER WINS!</div>')
      var combo = ""
      break
  }
})





})