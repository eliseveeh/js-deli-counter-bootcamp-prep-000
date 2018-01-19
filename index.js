var katzDeli = [];  

function takeANumber(katzDeliLine, newName){
  katzDeliLine.push(newName);
  return katzDeliLine.length;
}
    
function nowServing(katzDeliLine){
     
  return katzDeliLine.shift();
}