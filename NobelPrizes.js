/* A file to rendering Nobel Prize information from JSON into 
HTML with *nunjucks*. 

Student edition for use in homework assignments.

*/

const nunjucks = require('nunjucks');
// The next line imports the prize.json file into JavaScript
// as a JavaScript object which contains arrays and more objects...
const prizesJSON = require('./prize.json');
const fs = require('fs'); // The file system module

// You will pick different topics and date ranges based on your
// interests and the contents of the prize.json file
let catDates = [{
        topic: "peace",
        start: 2001,
        end: 2017,
        title: "Peace",
        fname: "peace.html"
    },
    {
        topic: "literature",
        start: 1965,
        end: 1999,
        title: "Literature",
        fname: "literature.html"
    },
    {
        topic: "medicine",
        start: 1977,
        end: 1999,
        title: "Medicine",
        fname: "medicine.html"
    }];


nunjucks.configure({
    autoescape: true
});
nunjucks.configure('views', {
    autoescape: true
});

// Process prizes.json to get only information of interest
let prizeArray = prizesJSON.prizes;
for (let catDate of catDates) {
    
	// Create filtered versions of the prize array for rendering.
    // Recommend using JavaScript array methods like *filter*, etc...
	
	let prizeFilterArray=prizeArray.filter((val,index,new_arr)=>
	{
		return((new_arr[index].category===catDate.topic) && (new_arr[index].year<=catDate.end) && (new_arr[index].year>=catDate.start));
		
	});
	
	// Combine needed information for the template into a single
    // JavaScript object, suppose it is called prizeInfo and
    // pass it over to nunjucks
	
	let prizeMapArray=prizeFilterArray.map((val,index,new_arr)=>
	{
		return{categories: new_arr[index].category, year: new_arr[index].year, laureates: new_arr[index].laureates};
	});
	prizeMapArray.sort(function compare(start,end)
	{
		if(start.year<end.year)
		return -1;
	else
		return 1;
	});
	
	prizeInfo={ start: catDate.start, end: catDate.end, topic: catDate.topic, arr1: catDates, arr2:prizeMapArray};

    let outString = nunjucks.render('prizes.njk', prizeInfo);
    
    // Write the file
    fs.writeFileSync('./output/' + catDate.fname, outString);
    console.log("Wrote file " + catDate.fname); // For debugging
}
