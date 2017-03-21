var cpu;
var body = document.getElementsByTagName("body")[0];
var score = 0;
var effectiveCpuModelNumber;
var curCpuCache;
var curCpuClockSpeed;
var curCpuModelNumber;
var nextCPUCache = curCpuCache * 2;
var nextCPUClock = curCpuClockSpeed + .25;
var nextCPUModel = curCpuModelNumber + 100;
var cpusPerSecond = curCpuClockSpeed;
var curCPU;

//CPU Price Algorithim
// Cache * ClockSpeed + Modelnumber
var CPUPrice = "Buy CPU! Price: " + (curCPU.Cache * curCPU.ClockSpeed) + curCPU.ModelNumber; 
var CPUPriceNonString = (curCPU.Cache * curCPU.ClockSpeed) + curCPU.ModelNumber;
var CantBuyError = "You can't buy this yet!";



// Score algorithim 
// Score = (Cache)(ClockSpeed)(EffectiveCpuModelNumber)
var StarerCPU = function(){
  var SCPU = new CPUConstructor(16, 2.5, 3300);
  curCPU = SCPU;
  curCpuCache = StarterCPU.Cache;
  curCpuClockSpeed = StarterCPU.ClockSpeed;
  curCpuModelNumber = StarterCPU.ModelNumber;
};

effectiveCpuModelNumber = curCPU.ModelNumber / 10000;

var ShowStarterCPU = document.createElement("IMG");
ShowStarterCPU.src = ('js/assets/cpu.png');
body.appendChild(ShowStarterCPU);
ShowStarterCPU.onclick = function(){
  score = score + (StarterCPU.Cache * StarterCPU.ClockSpeed * StarterCPU.ModelNumber) / 100000;
  if (score > 0){
    console.log("score increased!");
  } else {
    console.log("there's something wro;ng here.");
  }
};

setInterval(function(){
  var WriteScore = document.getElementById("ScoreHolder");
  WriteScore.innerHTML = score;
  body.appendChild(WriteScore);
}, 1000);

// Trying to buy a new CPU..

var BuyCPU = document.createElement("button");
BuyCPU.innerHTML = CPUPrice;
BuyCPU.onclick = function(){
  if(score > CPUPrceNonString){
  var ACPU = new CPUConstructor(nextCPUCache, nextCPUClock, nextCPUModel);
  curCPU = ACPU;
  score = score - CPUPrice;
  console.log("CPU effectively bought!");
  }
  else{
    alert(CantBuyError);
  }
};


// Write the cpu/s function
setInterval(function(){
  score = score + cpusPerSecond;
}, 1000);



// Write the score
setInterval(function(){
  var WriteScore = document.getElementById("ScoreHolder");
  WriteScore.innerHTML = score;
  body.appendChild(WriteScore);
}, 1000);









