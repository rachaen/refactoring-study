// 출처: https://github.com/emilybache/Tennis-Refactoring-Kata/blob/main/javascript/TennisGame1.js
// 프로토타입 기반

var TennisGame = function (player1Name, player2Name) {
  this.players = {
    [player1Name]: 0,
    [player2Name]: 0,
  };
};

TennisGame.prototype.wonPoint = function (playerName) {
  if (this.players.hasOwnProperty(playerName)) {
    this.players[playerName] += 1;
  }
};

TennisGame.prototype.getScore = function () {
  const [player1Score, player2Score] = Object.values(this.players);
  if (player1Score === player2Score) {
    return player1Score > 2 ? 'Deuce' : this.translateScore(player1Score) + '-All';
  }
  if (player1Score >= 4 || player2Score >= 4) {
    return this.advantageOrWin(player1Score, player2Score);
  }

  return this.translateScore(player1Score) + '-' + this.translateScore(player2Score);
};

TennisGame.prototype.advantageOrWin = function (player1Score, player2Score) {
  const scoreDiff = player1Score - player2Score;
  const leadingPlayer = player1Score > player2Score ? Object.keys(this.players)[0] : Object.keys(this.players)[1];

  if (Math.abs(scoreDiff) === 1) {
    return 'Advantage ' + leadingPlayer;
  }
  return 'Win for ' + leadingPlayer;
};

TennisGame.prototype.translateScore = function (score) {
  switch (score) {
    case 0:
      return 'Love';
    case 1:
      return 'Fifteen';
    case 2:
      return 'Thirty';
    case 3:
      return 'Forty';
    default:
      return '';
  }
};

export { TennisGame };
