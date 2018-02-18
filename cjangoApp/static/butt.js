let theOriginalText = [];
// gets object from api the callback isolates the string from the object

let makeTheCall = function(whorl, isolateString) {
  let $xhr = $.getJSON(whorl);
  $xhr.done(function(data) {
    if ($xhr.status !== 200) {
      return;
    }
    isolateString(data);
  })
}
// analyzeSyntax takes in a string and splits out all the punctutation, sends the sentence to nlApi and its is called when the select from landing page is submitted
let analyzeSyntax = function(string) {
  console.log(string);
  let quote = string.split('.').join(' ').split('?').join(' ').split('!').join(' ').split('  ').join(' ');
  let wordType = [];
  let toSendToGoog = {
    "document": {
      "type": "PLAIN_TEXT",
      "content": quote,
    },
    "encodingType": "UTF8"
  }
  $.ajax({
    type: 'POST',
    url: "https://language.googleapis.com/v1/documents:analyzeSyntax?key=AIzaSyDmNY9yZNIBbwL3-RydEpw_MHZNnxfDWRI",
    data: JSON.stringify(toSendToGoog),
    contentType: 'application/json',
    dataType: "text",
  }).done(function(data) {
      if (data) {
        let JSONparsed = JSON.parse(data);
        let GoogleObjects = (Object.values(JSONparsed));
        let allWordTypes = GoogleObjects[1];
        allWordTypes.forEach(function(element) {
          wordType.push(element.partOfSpeech.tag);
        })
        wordRemover(string, wordType);

      } else {
        alert('ERROR');
      }
    }

  );
}
let analyzeChopped = function(array) {
  let wordTypes = [];
  array.forEach(function(element) {
    let werd = element.toString();
    let beamToGoog = {
      "document": {
        "type": "PLAIN_TEXT",
        "content": werd,
      },
      "encodingType": "UTF8"
    }
    $.ajax({
      type: 'POST',
      url: "https://language.googleapis.com/v1/documents:analyzeSyntax?key=AIzaSyDmNY9yZNIBbwL3-RydEpw_MHZNnxfDWRI",
      data: JSON.stringify(beamToGoog),
      contentType: 'application/json',
      dataType: "text",
    }).done(function(data) {
      if (data) {
        let getTheJson = JSON.parse(data);
        let objectified = Object.values(getTheJson);
        let typePush = objectified[1];
        typePush.forEach(function(element) {
          wordTypes.push(element.partOfSpeech.tag);
        })

        let notPunct = wordTypes.filter(function(word) {
          if (word !== "PUNCT") {
            return word;
          }
        });
        $('#blankA').attr("placeholder", notPunct[0]);
        $('#blankB').attr("placeholder", notPunct[1]);
        $('#blankC').attr("placeholder", notPunct[2]);
      }
    })
  });
  console.log(wordTypes);

}

//wordRemover
let wordRemover = function(string, array) {
  let sampleSplit = string.split(' ');
  chopped = [];
  numbersChosen = [];
  let flag = 0;
  for (let i = 0; chopped.length < 3; i++) {
    if (i == 20) {
      flag++
    }
    if (flag > 0) {
      alert("Uh-oh, looks like there weren't enough words in this text to pull out three words. Only fill in the blanks that have a word type!");
      break;
    }
    let randoNumber = Math.floor(Math.random() * sampleSplit.length);
    if ((array[randoNumber] === "NOUN" || array[randoNumber] === "ADJ" || array[randoNumber] === "VERB") && ((sampleSplit[randoNumber]).length) > 3) {
      if (sampleSplit[randoNumber] != "SPLITHERE") {
        chopped.push(sampleSplit.splice(randoNumber, 1, 'SPLITHERE'));
        numbersChosen.push(randoNumber);
      }
    }
  }

  function sortNumber(a, b) {
    return a - b;
  }
  numbersChosen.sort(sortNumber);
  numbersChosen.join(",");
  let rejoined = sampleSplit.join(' ');
  let splitatSplithere = rejoined.split('SPLITHERE');
  $("#chunkA").val(splitatSplithere[0]);
  $("#segmentA").html(splitatSplithere[0]);
  $("#segmentB").html(splitatSplithere[1]);
  $("#chunkB").val(splitatSplithere[1]);
  $("#segmentC").html(splitatSplithere[2]);
  $("#chunkC").val(splitatSplithere[2]);
  $("#segmentD").html(splitatSplithere[3]);
  $("#chunkD").val(splitatSplithere[3]);
  $("#originalQ").val(string);
  analyzeChopped(chopped);
}


//In landing page when submit button is triggered this function will take the selected api and make the call retrieving the text to be modified.

let submitFunc = function(info) {

  let selectOption = info;
  if (selectOption !== "Choose your text source") {
    if (selectOption === "Random") {
      let reName = ["Trump Quote", "Inspirational Quote", "Dad Joke", "Ron Swanson Quote"];
      let index = Math.floor(Math.random() * reName.length)
      selectOption = reName[index];
    }
    if (selectOption === "Trump Quote") {
      let trumpApi = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';
      makeTheCall(trumpApi, function(data) {
        let trump = Object.values(data);
        let trumpQuote = analyzeSyntax(trump[0]);
      });

    } else if (selectOption === "Inspirational Quote") {
      let inspirational = 'https://favqs.com/api/qotd';
      makeTheCall(inspirational, function(data) {
        let inspiration = Object.values(data);
        let actualQuote = inspiration[1];
        console.log(actualQuote)
        let inspirationalQuote = analyzeSyntax(actualQuote.body);

      });

    } else if (selectOption === "Dad Joke") {
      let hazDadJoke = 'https://icanhazdadjoke.com/';
      makeTheCall(hazDadJoke, function(data) {
        let dadJoke = Object.values(data);
        let popJokeAnalyzed = analyzeSyntax(dadJoke[1]);
        console.log(dadJoke[1])
      });

    } else if (selectOption === "Ron Swanson Quote") {
      let ronSwan = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes';
      makeTheCall(ronSwan, function(data) {
        let ronSwanAnalyzed = analyzeSyntax(data[0]);
      });
    };
  }
  }

    let finishHim = function() {

      let ansA = $("#blankA").html();
      let ansB = $("#blankB").html();
      let ansC = $("#blankC").html();
      let segA = $("#chunkA").html();
      let segB = $("#chunkB").html();
      let segC = $("#chunkC").html();
      let segD = $("#chunkD").html();
      let conCat = segA + " " + ansA + " " + segB + " " + ansB + " " + segC + " " + ansC + " " + segD;
      $("#alas").html(conCat);
      $("#originalQ").html(theOriginalText[0]);

    }
