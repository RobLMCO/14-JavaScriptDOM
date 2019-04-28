// from data.js
var tableData = data;

// YOUR CODE HERE!
var filterType = d3.select("#filterType");
var searchInput = d3.select("#searchInput");
var searchSubmit = d3.select(".searchSubmit");

var inputTbody = d3.select("tbody");
var msgBox = d3.select("msg-box");
document.getElementById("foundImage").style.visibility = "hidden";
document.getElementById("lostImage").style.visibility = "hidden";
var Empty = 0;

var findDate = '1/2/2010';
var findCity = 'atlanta';
var findState = 'ga';
var findCountry = 'us';
var findShape = 'fireball';
var findDuration = '3 seconds';


function loadTableData(dataArray) {

d3.select("tbody")
  .selectAll("tr")
  .data(dataArray)
  .enter()
  .append("tr")
  .html(function(sighting) {
    return `<td>${sighting.datetime}</td> <td>${sighting.city}</td> <td>${sighting.state}</td> <td>${sighting.country}</td> <td>${sighting.shape}</td> <td>${sighting.durationMinutes}</td> <td>${sighting.comments}</td>     `;
  });
};

loadTableData(tableData);

searchSubmit.on("click", function() {
    console.log("searching");
    d3.event.preventDefault();
    var searchInputText = searchInput.property("value");
    if (filterType.text() == "Enter A City") {
        
        let findCity = searchInputText;
        console.log(`using ${findCity}`);
        var filteredData = tableData.filter(fData => (fData.city == findCity));
        var notEmpty = filteredData.length;
        if (notEmpty == 0) {
            console.log(`Could Not Find ${searchInputText} using ${filterType.text()}`);
            msgBox.text(`Could Not Find ${searchInputText} using ${filterType.text()}`);
            searchImage(Empty);
            inputTbody.html("");
        } 
        else {
        inputTbody.html("");
        msgBox.text(`Found ${notEmpty} results!`);
        searchImage(notEmpty);
        console.log(filteredData);
        loadTableData(filteredData); };
    } 
    else if (filterType.text() == "Enter A State") {
        
        let findState = searchInputText;
        console.log(`using ${findState}`);
        var filteredData = tableData.filter(fData => (fData.state == findState));
        var notEmpty = filteredData.length;
        if (notEmpty == 0) {
            console.log(`Could Not Find ${searchInputText} using ${filterType.text()}`);
            msgBox.text(`Could Not Find ${searchInputText} using ${filterType.text()}`);
            searchImage(Empty);
            inputTbody.html("");
        } 
        else {
        inputTbody.html("");
        msgBox.text(`Found ${notEmpty} results!`);
        searchImage(notEmpty);
        console.log(filteredData);
        loadTableData(filteredData); };
    } 
    else if (filterType.text() == "Enter A Country") {
        
        let findCountry = searchInputText;
        console.log(`using ${findCountry}`);
        var filteredData = tableData.filter(fData => (fData.country == findCountry));
        var notEmpty = filteredData.length;
        if (notEmpty == 0) {
            console.log(`Could Not Find ${searchInputText} using ${filterType.text()}`);
            msgBox.text(`Could Not Find ${searchInputText} using ${filterType.text()}`);
            searchImage(Empty);
            inputTbody.html("");
        } 
        else {
        inputTbody.html("");
        msgBox.text(`Found ${notEmpty} results!`);
        searchImage(notEmpty);
        console.log(filteredData);
        loadTableData(filteredData); };
    } 
    else if (filterType.text() == "Enter A Shape") {
        
        let findShape = searchInputText;
        console.log(`using ${findShape}`);
        var filteredData = tableData.filter(fData => (fData.shape == findShape));
        var notEmpty = filteredData.length;
        if (notEmpty == 0) {
            console.log(`Could Not Find ${searchInputText} using ${filterType.text()}`);
            msgBox.text(`Could Not Find ${searchInputText} using ${filterType.text()}`);
            searchImage(Empty);
            inputTbody.html("");
        } 
        else {
        inputTbody.html("");
        msgBox.text(`Found ${notEmpty} results!`);
        searchImage(notEmpty);
        console.log(filteredData);
        loadTableData(filteredData); };
    } 
    else if (filterType.text() == "Enter A Date") {
        
        let findDate = searchInputText;
        console.log(`using ${findDate}`);
        var filteredData = tableData.filter(fData => (fData.datetime == findDate));
        var notEmpty = filteredData.length;
        if (notEmpty == 0) {
            console.log(`Could Not Find ${searchInputText} using ${filterType.text()}`);
            msgBox.text(`Could Not Find ${searchInputText} using ${filterType.text()}`);
            searchImage(Empty);
            inputTbody.html("");
        } 
        else {
        inputTbody.html("");
        msgBox.text(`Found ${notEmpty} results!`);
        searchImage(notEmpty);
        console.log(filteredData);
        loadTableData(filteredData); };
    } 
    else {
        console.log(`Could Not Find ${searchInputText} using ${filterType.text()}`);
        msgBox.text(`Could Not Find ${searchInputText} using ${filterType.text()}`);
        searchImage(Empty);
    };
    
});

function getData(filter) {
  
  switch (filter) {
    case "FilterByDateTime":
      
      filterType.text("Enter A Date");
      console.log(`Primary Search By DateTime`);
      break;
    
    case "FilterByCity":
      
      filterType.text("Enter A City");
      console.log(`Primary Search By City`);
      break;
    case "FilterByState":
      
      filterType.text("Enter A State");
      console.log(`Primary Search By State`);
      break;
    case "FilterByCountry":
      
      filterType.text("Enter A Country");
      console.log(`Primary Search By Country`);
      break;
    case "FilterByShape":
      
      filterType.text("Enter A Shape");
      console.log(`Primary Search By Shape`);
      break;
    default:
      
      filterType.text("Enter A Date");
      console.log(`Primary Search By Date`);
      break;
    }
  };

 function searchImage(result) {
    searchAudio(result);
    console.log(result);
    if (result) {
        document.getElementById("foundImage").style.visibility = "visible";
        document.getElementById("lostImage").style.visibility = "hidden";
    } else {
        document.getElementById("foundImage").style.visibility = "hidden";
        document.getElementById("lostImage").style.visibility = "visible";
    };
 };

var foundAudio1 = new Audio('static/audio/foundAudio1.mp3');
var foundAudio2 = new Audio('static/audio/foundAudio2.mp3');
var foundAudio3 = new Audio('static/audio/foundAudio3.mp3');
var foundAudio4 = new Audio('static/audio/foundAudio4.mp3');
var foundAudio5 = new Audio('static/audio/foundAudio5.mp3');
var foundAudio6 = new Audio('static/audio/foundAudio6.mp3');
var foundAudio7 = new Audio('static/audio/foundAudio7.mp3');
var foundAudio8 = new Audio('static/audio/foundAudio8.mp3');

var lostAudio1 = new Audio('static/audio/lostAudio1.mp3');
var lostAudio2 = new Audio('static/audio/lostAudio2.mp3');
var lostAudio3 = new Audio('static/audio/lostAudio3.mp3');
var lostAudio4 = new Audio('static/audio/lostAudio4.mp3');
var lostAudio5 = new Audio('static/audio/lostAudio5.mp3');
var lostAudio6 = new Audio('static/audio/lostAudio6.mp3');
var lostAudio7 = new Audio('static/audio/lostAudio7.mp3');
var lostAudio8 = new Audio('static/audio/lostAudio8.mp3');

function rolld8() {
    var min = 1;
    var max = 8;
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
};

function searchAudio(result) {
    var thisRoll = rolld8();
    console.log(thisRoll);
    if (thisRoll == 1) {
        if (result) {
            foundAudio1.play();
        } else { lostAudio1.play(); };       
    } else if (thisRoll == 2) {
        if (result) {
            foundAudio2.play();
        } else { lostAudio2.play(); };
    } else if (thisRoll == 3) {
        if (result) {
            foundAudio3.play();
        } else { lostAudio3.play(); };
    } else if (thisRoll == 4) {
        if (result) {
            foundAudio4.play();
        } else { lostAudio4.play(); };
    } else if (thisRoll == 5) {
        if (result) {
            foundAudio5.play();
        } else { lostAudio5.play(); };
    } else if (thisRoll == 6) {
        if (result) {
            foundAudio6.play();
        } else { lostAudio6.play(); };
    } else if (thisRoll == 7) {
        if (result) {
            foundAudio7.play();
        } else { lostAudio7.play(); };
    } else { 
        if (result) {
            foundAudio8.play();
        } else { lostAudio8.play(); }; };
    
  };
