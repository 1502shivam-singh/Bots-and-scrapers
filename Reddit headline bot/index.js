const rp = require("request-promise");
const $ = require("cheerio");
const puppet = require("puppeteer");

//const url = "https://en.wikipedia.org/wiki/Indian_Institutes_of_Information_Technology";
const url = "https://www.reddit.com/r/dankmemes/";

let uni_list = [];

// rp(url)
//   .then(function(html){
//     //success!
    
//     let size = $("td>a", html).length;
//     for (let i = 0; i<size-1; i++){
//         if(i%2 === 0){
//             uni_list.push($("td>a",html)[i].attribs.title);
//         }
//     }
//     console.log("List of Indian institute of information technology");
//     uni_list.forEach((item)=>{
//         console.log(item);
//     })
//   })
//   .catch(function(err){
//     //handle error
//     console.log(err);
//   });

puppet
    .launch()
    .then(function(browser){
        return browser.newPage();
    })
    .then(function(page){
        return page.goto(url)
            .then(function(){
                return page.content();
            })
    })
    .then(function(html){
        console.log();
    })

// upvotes div class = _1rZYMD_4xY3gRcSS3p8ODO
// arrow and upvotes div id = vote-arrows-t3_itzx8t