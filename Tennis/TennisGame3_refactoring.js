// 출처 https://github.com/rachaen/refactoring-study.git
var TennisGame = function (player1Name, player2Name) {
  this.scorePlayer1 = 0;
  this.scorePlayer2 = 0;

  this.player1Name = player1Name;
  this.player2Name = player2Name;
};

const ScoreNames = Object.freeze({
  0: 'Love',
  1: 'Fifteen',
  2: 'Thirty',
  3: 'Forty',
});

TennisGame.prototype.getScore = function () {
  if (this.isEarlyGame()) {
    return this.earlyGameScore();
  } else {
    return this.lateGameScore();
  }
};

TennisGame.prototype.isEarlyGame = function () {
  return this.scorePlayer1 < 4 && this.scorePlayer2 < 4 && this.scorePlayer1 + this.scorePlayer2 < 6;
};

TennisGame.prototype.earlyGameScore = function () {
  if (this.isTied()) {
    return `${ScoreNames[this.scorePlayer1]}-All`;
  } else {
    return `${ScoreNames[this.scorePlayer1]}-${ScoreNames[this.scorePlayer2]}`;
  }
};

TennisGame.prototype.lateGameScore = function () {
  if (this.isTied()) return 'Deuce';
  const leader = this.scorePlayer1 > this.scorePlayer2 ? this.player1Name : this.player2Name;
  const scoreDifference = Math.abs(this.scorePlayer1 - this.scorePlayer2);
  return scoreDifference === 1 ? `Advantage ${leader}` : `Win for ${leader}`;
};

TennisGame.prototype.isTied = function () {
  return this.scorePlayer1 === this.scorePlayer2;
};

TennisGame.prototype.wonPoint = function (playerName) {
  if (playerName == 'player1') this.scorePlayer1 += 1;
  else this.scorePlayer2 += 1;
};

if (typeof window === 'undefined') {
  module.exports = TennisGame;
}
export { TennisGame };
