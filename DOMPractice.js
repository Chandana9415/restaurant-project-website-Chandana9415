/* Global variables just for easy practice */


// An array of objects containing questions and answers
questions = [
  {
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language."
  },
  {
    question: "Give the selector and rule to color all paragraph text blue.",
    answer: "p {color: blue;}"
  },
  {
    question:
      "How are heading elements similar and different from the header element?",
    answer:
      "the header element is a container and can contain multiple elements. In addition it is good and commont practice to include a heading element within a header element."
  },
  {
    question:
      "When would you want to use an article element and when would this generally not be necessary?",
    answer: "To be written..."
  }
];

// Initial question to display
qIndex = 0;

// Set up variables to hold element references

// Example of variables and initialization
qCountSpan = document.getElementById("qCount");
qIndexSpan = document.getElementById("qIndex");
// Initialize content
qCountSpan.innerHTML = questions.length;
qIndexSpan.innerHTML = qIndex + 1;

//create paragraph elements
create();
// add to corresponding elements to content divs
append();
display();
// initialize buttons
initButtons();
/* Functions defined below here */
function create()
{
myPara1=document.createElement("p"); 
myPara2=document.createElement("p");	
myPara3=document.createElement("p");	
}
function append()
{
qContentDiv1=document.getElementById("contentQ");
qContentDiv1.appendChild(myPara1);
qContentDiv2=document.getElementById("contentA");
qContentDiv2.appendChild(myPara2);

}
function display()
{

myPara1.innerHTML=questions[qIndex].question;
myPara2.innerHTML=questions[qIndex].answer;
}


/* Attach buttons to their handler functions here. Button id:
 BForward BBack BShow BShowQC BRemove BHideA BAddQ BHideQC */
function initButtons() {
	qContentDiv3=document.getElementById("BForward").addEventListener("click",forward);
	qContentDiv4=document.getElementById("BBack").addEventListener("click",back);
	qContentDiv5=document.getElementById("BRemove").addEventListener("click",remove);
	qContentDiv6=document.getElementById("BShow").addEventListener("click",show);
	qContentDiv7=document.getElementById("BShowQC").addEventListener("click",showQc);
	qContentDiv8=document.getElementById("BAddQ").addEventListener("click",addQ);
	qContentDiv9=document.getElementById("BHideQC").addEventListener("click",hideQc);
	qContentDiv10=document.getElementById("BHideA").addEventListener("click",hide);
  // Show and hide creator
  // Show and hide answer
  // Forward and back Questions
  // Remove question
  // Add question
}

function forward()
{
qIndex++;	
myPara1.innerHTML=questions[qIndex].question;
myPara2.innerHTML=questions[qIndex].answer;
qIndexSpan.innerHTML=qIndex+1;
if(qIndexSpan.innerHTML==qCountSpan.innerHTML)

	alert("End of questions!");

}
function back()
{
qIndex--;	
myPara1.innerHTML=questions[qIndex].question;
myPara2.innerHTML=questions[qIndex].answer;
qIndexSpan.innerHTML=qIndex+1;
if(qIndex==0)
	alert("End of questions!");
}

function remove()
{
	if(qIndexSpan.innerHTML<questions.length)
	{
	var deleteQ=questions.splice(qIndex,1);
	myPara1.innerHTML=questions[qIndex].question;
	myPara2.innerHTML=questions[qIndex].answer;
	qCountSpan.innerHTML=questions.length;
	}
	else 
	{
		
		var deleteQ=questions.splice(qIndex,1);
		qIndex--;
		myPara1.innerHTML=questions[qIndex].question;
		myPara2.innerHTML=questions[qIndex].answer;
		qIndex=questions.length-1;
		qIndexSpan.innerHTML=questions.length;
		qCountSpan.innerHTML=questions.length;
		if(qCountSpan.innerHTML==1)
			alert("End of questions!");
	
	
	}
		
}

function show()
{
	document.getElementById("contentA").classList.toggle("showQA");
}

function hide()
{
	document.getElementById("contentA").classList.toggle("hideQA");

}
function showQc()
{
	document.getElementById("QCreator").classList.toggle("showStuff");
}

function hideQc()
{
	document.getElementById("QCreator").classList.toggle("hideStuff");
}

		
/* You may want to define functions like the following to attach to buttons */

/* Takes the content from the text areas and adds
 to the question list */
function addQ() {

  // You provide the functionality.
  var quest=document.getElementById("Question").value;
  var ans=document.getElementById("Answer").value;
  
  	qIndexSpan.innerHTML=questions.length+1;
  questions.push({
	  question: quest,
	  answer: ans
  });

  myPara1.innerHTML=quest;
  myPara2.innerHTML=ans;

qCountSpan.innerHTML=questions.length;
  
  
} 