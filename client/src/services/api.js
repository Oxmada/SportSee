import {
  User,
  UserActivity,
  UserAverageSessions,
  UserPerformance
} from './models';

const BASE_URL = 'http://localhost:3000';

export async function getUser(userId) {
  const response = await fetch(`${BASE_URL}/user/${userId}`);
  if (!response.ok) throw new Error('Erreur API');
  const data = await response.json();
  const user = new User(data.data);
  return user.formatted;
}

export async function getUserActivity(userId) {
  const response = await fetch(`${BASE_URL}/user/${userId}/activity`);
  if (!response.ok) throw new Error('Erreur API');
  const data = await response.json();
  const activity = new UserActivity(data.data);
  return activity.formatted;
}

export async function getUserAverageSessions(userId) {
  const response = await fetch(`${BASE_URL}/user/${userId}/average-sessions`);
  if (!response.ok) throw new Error('Erreur API');
  const data = await response.json();
  const sessions = new UserAverageSessions(data.data);
  return sessions.formatted;
}

export async function getUserPerformance(userId) {
  const response = await fetch(`${BASE_URL}/user/${userId}/performance`);
  if (!response.ok) throw new Error('Erreur API');
  const data = await response.json();
  const performance = new UserPerformance(data.data);
  return performance.formatted;
}
