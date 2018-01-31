
Rad-Libs was my first quarter creation at Galvanize. It is a phrasal-template game which used several API’s to produce a random chunk of text. The text is then sent to the Google Natural Language API, but first is stripped of all punctuation, using split. The punctuation is removed because the natural language api breaks down contractions and analyzes punctuation as words, which was in conflict with my logic for removing words that met certain criteria. The API returns a buffer with several objects, one of which is the types of each word (Adj, Verb, Punct). The rejoined string is then spliced at three points only if the word is a noun, verb or adjective and is longer than 3 characters. The three removed words are sent back to the natural language api to ensure their word type. J-Query replaces the html with three text-fields the respective word types as placeholders for the user to enter their words. There is also a toggle function to show the surrounding text. On submit J-Query again replaces the html displaying the users with their version of the reassembled text as well as the original text.

*Major Downfalls*
- Punctuation flaw
-	Potential solution: Instead of using ids from arrays try setting equivalent  keys and values on an object.
- Word Types

*Original Technologies*
* JavaScript
* Materialize
* J-Query

*Redux Technologies*
* JavaScript
* Python
* Django
* Vue-JS
* PSQL

*For Conversion*
- Create Routes
- Store creations
- Create Voting
