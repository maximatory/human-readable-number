module.exports = function toReadable(number) {
   number = number.toString()
   let one = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
   let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
   let hundreds = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];

   if (number.length == 1 || number>9&&number<20) {
      return one[number];
    } else if (number>20&&number<=99&&number[1]!=0){
      return tens[number[0]]+" "+one[number[1]];
    } else if (number>=20 && number<= 99 && number[1] == 0) {
      return tens[number[0]]
    } else if (number.length == 3 && Number(number[1]) + Number(number[2])==0) {
      return hundreds[number[0]]
    } else if (number > 100 && (number[1] + number[2] > 9 && number[1] + number[2]<20)) {
      return hundreds[number[0]] + " " + one[number[1] + number[2]]
    } else if (number > 100 && (number - 100 * number[0]) <20) {
      return hundreds[number[0]] + " " + one[number - 100 * number[0]]
    } else if (number > 100 && number[2]!=0){
      return hundreds[number[0]] + " " + tens[number[1]] + " " + one[number[2]];
    } else {
      return hundreds[number[0]] + " " + tens[number[1]]
    }
}




