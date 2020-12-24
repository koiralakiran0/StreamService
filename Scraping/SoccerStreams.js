/**
 * Axios: promise-based HTTP client for Node.js and the browser
 * Cheerio: jQuery implementation for Node.js. Cheerio makes it easy to select, edit, and view DOM elements
 * Puppeteer: A Node.js library for controlling Google Chrome or Chronium.
 */

 /**
  * About: Data about the matches that is about to happen
  * Info: Live Matches or matches about to happen
  * Scraper Source: https://soccerstreams-100.com/
  */

 const axios = require('axios');
 const cheerio = require('cheerio');
 
 const url = 'https://soccerstreams-100.com/'
 const matches = []


 axios(url)
 .then(response => {
     const html = response.data;
     const $ = cheerio.load(html);
     const statsTable = $('.content');
     const matches = []

     
     
     statsTable.each(function () {
         const link = $(this).find('.post-title').text();
         matches.push({
             Link: link,
         });
     });
     
     console.log(matches);
 })
 .catch(console.error);