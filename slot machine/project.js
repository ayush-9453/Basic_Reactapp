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
    const lines = prompt("Enter the lines you want to bet on (1-3) : ");
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
    const bet = prompt("Enter the total bet amount per lines : ");
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
const transpose = (reels)=>{
  const rows =[];
  for (let i=0 ; i<Rows; i++){
    rows.push([]);
    for(let j=0 ; j< Cols; j++){
      rows[i].push(reels[j][i])
    }
  }
  return rows;
}
const printRows = (rows) =>{
  for(const row of rows){
    let rowString = " ";
    for(const [ i, symbol] of row.entries()){
      rowString += symbol
      if (i != row.length -1){
        rowString += "|"
      }
    }
    console.log(rowString)
  }
}
const getwinnings =(rows, bet , lines)=>{
  let winnings = 0;
  for(let row =0; row<lines; row++){
    const symbols = rows[row];
    let allsame = true;
      for(const symbol of symbols){
        if (symbol!= symbols[0]){
          allsame = false;
          break;
        }
      }
      if (allsame){
        winnings +=bet *SYMBOL_VALUES[symbols[0]]
      }
  }
  return winnings;
}

const balance = deposit();
const numberOfLines = getNumberOflines();
const bet = getBet(balance, numberOfLines);
const reels = spin();
const rows = transpose(reels);
printRows(rows);
const winnings = getwinnings(rows, bet , numberOfLines)
console.log("You won,$" + winnings.toString());