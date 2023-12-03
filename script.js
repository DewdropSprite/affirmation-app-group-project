onReady();

function onReady() {
  console.log('Javascript is working!');
}

function makeIce() {
  console.log("we're makin' ice baby!!!");
  const ice = document.getElementById("ice");
  emoji.innerHTML += '<span>❄️</span>'
}

function makeFire() {
  console.log("we're burnin up baby!!!");
  const fire = document.getElementById("fire");
  emoji.innerHTML += '<span>🔥</span>'
}


function dominate(event) {
  
  console.log("We're totes positives");
  
  const submitAff = document.getElementById("affirmationInput");
console.log("submitAff", submitAff)
   const submitAuth = document.getElementById("authorInput");
  console.log("submitAuth", submitAuth)


  const submitAffValue = affirmationInput.value;
  console.log("submitAffValue", submitAffValue)
  const submitAuthValue = authorInput.value;
  console.log("submitAuthValue", submitAuthValue)

  const affTable = document.querySelector("#tableData tbody");
 // const authTable= document.getElementById("author")
 // const output = document.querySelector("#tableData tbody");
  affTable.innerHTML += "<tr><td>" + affirmationInput.value + "</td><td>" + authorInput.value + "</td></tr>"
  event.preventDefault();

}

function removeBrain(event) {
  event.target.removal()

  const affTable=document.getElementById("")
}