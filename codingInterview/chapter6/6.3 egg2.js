let dropCount = 0;
let floor = 0
let floorCounter = 14;
let answer = 98;

for(var i = 0; floor !== answer; i++) {
    if(floor == 99){
    floor = 100;
    console.log(floor);
  }
  else if (floor > answer){
    floor--
    console.log(floor);
  } else {
   dropCount++;
  floor = floor + floorCounter;
  console.log(floor);
  floorCounter--;
  
  }
}
