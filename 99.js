const  generateSingleStanza = (number)  => {
    let string = ``
    let theEnd = `\n ${number} Пиво кончалось!`
    let bottlekov1 = `\n ${number} бутылок пива на стене\n ${number} бутылок пива\n ${number} Возьми одну, пусти по кругу\n ${number -1} бутылки пива на стене!`
    let bottleka = `\n ${number} бутылка пива на стене\n ${number} бутылка пива\n ${number} Возьми одну, пусти по кругу\n ${number -1} бутылок пива на стене!`
     let  bottleI2 = `\n ${number} бутылки пива на стене\n ${number} бутылки пива\n ${number} Возьми одну, пусти по кругу\n ${number -1} бутылка пива на стене!`
    let bottleI = `\n ${number} бутылки пива на стене\n ${number} бутылки пива\n ${number} Возьми одну, пусти по кругу\n ${number -1} бутылки пива на стене!`
    let bottleKov = `\n ${number} бутылок пива на стене\n ${number} бутылок пива\n ${number} Возьми одну, пусти по кругу\n ${number -1} бутылок пива на стене!`
    

  if (number === 11 || number === 12 || number === 13 || number ===14 || number === 15) {
    console.log(string +=  bottleKov)
} else if ( number % 10 === 3 || number % 10 === 4  ) {
console.log( string += bottleI)

} else  if (number % 10 === 2){
console.log(string += bottleI2)

} else  if (number % 10 === 1) {
   console.log( string += bottleka) 
   

   } else if (number === 0) {
    console.log(string += theEnd) 



  } else if (number % 10 === 5) {

console.log(string += bottlekov1)
  } else {
    console.log( string += bottleKov)
  }
    

return string

}

const generateSongText = () => {
    for (let i = 99; i >= 0; i--) {
     generateSingleStanza(i)
    }
return 
}



generateSongText()
