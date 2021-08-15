module.exports = function toReadable(number) {
   let one = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
   let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
   let hundreds = ['','one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];

   let sotni = Math.floor(number/100);
   let desatki = Math.floor((number / 10) % 10);
   let edinici = Math.floor(number % 10);

   if (number <= 19) {
      return(one[number]);
   } else if (number >= 20 && number < 100) {
      return(`${tens[desatki]}-${one[edinici]}`)
   } else if (number >= 100 && number <= 999) {
      if (desatki === 0) {
         return(`${hundreds[sotni]} ${one[edinici]}`);
      } else if (desatki !== 0 && edinici !== 0) {
         return(`${hundreds[sotni]} ${tens[desatki]} ${one[edinici]}`);
      } else if (edinici === 0) {
         return(`${hundreds[sotni]} ${tens[desatki]}`);
       }
   }
}



