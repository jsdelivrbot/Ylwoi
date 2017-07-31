/**
 * Created by cw on 2017-05-03.
 */
'use strict';

var watchlist = [];

var security_alchol_loot = 0;

var queue = [
	{ 'name': 'Amanda', 'alcohol': 10, 'guns': 1 },
	{ 'name': 'Tibi', 'alcohol': 0, 'guns': 0 },
	{ 'name': 'Dolores', 'alcohol': 0, 'guns': 1 },
	{ 'name': 'Wade', 'alcohol': 1, 'guns': 1 },
	{ 'name': 'Anna', 'alcohol': 10, 'guns': 0 },
	{ 'name': 'Rob', 'alcohol': 2, 'guns': 0 },
	{ 'name': 'Joerg', 'alcohol': 20, 'guns': 0 }
];

// Queue of festivalgoers at entry
// no. of alcohol units
// no. of guns

// Create a security_check function that returns a list of festivalgoers who can enter the festival

// If guns are found, remove them and put them on the watchlist (only the names)
// If alcohol is found confiscate it (set it to zero and add it to security_alchol_loot) and let them enter the festival

function securityCheck (list) {
    list.map(function (e) {
        if (e['alcohol'] > 0) {
            security_alchol_loot += e['alcohol'];
            e['alcohol'] = 0;
        } if (e['guns'] > 0) {
            watchlist.push(e['name']);
        }
    });
    list = list.map(function (e) {
        list = [];
        if (e['guns'] === 0) {
             list.push(e);
        }
    });
}

securityCheck(queue);
console.log(queue);
console.log(watchlist);
console.log(security_alchol_loot);