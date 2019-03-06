var playerScore = 0;
var computerScore = 0;

$(document).ready( function() {
  
function updateCompScore() {
    var compScore = $('#comp-score')
    computerScore++
    console.log(computerScore + "com")
    compScore.text(computerScore)
}

function updatePlayerScore() {
    var playScore = $('#player-score')
    playerScore++
    console.log(playerScore + "p")
    playScore.text(playerScore)

       
}

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
        updatePlayerScore()
        break
      case "rp":
        enemyChoice.replaceWith('<div class="enemy-decision" id="enemy-choice"><img src="images/paper.png" alt="paper" ></div>')
        winnerIs.replaceWith('<div class="winner-is">COMPUTER WINS!</div>')
        var combo = ""
        updateCompScore()
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
      updatePlayerScore()
      break
    case "ps":
      enemyChoice.replaceWith('<div class="enemy-decision" id="enemy-choice"><img src="images/scissors.png" alt="scissors" ></div>')
      winnerIs.replaceWith('<div class="winner-is">COMPUTER WINS!</div>')
      var combo = ""
      updateCompScore(0)
      break
  }
})

$('#new-btn').on('click', function() {
    var compScore = $('#comp-score')
    var playScore = $('#player-score')
    playerScore = 0;
    computerScore = 0;
    compScore.text(computerScore)
    playScore.text(playerScore)
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
      updatePlayerScore()
      break
    case "sr":
      enemyChoice.replaceWith('<div class="enemy-decision" id="enemy-choice"><img src="images/rock.png" alt="rock" ></div>')
      winnerIs.replaceWith('<div class="winner-is">COMPUTER WINS!</div>')
      var combo = ""
      updateCompScore()
      break
  }
})





})