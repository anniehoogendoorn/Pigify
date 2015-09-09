var pigify = function(word) {

  var vowels = ["a", "e", "i", "o", "u"];

  for (var i=0; i < word.length; i++) {
    if ((vowels.indexOf(word[i])) != -1) {

      if ((word[i] === "u") && (word[i-1] === "q")) {
        var slice_point = i+1;
      } else {
        var slice_point = i;
      }

      var first_letters = word.slice(0, slice_point);
      var remainder = word.slice(slice_point, word.length);
      var piggy = remainder + first_letters + 'ay';

      return piggy;
    }
  }
};
