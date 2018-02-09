var toRoman= function(number) {
    var result = ''
    var arabicToRoman = [
         {arabic : 10 , roman: 'X'},
         {arabic : 9 , roman : 'IX'},
         {arabic : 5 , roman : 'V'},
         {arabic : 4 , roman : 'IV'},
         {arabic : 1 , roman : 'I'}
        ]
    for(var i = 0; i < arabicToRoman.length ; i++){
        var map = arabicToRoman[i]
        while ( number >= map.arabic ) {
            result = result + map.roman
            number = number - map.arabic
        }
    }
 return result   
}



module.exports = toRoman;

//  if (number === 1) {
//    return ('I');
