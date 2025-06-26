export class User {
  constructor(data) {
    this.id = data.id;
    this.firstName = data.userInfos.firstName;
    this.score = data.todayScore || data.score || 0;
    this.keyData = data.keyData;
  }

  get formatted() {
    return {
      id: this.id,
      name: this.firstName,
      score: this.score,
      calorie: (this.keyData.calorieCount / 1000).toFixed(3).replace('.', ','),
      protein: this.keyData.proteinCount,
      carbohydrate: this.keyData.carbohydrateCount,
      lipid: this.keyData.lipidCount
    };
  }
}

export class UserActivity {
  constructor(data) {
    this.sessions = data.sessions || [];
  }

  get formatted() {
    return this.sessions.map((session, index) => ({
      day: index + 1,
      kilogram: session.kilogram,
      calories: session.calories
    }));
  }
}

export class UserAverageSessions {
  constructor(data) {
    this.sessions = data.sessions || [];
  }

  get formatted() {
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    return this.sessions.map((session, index) => ({
      day: days[index],
      sessionLength: session.sessionLength,
      dayIndex: index
    }));
  }
}

export class UserPerformance {
  constructor(data) {
    this.data = data.data || [];
    this.kind = data.kind || {};
  }

  get formatted() {
    return this.data.map(item => ({
      subject: this.kind[item.kind],
      A: item.value
    }));
  }
}




