var pigify = function(string) {

    for (var i=0; i < string.length; i++) {
        if ((string[i] === 'a') ||
            (string[i] === 'e') ||
            (string[i] === 'i') ||
            (string[i] === 'o') ||
            (string[i] === 'u')) {
                if(string[i-1] === 'q') {
                    var slice_point = i+1;
                } else {
                    var slice_point = i;
                }
                var first_letters = string.slice(0, slice_point);
                var remainder = string.slice(slice_point, string.length);
                var piggy = remainder + first_letters + 'ay';
                return piggy;
        }

    }
};


//move all letters up to first vowel to end of word, add 'ay'

//if first vowel is a u, check for a q before it and move the pair




$(document).ready(function() {

});
