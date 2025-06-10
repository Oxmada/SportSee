const BASE_URL = 'http://localhost:3000';

export async function getUser(userId) {
  const response = await fetch(`${BASE_URL}/user/${userId}`);
  if (!response.ok) throw new Error('Erreur API');
  return await response.json();
}

export async function getUserActivity(userId) {
  const response = await fetch(`${BASE_URL}/user/${userId}/activity`);
  if (!response.ok) throw new Error('Erreur API');
  return await response.json();
}

export async function getUserAverageSessions(userId) {
  const response = await fetch(`${BASE_URL}/user/${userId}/average-sessions`);
  if (!response.ok) throw new Error('Erreur API');
  return await response.json();
}

export async function getUserPerformance(userId) {
  const response = await fetch(`${BASE_URL}/user/${userId}/performance`);
  if (!response.ok) throw new Error('Erreur API');
  return await response.json();
}