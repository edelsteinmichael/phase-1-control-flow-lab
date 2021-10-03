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
  let message = (city === 'NYC' ? 'Ok, sounds good.' : 'No go.')
  return message;
}


function switchOnCharmFromTip(tipType){
  let response

  switch (tipType) {
    case generous:
      response = 'Thank you so much.'
      break;
    case 'not as generous':
      response = 'Thank you.'
      break;
    default:
      console.log('Bye');
      break;
  }

}