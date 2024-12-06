function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}
function numPointsScored(playerName) {
    const game = gameObject();
    for (let teamKey in game) {
        const team = game[teamKey];
        if (team.players[playerName]) {
            return team.players[playerName].points;
        }
    }
    return null; 
}
function shoeSize(playerName) {
    const game = gameObject();
    for (let teamKey in game) {
        const team = game[teamKey];
        if (team.players[playerName]) {
            return team.players[playerName].shoe;
        }
    }
    return null;    
}
function teamColors(teamName) {
    const game = gameObject();
    for (let teamKey in game) {
        const team = game[teamKey];
        if (team.teamName === teamName) {
            return team.colors;
        }
    }
    return null; // If team not found
}
function teamNames() {
    const game = gameObject();
    return Object.values(game).map(team => team.teamName);
}
function playerNumbers(teamName) {
    const game = gameObject();
    for (let teamKey in game) {
        const team = game[teamKey];
        if (team.teamName === teamName) {
            return Object.values(team.players).map(player => player.number);
        }
    }
    return null; // If team not found
}
function playerStats(playerName) {
    const game = gameObject();
    for (let teamKey in game) {
        const team = game[teamKey];
        if (team.players[playerName]) {
            return team.players[playerName];
        }
    }
    return null; // If player not found
}
function bigShoeRebounds() {
    const game = gameObject();
    let largestShoe = 0;
    let rebounds = 0;

    for (let teamKey in game) {
        const team = game[teamKey];
        for (let player in team.players) {
            const playerData = team.players[player];
            if (playerData.shoe > largestShoe) {
                largestShoe = playerData.shoe;
                rebounds = playerData.rebounds;
            }
        }
    }
    return rebounds;
}
function mostPointsScored() {
    const game = gameObject();
    let maxPoints = 0;
    let bestPlayer = "";

    for (let teamKey in game) {
        const team = game[teamKey];
        for (let player in team.players) {
            const playerData = team.players[player];
            if (playerData.points > maxPoints) {
                maxPoints = playerData.points;
                bestPlayer = player;
            }
        }
    }
    return bestPlayer;
}
function winningTeam() {
    const game = gameObject();
    let scores = { home: 0, away: 0 };

    for (let teamKey in game) {
        const team = game[teamKey];
        scores[teamKey] = Object.values(team.players).reduce((total, player) => total + player.points, 0);
    }

    return scores.home > scores.away ? game.home.teamName : game.away.teamName;
}
function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";

    for (let teamKey in game) {
        const team = game[teamKey];
        for (let player in team.players) {
            if (player.length > longestName.length) {
                longestName = player;
            }
        }
    }
    return longestName;
}
function doesLongNameStealATon() {
    const game = gameObject();
    const longestName = playerWithLongestName();
    let maxSteals = 0;

    for (let teamKey in game) {
        const team = game[teamKey];
        for (let player in team.players) {
            const steals = team.players[player].steals;
            if (steals > maxSteals) {
                maxSteals = steals;
            }
        }
    }

    return game.home.players[longestName]?.steals === maxSteals || game.away.players[longestName]?.steals === maxSteals;
}
console.log(numPointsScored("Alan Anderson")); 
