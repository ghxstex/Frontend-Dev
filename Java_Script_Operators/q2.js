var product = " wireless headphones PRO ";
product = product.trim();
product = product.toLowerCase();

var words = product.split(" ");
var formattedWords = words.map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
});
var cleanedTitle = formattedWords.join(" ");
cleanedTitle = cleanedTitle.replace("Pro", "Pro Edition");
console.log("Cleaned Title:", cleanedTitle);
console.log("Length:", cleanedTitle.length);
