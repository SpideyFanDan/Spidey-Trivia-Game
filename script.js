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
triviaGame.src = "media/trivia_game.jpg"
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
		"In Amazing Spider-Man comics, who has NOT ever been Peter Parker's official girlfriend?",
		'Carlie Cooper',
		'Mary Jane Watson',
		'Jessica Carradine',
		'Gwen Stacy',
		'C',
	],
	[
		'Which actor below does NOT portray Peter Parker, Spider-Man on film',
		'Tom Holland',
		'Stan Lee',
		'Toby Maguire',
		'Andrew Garfield',
		'B',
	],
	[
		"How does Ultimate Spider-Man's Peter Parker (2000) get his powers?",
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
		'In the comics, which is NOT a job held by Peter Parker',
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
		'How many extra arms did Peter Parker grow when he created a chemical cocktail to get rid of his powers in Amazing Spider-Man Vol. 1 issues 100-102?',
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
		'How many live-action Spider-Man films have been made by Sony(and Sony/Marvel partnership) since 2002?',
		'3',
		'5',
		'7',
		'9',
		'C',
	],
];

//function enterName() {
// on load article shows Spider-Man Quiz jpeg
// if name is submitted, then renderQuestion() begins
// position = 0
// correct = 0
//}
function trivia(obj) {
	return document.getElementById(obj);
}
function renderQuestion() {
	quiz = trivia('quiz');
	if (position >= questions.length) {
		trivia('message').innerText =
			'You got ' + correct + ' of ' + questions.length + ' questions correct';
		trivia('quiz_progress').innerHTML = 'You answered them all!';
		position = 0;
		correct = 0;
		// enterName();
		return false;
	}
	question = questions[position][0];
	choiceA = questions[position][1];
	choiceB = questions[position][2];
	choiceC = questions[position][3];
	choiceD = questions[position][4];
	quiz.innerHTML = "<p id='question'>" + question + '</p>';
	quiz.innerHTML +=
		"<label for='A'><input type='radio' name='choices' id='choiceA' value='A'> A) " +
		choiceA +
		'</label><br><br>';
	quiz.innerHTML +=
		"<label for='B'><input type='radio' name='choices' id='choiceB' value='B'> B) " +
		choiceB +
		'</label><br><br>';
	quiz.innerHTML +=
		"<label for='C'><input type='radio' name='choices' id='choiceC' value='C'> C) " +
		choiceC +
		'</label><br><br>';
	quiz.innerHTML +=
		"<label for='D'><input type='radio' name='choices' id='choiceD' value='D'> D) " +
		choiceD +
		'</label><br><br>';
	quiz.innerHTML +=
		"<button id='submit' onClick='checkAnswer()'>Submit Answer</button>";
	quiz.innerHTML +=
		"<p id='quiz_progress'>Question " +
		(position + 1) +
		' of ' +
		questions.length;
	('</p>');
}
function checkAnswer() {
	choices = document.getElementsByName('choices');
	for (let i = 0; i < choices.length; i++) {
		if (choices[i].checked) {
			choice = choices[i].value;
		}
	}
	if (choice == questions[position][5]) {
		correct++;
		trivia('points').innerText = correct + '/' + (position + 1);
		message.innerText = 'Well done, Dan!';
		websling.play();
	} else {
		message.innerText = 'You missed that last one!';
		nope.play();
	}
	position++;
	renderQuestion();
}
// window.addEventListener('click', enterName, false);
// window.addEventListener('load', renderQuestion, false);
