function scuberGreetingForFeet(distance){
  let greeting
  if (distance <= 400) {
      greeting = 'This one is on me!' 
  } else if (distance > 2000) {
      greeting = 'I will gladly take your thirty bucks.'
  } if (distance >= 2500) {
      greeting = 'No can do.'
  }
  return greeting  
}
  
  

function ternaryCheckCity(city){
  const message = city === 'NYC' ? "Ok, sounds good." : "No go."
  return message;
}


function switchOnCharmFromTip(){
 
}