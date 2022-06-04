const quizData = [
	{
		question: "How old is Florin",
		a: "10",
		b: "17",
		c: "26",
		d: "110",
		correct: "c",
	},
	{
		question: "What is the most used programming Language in 2019?",
		a: "Java",
		b: "C",
		c: "Python",
		d: "Javascript",
		correct: "a",
	},
	{
		question: "Who is the President of US?",
		a: "Florin Pop",
		b: "Donald Trump",
		c: "Ivan Andrei",
		d: "Mihai Andrei",
		correct: "b",
	},
	{
		question: "What does HTML stand for?",
		a: "Hypertext Markup Language",
		b: "Cascading Style Sheet",
		c: "Jason Object Notation",
		d: "Application Programming Interface",
		correct: "a",
	},
	{
		question: "What year was Javascript Launched",
		a: "2020",
		b: "2019",
		c: "1995",
		d: "none",
		correct: "c",
	},
];
const question = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
loadQuiz();

function loadQuiz() {
	const currentData = quizData[currentQuiz];
	question.innerHTML = currentData.question;
	a_text.innerHTML = currentData.a;
	b_text.innerHTML = currentData.b;
	c_text.innerHTML = currentData.c;
	d_text.innerHTML = currentData.d;
}

submitBtn.addEventListener("click", () => {
	currentQuiz++;

	if (currentQuiz < quizData.length) {
		loadQuiz();
	} else {
		alert("You Finished");
	}
});
