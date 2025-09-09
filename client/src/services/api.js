import {
  User,
  UserActivity,
  UserAverageSessions,
  UserPerformance
} from './models';

import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE
} from './mockData.js';

const BASE_URL = 'http://localhost:3000';

export async function getUser(userId, useMock = false) {
  if (useMock) {
    const data = USER_MAIN_DATA.find(u => u.id === parseInt(userId));
    if (!data) throw new Error('Utilisateur mock non trouvé');
    return new User(data).formatted;
  }
  const response = await fetch(`${BASE_URL}/user/${userId}`);
  if (!response.ok) throw new Error('Erreur API');
  const data = await response.json();
  return new User(data.data).formatted;
}

export async function getUserActivity(userId, useMock = false) {
  if (useMock) {
    const data = USER_ACTIVITY.find(u => u.userId === parseInt(userId));
    if (!data) throw new Error('Activité mock non trouvée');
    return new UserActivity(data).formatted;
  }
  const response = await fetch(`${BASE_URL}/user/${userId}/activity`);
  if (!response.ok) throw new Error('Erreur API');
  const data = await response.json();
  return new UserActivity(data.data).formatted;
}

export async function getUserAverageSessions(userId, useMock = false) {
  if (useMock) {
    const data = USER_AVERAGE_SESSIONS.find(u => u.userId === parseInt(userId));
    if (!data) throw new Error('Sessions mock non trouvées');
    return new UserAverageSessions(data).formatted;
  }
  const response = await fetch(`${BASE_URL}/user/${userId}/average-sessions`);
  if (!response.ok) throw new Error('Erreur API');
  const data = await response.json();
  return new UserAverageSessions(data.data).formatted;
}

export async function getUserPerformance(userId, useMock = false) {
  if (useMock) {
    const data = USER_PERFORMANCE.find(u => u.userId === parseInt(userId));
    if (!data) throw new Error('Performance mock non trouvée');
    return new UserPerformance(data).formatted;
  }
  const response = await fetch(`${BASE_URL}/user/${userId}/performance`);
  if (!response.ok) throw new Error('Erreur API');
  const data = await response.json();
  return new UserPerformance(data.data).formatted;
}




