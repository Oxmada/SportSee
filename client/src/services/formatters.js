export function formatUserData(data) {
  return {
    id: data.id,
    name: data.userInfos.firstName, 
    score: data.todayScore || data.score || 0, 
    calorie: (data.keyData.calorieCount / 1000).toFixed(3).replace('.', ','),
    protein: data.keyData.proteinCount,
    carbohydrate: data.keyData.carbohydrateCount,
    lipid: data.keyData.lipidCount
  };
}

export function formatUserActivity(data) {
  return data.sessions.map((session, index) => ({
    day: index + 1, 
    kilogram: session.kilogram,
    calories: session.calories
  }));
}

export function formatUserAverageSessions(data) {
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']; 
  return data.sessions.map((session, index) => ({
    day: days[index],
    sessionLength: session.sessionLength,
    dayIndex: index // identifiant unique
  }));
}

export function formatUserPerformance(data) {
  return data.data.map(item => ({
    subject: data.kind[item.kind], 
    A: item.value
  }));
}


