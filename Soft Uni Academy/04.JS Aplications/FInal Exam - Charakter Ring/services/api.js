
import * as API from "../services/index.js"
const API_BASE_URL = 'https://your-api-base-url.com';

export async function getCharacters() {
  try {
    const response = await fetch(`${API.baseURL}/characters`);
    if (!response.ok) {
      throw new Error('Failed to fetch characters');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function createCharacter(characterData) {
  try {
    const response = await fetch(`${API.baseURL}/characters`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(characterData),
    });

    if (!response.ok) {
      throw new Error('Failed to create character');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
