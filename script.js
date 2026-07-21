/* .js files add interaction to your website */

var factList = [
  "Women make up about 28% of the STEM workforce.",
  "Ada Lovelace is considered the world's first computer programmer.",
  "Grace Hopper helped develop one of the first computer compilers.",
  "Diverse teams often create more innovative technology.",
  "More women in tech leads to products that better serve everyone.",
  "Women continue to make groundbreaking contributions in AI, cybersecurity, engineering, and software development."
];

var fact = document.getElementById("factOutput");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn){
  factBtn.addEventListener("click", displayFact);
}

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}

var messageBtn = document.getElementById("messageBtn");

if(messageBtn){
  messageBtn.addEventListener("click", generateMessage);
}

function generateMessage(){
  var name = document.querySelector(".action input").value;
  var idea = document.querySelector(".action textarea").value;
  var output = document.getElementById("messageOutput");

  if(name === "" || idea === ""){
    output.innerHTML = "Please fill out all sections.";
  }
  else{
    output.innerHTML =
    name + " wants to support women in technology by " + idea;
  }
}

var pledgeBtn = document.getElementById("pledgeBtn");

if(pledgeBtn) {
  pledgeBtn.addEventListener("click", displayPledge);
}

function displayPledge() {
  var name = document.getElementById("name").value;
  var pledge = document.getElementById("pledge");

  if(name ==="") {
    pledge.innerHTML = "Please enter your name first!";
  } else{
    pledge.innerHTML = 
      "I, <strong>" + name +
      "</strong>, pledge to support women in technology by challenging stereotypes, encouraging girls to explore STEM, and helping create a future where everyone has an equal opportunity to succeed.";
  }
}
