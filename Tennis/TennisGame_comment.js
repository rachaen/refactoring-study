// 출처: https://github.com/emilybache/Tennis-Refactoring-Kata/blob/main/javascript/TennisGame1.js

// class 기반으로
var TennisGame1 = function (player1Name, player2Name) {
  // 명확한 변수명 사용하기
  this.m_score1 = 0;
  this.m_score2 = 0;
  this.player1Name = player1Name;
  this.player2Name = player2Name;
};

TennisGame1.prototype.wonPoint = function (playerName) {
  // player 이름을 입력받았는데 이상하게 비교하고 있음
  if (playerName === 'player1') this.m_score1 += 1;
  else this.m_score2 += 1;
};

TennisGame1.prototype.getScore = function () {
  var score = '';
  var tempScore = 0; // 없애거나 이동

  // 점수 비교 메소드 추출
  if (this.m_score1 === this.m_score2) {
    // switch문 따로 함수로 작성
    switch (this.m_score1) {
      case 0:
        score = 'Love-All';
        break;
      case 1:
        score = 'Fifteen-All';
        break;
      case 2:
        score = 'Thirty-All';
        break;
      default:
        score = 'Deuce';
        break;
    }
  } else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
    var minusResult = this.m_score1 - this.m_score2; // 변수명 변경
    // 같은 문자들 반복(ex. advantage, win for, player1, player2) + player이름을 받았는데 player1과 player2로 사용하고 있음
    if (minusResult === 1) score = 'Advantage player1';
    else if (minusResult === -1) score = 'Advantage player2';
    else if (minusResult >= 2) score = 'Win for player1';
    else score = 'Win for player2';
  } else {
    // 불필요한 for문
    for (var i = 1; i < 3; i++) {
      if (i === 1) tempScore = this.m_score1;
      else {
        score += '-';
        tempScore = this.m_score2;
      }
      // switch문 따로 함수로 작성
      switch (tempScore) {
        case 0:
          score += 'Love';
          break;
        case 1:
          score += 'Fifteen';
          break;
        case 2:
          score += 'Thirty';
          break;
        case 3:
          score += 'Forty';
          break;
      }
    }
  }
  return score;
};

export { TennisGame1 };
