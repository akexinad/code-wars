String.prototype.toJadenCase = function() {

    const arg = this.valueOf(this);

    let capitalized = null;
    let result = '';

    arg.split(' ').forEach( word => {
        capitalized = word[0].toUpperCase() + word.slice(1, Infinity);
        result += capitalized + ' ';
    });

    return result.trim();
}

const str = 'ciao mondo';
str.toJadenCase();


// BEST SOLUTION

String.prototype.toJadenCase = function () { 
    return this.split(" ").map(function(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  }