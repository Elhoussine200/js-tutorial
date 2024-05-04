// ask the user for the first value
console.clear()
let noteNational = prompt("ch7al jebti f lwatani ")
let noteRegional = prompt("ch7al jebti f Regional")
let anneeScolaire = prompt("ch7al jebti f mora9aba")
let total = Number(noteNational)*2+ Number(noteRegional)+ Number(anneeScolaire)
total = total/4
if (total>=10){
    console.log ("Mabroooook jebty",total)
}

else if (total<10 && total>7 ){
    console.log (" 3ndk ratrappage jbti ",total,"zgueltih",10-total)
}

else {
  console.log ("7lawet lbac 3years",total)
  
}


 
