import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getdatabase , ref , push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
const appSettings = {
    databaseURL: "https://add-to-cart-31821-default-rtdb.asia-southeast1.firebasedatabase.app/"
}
const app = initializeApp(appSettings)
const database= getdatabase(app)
const nameInDB = ref(database, "names")

const inputid = document.getElementById("input-field");
const addbtn = document.getElementById("add-button");

addbtn.addEventListener("click", function(){
    let inputvalue = inputid.value;
    push(nameInDB ,inputvalue)
    
    console.log(`${inputvalue} added to database`)
})