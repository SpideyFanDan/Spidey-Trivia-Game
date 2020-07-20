var position = 0;
var quiz;
var question;
var choices;
var choiceA;
var choiceB;
var choiceC;
var choiceD;
var correctAnswer;
var correct = 0;
var playerName;
var websling = new Audio();
websling.src = 'media/websling.mp3';
var nope = new Audio();
var triviaGame = new Image();
triviaGame.src = 'media/trivia_game.jpg';
nope.src = 'media/nope.mp3';
var questions = [
	['What year was Spider-Man created?', '1962', '1975', '1931', '2000', 'A'],
	[
		'Spider-Man was NOT an alter ego of which person below?',
		'Peter Parker',
		'Miles Morales',
		"Miguel O'Hara",
		'J. Jonah Jameson',
		'D',
	],
	[
		'Where is Peter Parker from?',
		'Bed Stuy, Brooklyn',
		'Flushing, Queens',
		'East Village, Manhattan',
		'Hoboken, NJ',
		'B',
	],
	[
		"In <em>The Amazing Spider-Man</em> comics, who has NOT ever been Peter Parker's official girlfriend?",
		'Carlie Cooper',
		'Mary Jane Watson',
		'Jessica Carradine',
		'Gwen Stacy',
		'C',
	],
	[
		'Which actor below does NOT portray Peter Parker/Spider-Man on film?',
		'Tom Holland',
		'Stan Lee',
		'Toby Maguire',
		'Andrew Garfield',
		'B',
	],
	[
		"How does <em>Ultimate Spider-Man</em>'s Peter Parker (2000) get his powers?",
		'He was bit by a genetically altered spider',
		'He was bit by a radioactive spider',
		'He was bit by a sentient spider from outer space',
		'He was bit by a mutant ninja spider',
		'A',
	],
	[
		"What is Peter Parker's clone's name?",
		'Ben Reilly',
		"Miguel O'Hara",
		'Peter Parker',
		'Cindy Moon',
		'A',
	],
	[
		"What is Peter Parker's clone's alias (superhero name)?",
		'Spider-Man too',
		'Clone Spider',
		'Spider-bot',
		'Scarlet Spider',
		'D',
	],
	[
		'In the comics, which is NOT a job held by Peter Parker?',
		'Photographer for the Daily Bugle',
		'CEO and Owner of Parker Industries',
		'Arachnologist trainer for spiders on film',
		'Science Editor for the Daily Bugle',
		'C',
	],
	[
		'Which Spider-Man enemy possessed his body and pretended to be him for more than 30 issues in the comics?',
		'Green Goblin',
		'Doctor Octopus',
		'The Jackal',
		'The Rhino',
		'B',
	],
	[
		'How many extra arms did Peter Parker grow when he created a chemical cocktail to get rid of his powers in <em>The Amazing Spider-Man</em>, Vol. 1 issues 100-102?',
		'2',
		'4',
		'6',
		'8',
		'B',
	],
	[
		'When did Peter Parker and Mary Jane get married in the comics?',
		'1965',
		'1978',
		'2004',
		'1987',
		'D',
	],
	[
		"Who annulled Peter Parker and Mary Jane's marriage in the comics in order to save Aunt May's life?",
		'Norman Osborn',
		'The Preacher',
		'Mephisto',
		'Mayor J. Jonah Jameson',
		'C',
	],
	[
		"Which Spider-Man villain was his Aunt May's supervisor at the organization she volunteered at?",
		'Mister Negative',
		'Green Goblin',
		'Electro',
		'The Tinkerer',
		'A',
	],
	[
		'How many live-action Spider-Man films have been made by Sony (and the Sony/Marvel partnership) since 2002?',
		'3',
		'5',
		'7',
		'9',
		'C',
	],
];

var easyQuestions = [
	['What year was Spider-Man created?', '1962', '1975', '1931', '2000', 'A'],
	[
		'Spider-Man is the alter ego of whom?',
		'Jennifer Walters',
		'Otto Octavius',
		'Steve Rogers',
		'Peter Parker',
		'D',
	],
	[
		"Who is one of Peter Parker's legal guardians since his parents died?",
		'Cousin Ned Leeds',
		'Uncle John Jameson',
		'Aunt May Parker',
		'Mr. Ben Reilly',
		'C',
	],
	[
		"In <em>The Amazing Spider-Man</em> comics, who is Peter Parker's most famous girlfriend (who is still alive)?",
		'Felicia Hardy',
		'Mary Jane Watson',
		'Jessica Carradine',
		'Sue Storm',
		'B',
	],
	[
		"Which actor below portrays Peter Parker, Spider-Man in Sam Raimi's film trilogy from 2002, 2004, & 2007?",
		'Tom Holland',
		'Stan Lee',
		'Toby Maguire',
		'Andrew Garfield',
		'C',
	],
	[
		'How does the original Peter Parker get his amazing spider-like powers?',
		'He was bit by a genetically altered tarantula',
		'He was bit by a radioactive spider',
		'He was bit by a sentient spider from outer space',
		'He was bit by a mutant ninja spider',
		'B',
	],
	[
		"What is the name of Peter Parker's uncle who was killed by a burglar invading his home?",
		'Ben Parker',
		'Mark Parker',
		'Harry Parker',
		'John Parker',
		'A',
	],
	[
		"What part of Peter Parker's costume did he invent himself?",
		'his laser eyes',
		'his booster boots',
		'his spider sense',
		'his web-shooters',
		'D',
	],
	[
		"In the comics, where was Peter Parker's first job with J. Jonah Jameson",
		'The Daily Bugle',
		'Horizon Labs',
		'The circus',
		'The WWE',
		'A',
	],
	[
		'Which Spider-Man enemy is made entirely of sand?',
		'The Evil Beach',
		'The Sandman',
		'The Hobgoblin',
		'The Green Goblin',
		'B',
	],
	[
		"Who killed Peter Parker's first major girlfriend, Gwen Stacy, in <em>The Amazing Spider-Man</em> issue #121?",
		'The Rhino',
		'The Green Goblin',
		'The Jackal',
		'Mysterio',
		'B',
	],
	[
		'Which herpetologist turned villain did Spider-Man help to return to his human state in <em>The Amazing Spider-Man</em> issue #6?',
		'Slapstick',
		'Chameleon',
		'The Lizard',
		'The Green Goblin',
		'C',
	],
];
function trivia(obj) {
	return document.getElementById(obj);
}
function startGame() {
	location.reload();
}
const submitHard = document.querySelector('#hard-button');
const submitEasy = document.querySelector('#easy-button');
submitEasy.addEventListener('click', handleEasyTrivia);
submitHard.addEventListener('click', handleHardTrivia);

function handleHardTrivia(event) {
	event.preventDefault();
	playerName = document.querySelector('.start-trivia-input').value;
	const nameSubmission = document.querySelector('#player-name');
	nameSubmission.innerText = playerName;
	if (playerName == 0) {
		nameSubmission.innerText = 'Anonymous';
		playerName = 'Anonymous';
	}
	document.querySelector('.start-trivia-input').value = '';
	document.querySelector('form').style.display = 'none';
	renderHardQuestion();
}
function handleEasyTrivia(event) {
	event.preventDefault();
	playerName = document.querySelector('.start-trivia-input').value;
	const nameSubmission = document.querySelector('#player-name');
	nameSubmission.innerText = playerName;
	document.querySelector('.start-trivia-input').value = '';
	document.querySelector('form').style.display = 'none';
	renderEasyQuestion();
}

function renderHardQuestion() {
	quiz = trivia('quiz');
	if (position >= questions.length) {
		quiz.innerHTML =
			'Congratulations, ' +
			playerName +
			', you got ' +
			correct +
			' of ' +
			questions.length +
			' questions correct!';
		document.getElementById('quiz').style.backgroundImage +=
			"url('media/spidey-background.jpg')";
		quiz.innerHTML +=
			"<button id='submit' onClick='startGame()'>Start Over</button>";
		trivia('message').innerText =
			playerName +
			', you answered them all! If you would like to try the trivia game again or try the other trivia questions, just click on the Start Over button above.';
	}
	question = questions[position][0];
	choiceA = questions[position][1];
	choiceB = questions[position][2];
	choiceC = questions[position][3];
	choiceD = questions[position][4];
	quiz.innerHTML = "<p id='question'>" + question + '</p>';
	quiz.innerHTML +=
		"<label for='A'><input type='radio' name='choices' class='answer_choices' id='choiceA' value='A'> A) " +
		choiceA +
		'</label><br><br>';
	quiz.innerHTML +=
		"<label for='B'><input type='radio' name='choices' class='answer_choices' id='choiceB' value='B'> B) " +
		choiceB +
		'</label><br><br>';
	quiz.innerHTML +=
		"<label for='C'><input type='radio' name='choices' class='answer_choices' id='choiceC' value='C'> C) " +
		choiceC +
		'</label><br><br>';
	quiz.innerHTML +=
		"<label for='D'><input type='radio' name='choices' class='answer_choices' id='choiceD' value='D'> D) " +
		choiceD +
		'</label><br><br>';
	quiz.innerHTML +=
		"<button id='submit' onClick='checkHardAnswer()'>Submit Answer</button>";
	quiz.innerHTML +=
		"<p id='quiz_progress'>Question " +
		(position + 1) +
		' of ' +
		questions.length;
	('</p>');
}

function renderEasyQuestion() {
	quiz = trivia('quiz');
	if (position >= easyQuestions.length) {
		quiz.innerHTML =
			'Congratulations, ' +
			playerName +
			', you got ' +
			correct +
			' of ' +
			easyQuestions.length +
			' questions correct!';
		document.getElementById('quiz-background').style.backgroundImage +=
			"url('media/spidey-background.jpg')";
		quiz.innerHTML +=
			"<button id='submit' onClick='startGame()'>Start Over</button>";
		trivia('message').innerText =
			playerName +
			', you answered them all! If you would like to try the trivia game again or try the other trivia questions, just click on the Start Over button above.';
	}
	question = easyQuestions[position][0];
	choiceA = easyQuestions[position][1];
	choiceB = easyQuestions[position][2];
	choiceC = easyQuestions[position][3];
	choiceD = easyQuestions[position][4];
	quiz.innerHTML = "<p id='question'>" + question + '</p>';
	quiz.innerHTML +=
		"<label for='A'><input type='radio' name='choices' class='answer_choices' id='choiceA' value='A'> A) " +
		choiceA +
		'</label><br><br>';
	quiz.innerHTML +=
		"<label for='B'><input type='radio' name='choices' class='answer_choices' id='choiceB' value='B'> B) " +
		choiceB +
		'</label><br><br>';
	quiz.innerHTML +=
		"<label for='C'><input type='radio' name='choices' class='answer_choices' id='choiceC' value='C'> C) " +
		choiceC +
		'</label><br><br>';
	quiz.innerHTML +=
		"<label for='D'><input type='radio' name='choices' class='answer_choices' id='choiceD' value='D'> D) " +
		choiceD +
		'</label><br><br>';
	quiz.innerHTML +=
		"<button id='submit' onClick='checkEasyAnswer()'>Submit Answer</button>";
	quiz.innerHTML +=
		"<p id='quiz_progress'>Question " +
		(position + 1) +
		' of ' +
		easyQuestions.length;
	('</p>');
}

function checkHardAnswer() {
	choices = document.getElementsByName('choices');
	for (let i = 0; i < choices.length; i++) {
		if (choices[i].checked) {
			choice = choices[i].value;
		}
	}
	if (choice == questions[position][5]) {
		correct++;
		trivia('points').innerText = correct + '/' + questions.length;
		message.innerText = 'Well done, ' + playerName + '!';
		websling.play();
	} else {
		message.innerText =
			'Sorry, ' + playerName + ', but you missed that last one!';
		nope.play();
	}
	position++;
	renderHardQuestion();
}
function checkEasyAnswer() {
	choices = document.getElementsByName('choices');
	for (let i = 0; i < choices.length; i++) {
		if (choices[i].checked) {
			choice = choices[i].value;
		}
	}
	if (choice == easyQuestions[position][5]) {
		correct++;
		trivia('points').innerText = correct + '/' + easyQuestions.length;
		message.innerText = 'Well done, ' + playerName + '!';
		websling.play();
	} else {
		message.innerText =
			'Sorry, ' + playerName + ', but you missed that last one!';
		nope.play();
	}
	position++;
	renderEasyQuestion();
}
