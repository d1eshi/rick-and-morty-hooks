const API = 'https://rickandmortyapi.com/api/character'

export async function getCharacters({ setCharacters }) {
  try {
    const response = await fetch(API)
    const characters = await response.json()

    setCharacters(characters.results)
  } catch (err) {
    throw new Error(err)
  }
}
