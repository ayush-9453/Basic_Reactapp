const prompt = require("prompt-sync")();

const Rows = 3;
const Cols =3;

const SYMBOLS_COUNT ={
     "A":2,
     "B":4,
     "C":6,
     "D":8,
}
const SYMBOL_VALUES ={
     "A":5,
     "B":4,
     "C":3,
     "D":2
}

const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a deposit amount : ");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("invalid deposit amount, try again.");
    } else {
      return numberDepositAmount;
    }
  }
};

const getNumberOflines = () => {
  while (true) {
    const lines = prompt("Enter the amount you want to bet on (1-3) : ");
    const numberOfLines = parseFloat(lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Invalid number of lines, try again.");
    } else {
      return numberOfLines;
    }
  }
};

const getBet = (balance, lines) => {
  while (true) {
    const bet = prompt("Enter the total bet amount  : ");
    const numberbet = parseFloat(bet);

    if (isNaN(numberbet) || numberbet <= 0||numberbet > balance/ lines) {
      console.log("Invalid Bet, try again.");
    } else {
      return numberbet;
    }
  }
};

const spin=()=>{
    const symbols = [ ];
    for(const [symbol, count] of Object.entries(SYMBOLS_COUNT)){
        for(let i =0 ; i< count ; i++){
            symbols.push(symbol);
        }
    } 
    const reels = [[],[],[]];
    for(let i = 0 ; i<Cols; i++){
        const reelSymbols= [...symbols];
        for(let j=0 ; j< Rows; j++){
            const randomIndex = Math.floor(Math.random()*reelSymbols.length);
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol)
            reelSymbols.splice(randomIndex,1);
        }
    }
    return reels;
}
const reels = spin();
console.log(reels);
const balance = deposit();
const numberOfLines = getNumberOflines();
const numberbet = getBet(balance, numberOfLines);
