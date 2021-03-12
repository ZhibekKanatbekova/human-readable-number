module.exports = function toReadable (num) {
     var ones = new Array(
         "",
         "one",
         "two",
         "three",
         "four",
         "five",
         "six",
         "seven",
         "eight",
         "nine",
         "ten",
         "eleven",
         "twelve",
         "thirteen",
         "fourteen",
         "fifteen",
         "sixteen",
         "seventeen",
         "eighteen",
         "nineteen"
     );
     var tens = new Array(
         "",
         "",
         "twenty",
         "thirty",
         "forty",
         "fifty",
         "sixty",
         "seventy",
         "eighty",
         "ninety"
     );
     var hundred = " hundred";
     var output = "";
     var numString = num.toString();

     if (num == 0) {
         return "zero";
     }
     //the case of 10, 11, 12 ,13, .... 19
     if (num < 20) {
         output = ones[num];
         return output;
     }

     //100 and more
     if (numString.length == 3) {
         if (numString.charAt(1) == 1) {
             output = ones[parseInt(numString.charAt(0))] + hundred;
             let x = numString.charAt(1) + numString.charAt(2);
             output +=" "+ ones[x];
              if (output.charAt(output.length - 1) == " ") {
                  return output.slice(0, -1);
              } else {
                  return output;
              }
               } else if(numString.charAt(1) == 0) {
                  output = ones[parseInt(numString.charAt(0))] + hundred;
                   output += " " + ones[numString.charAt(2)];
                   if (output.charAt(output.length - 1) == " ") {
                       return output.slice(0, -1);
                   } else {
                       return output;
                   }
               }
                else if(numString.charAt(1) == 0 && numString.charAt(2) == 0) {
                   output = ones[parseInt(numString.charAt(0))] + hundred;
                   if (output.charAt(output.length - 1) == " ") {
                 return output.slice(0, -1);
             } else {
                 return output;
             }
                }

               else {
             output = ones[parseInt(numString.charAt(0))] + hundred;
             output += " " + tens[parseInt(numString.charAt(1))];
             output += " " + ones[parseInt(numString.charAt(2))];
             if (output.charAt(output.length - 1) == " ") {
                 return output.slice(0, -1);
             } else {
                 return output;
             }
         }
     }

     output += tens[parseInt(numString.charAt(0))];
     output += " " + ones[parseInt(numString.charAt(1))];
     if (output.charAt(output.length - 1) == " ") {
         return output.slice(0, -1);
     } else {
         return output;
     }
}
