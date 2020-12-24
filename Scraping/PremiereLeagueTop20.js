/**
 * Axios: promise-based HTTP client for Node.js and the browser
 * Cheerio: jQuery implementation for Node.js. Cheerio makes it easy to select, edit, and view DOM elements
 * Puppeteer: A Node.js library for controlling Google Chrome or Chronium.
 */

 /**
  * About: List of top 20 premiere league top scorers
  * Infos: Rank, PlayerName, Nationality, Stats
  * Scraper Source: https://www.premierleague.com/stats/top/players/goals?se=-1
  */

 const axios = require('axios');
 const cheerio = require('cheerio');
 
 const url = 'https://www.premierleague.com/stats/top/players/goals?se=-1'

 axios(url)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const statsTable = $('.statsTableContainer > tr');
        const topScorers = []

        statsTable.each(function () {
            const rank = $(this).find('.rank > strong').text();
            const playerName =  $(this).find('.playerName > strong').text();
            const nationality = $(this).find('.playerCountry').text();
            const goals = $(this).find('.mainStat').text();

            topScorers.push({
                Rank: rank, 
                Player: playerName,
                Nationality: nationality,
                Stats: goals,
            });
        });
        console.log(topScorers);
    })
    .catch(console.error);