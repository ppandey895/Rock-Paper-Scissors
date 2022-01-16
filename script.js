
let images = {'Rock': './images/rock.png', 'Paper': './images/paper.png', 'Scissor': './images/scissors.png'};
let userScore = 0;
let botScore = 0;

$(document).ready(function(){
	// console.log('Doc is ready');

	$('button.start').click( () => {
		$('.intro').fadeOut();
		setTimeout( () =>{
			$('.main-game').css('visibility', 'visible');
		}, 1000);
		
	})

	let gameLoop = () => {
		$('div.options button').click( (event) => {
			let userChoice = event.target.innerText;
			let randNum = Math.floor(Math.random() * 3);
			let count = 0;
			let botChoice;
			let textScoreUser = $('div.user h3 span')[0].childNodes[0];
			let textScoreBot = $('div.bot h3 span')[0].childNodes[0];
			let messageBox = $('div.main-game h2.message')[0].childNodes[0];

			for(i in images){
				if(count == randNum){
					botChoice = i;
				}
				count++;
			}
				
			let restartGame = () => {
				if(botScore == 5){
					alert('You lost to the Bot! Try again.');
					messageBox.data = "You lost to the Bot! Try again.";
				}
				else if(userScore == 5){
					alert('Woohoo! You won. Play again.');
					messageBox.data = 'Woohoo! You won. Play again.';
				}

				botScore = 0;
				userScore = 0;
				textScoreUser.data = 0;
				textScoreBot.data = 0;
			}

			// console.log(messageBox);
			// console.log(userChoice, botChoice);
			$('div.user img').addClass('shake-hand');
			$('div.bot img').addClass('shake-hand');
			$('button').attr('disabled', 'true');

			setTimeout( () => {
				$('div.user img').removeClass('shake-hand');
				$('div.bot img').removeClass('shake-hand');

				$('div.user img').attr('src', images[userChoice]);
				$('div.bot img').attr('src', images[botChoice]);

				$('button').removeAttr('disabled');

				if(userChoice == 'Rock'){
					if(botChoice == 'Rock'){
						messageBox.data = "Draw!";
					}
					else if(botChoice == 'Paper'){
						botScore++;
						textScoreBot.data = botScore;
						messageBox.data = "You lost!";
					}
					else if(botChoice == 'Scissor'){
						userScore++;
						textScoreUser.data = userScore;
						messageBox.data = "You won!";

					}
				}
				else if(userChoice == 'Paper'){
					if(botChoice == 'Rock'){
						userScore++;
						textScoreUser.data = userScore;
						messageBox.data = "You won!";

					}
					else if(botChoice == 'Paper'){
						messageBox.data = "Draw!";
					}
					else if(botChoice == 'Scissor'){
						botScore++;
						textScoreBot.data = botScore;
						messageBox.data = "You lost!";

					}
				}
				else if(userChoice == 'Scissor'){
					if(botChoice == 'Rock'){
						botScore++;
						textScoreBot.data = botScore;
						messageBox.data = "You lost!";
					}
					else if(botChoice == 'Paper'){
						userScore++;
						textScoreUser.data = userScore;
						messageBox.data = "You won!";
					}
					else if(botChoice == 'Scissor'){
						messageBox.data = "Draw!";
					}

					
				}	

				if(userScore == 5 || botScore == 5){
					restartGame();
				}

			}, 1500);

			
		})
	}

	gameLoop();
});

