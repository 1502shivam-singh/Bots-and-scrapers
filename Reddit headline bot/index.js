const rp = require("request-promise");
const $ = require("cheerio");
const puppet = require("puppeteer");

const url = "https://www.reddit.com/r/dankmemes/";

let titleList = [];

puppet
    .launch()
    .then(function(browser){
        return browser.newPage();
    })
    .then(function(page){
        return page.goto(url, { waitUntil: 'networkidle0' })
            .then(function(){
                page.evaluate(() => {
                    window.scrollBy(0, document.body.clientHeight);
                })
                return page.content();
            })
    })
    .then(function(html){
        console.log("Start");
        $("div[class=_1rZYMD_4xY3gRcSS3p8ODO]","._23h0-EcaBUorIHC-JZyh6J",html).each(function(elem){
            //console.log($(this).text());
            titleList.push($(this).text());
        });
        titleList.forEach(element => {
            console.log(element);
        });
        //console.log($("div[class=_1rZYMD_4xY3gRcSS3p8ODO]",".rpBJOHq2PR60pnwJlUyP0",html).html());
    })

// upvotes div class = _1rZYMD_4xY3gRcSS3p8ODO
// arrow and upvotes div id = vote-arrows-t3_itzx8t
// div class for whole card collection = rpBJOHq2PR60pnwJlUyP0
// class of h3 for titles = _eYtD2XCVieq6emjKBH3m
