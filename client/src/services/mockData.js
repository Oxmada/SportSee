// mockData.js

export const USER_MAIN_DATA = [
  {
    id: 12,
    userInfos: { firstName: 'Alice', lastName: 'Dupont', age: 28 },
    todayScore: 0.45,
    keyData: { calorieCount: 2100, proteinCount: 120, carbohydrateCount: 250, lipidCount: 70 }
  },
  {
    id: 18,
    userInfos: { firstName: 'Bob', lastName: 'Martin', age: 35 },
    score: 0.6,
    keyData: { calorieCount: 2000, proteinCount: 100, carbohydrateCount: 200, lipidCount: 90 }
  }
];

export const USER_ACTIVITY = [
  {
    userId: 12,
    sessions: [
      { day: '2020-07-01', kilogram: 65, calories: 220 },
      { day: '2020-07-02', kilogram: 66, calories: 230 },
      { day: '2020-07-03', kilogram: 65, calories: 210 },
      { day: '2020-07-04', kilogram: 65, calories: 250 },
      { day: '2020-07-05', kilogram: 64, calories: 200 },
      { day: '2020-07-06', kilogram: 64, calories: 220 },
      { day: '2020-07-07', kilogram: 63, calories: 240 }
    ]
  },
  {
    userId: 18,
    sessions: [
      { day: '2020-07-01', kilogram: 80, calories: 300 },
      { day: '2020-07-02', kilogram: 79, calories: 310 },
      { day: '2020-07-03', kilogram: 78, calories: 290 },
      { day: '2020-07-04', kilogram: 78, calories: 320 },
      { day: '2020-07-05', kilogram: 77, calories: 300 },
      { day: '2020-07-06', kilogram: 77, calories: 310 },
      { day: '2020-07-07', kilogram: 76, calories: 330 }
    ]
  }
];

export const USER_AVERAGE_SESSIONS = [
  {
    userId: 12,
    sessions: [
      { day: 1, sessionLength: 40 },
      { day: 2, sessionLength: 35 },
      { day: 3, sessionLength: 50 },
      { day: 4, sessionLength: 45 },
      { day: 5, sessionLength: 30 },
      { day: 6, sessionLength: 25 },
      { day: 7, sessionLength: 60 }
    ]
  },
  {
    userId: 18,
    sessions: [
      { day: 1, sessionLength: 30 },
      { day: 2, sessionLength: 45 },
      { day: 3, sessionLength: 55 },
      { day: 4, sessionLength: 40 },
      { day: 5, sessionLength: 35 },
      { day: 6, sessionLength: 50 },
      { day: 7, sessionLength: 50 }
    ]
  }
];

export const USER_PERFORMANCE = [
  {
    userId: 12,
    kind: { 1: 'cardio', 2: 'energy', 3: 'endurance', 4: 'strength', 5: 'speed', 6: 'intensity' },
    data: [
      { value: 90, kind: 1 },
      { value: 110, kind: 2 },
      { value: 130, kind: 3 },
      { value: 60, kind: 4 },
      { value: 180, kind: 5 },
      { value: 70, kind: 6 }
    ]
  },
  {
    userId: 18,
    kind: { 1: 'cardio', 2: 'energy', 3: 'endurance', 4: 'strength', 5: 'speed', 6: 'intensity' },
    data: [
      { value: 150, kind: 1 },
      { value: 200, kind: 2 },
      { value: 100, kind: 3 },
      { value: 90, kind: 4 },
      { value: 210, kind: 5 },
      { value: 120, kind: 6 }
    ]
  }
];

