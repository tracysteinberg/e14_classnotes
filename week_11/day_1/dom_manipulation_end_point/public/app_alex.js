var QUOTES_ARRAY = [
  { text: "Now is the summer of our discontent", author: "Shakespeare" },
  { text: "Go away!", author: "Matt Healy" },
  { text: "Classic Steve...", author: "Cohort 9" }
];

var createElement = function(params){
  var element = document.createElement(params.tag);
  if (params.className) element.classList.add(params.className);
  if (params.text) element.innerText = params.text;
  return element;
}

var addQuote = function(author, text){
  var quote = createElement({tag: 'article', className: 'quote'});
  var blockquote = createElement({tag: 'blockquote', text: text});
  var cite = createElement({tag: 'cite', text: author});
  blockquote.appendChild(cite);
  quote.appendChild(blockquote);
  var quotes = document.querySelector('#quotes');
  quotes.appendChild(quote);
}

var app = function(){
  for (var quote of QUOTES_ARRAY) {
    addQuote(quote.author, quote.text);
  }
}

window.onload = app;
