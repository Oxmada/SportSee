import {
  formatUserData,
  formatUserActivity,
  formatUserAverageSessions,
  formatUserPerformance
} from './formatters';

const BASE_URL = 'http://localhost:3000';

export async function getUser(userId) {
  const response = await fetch(`${BASE_URL}/user/${userId}`);
  if (!response.ok) throw new Error('Erreur API');
  const data = await response.json();
  return formatUserData(data.data); 
}

export async function getUserActivity(userId) {
  const response = await fetch(`${BASE_URL}/user/${userId}/activity`);
  if (!response.ok) throw new Error('Erreur API');
  const data = await response.json();
  return formatUserActivity(data.data); 
}

export async function getUserAverageSessions(userId) {
  const response = await fetch(`${BASE_URL}/user/${userId}/average-sessions`);
  if (!response.ok) throw new Error('Erreur API');
  const data = await response.json();
  return formatUserAverageSessions(data.data); 
}

export async function getUserPerformance(userId) {
  const response = await fetch(`${BASE_URL}/user/${userId}/performance`);
  if (!response.ok) throw new Error('Erreur API');
  const data = await response.json();
  return formatUserPerformance(data.data); 
}
