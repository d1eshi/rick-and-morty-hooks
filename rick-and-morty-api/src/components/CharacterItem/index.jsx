import React from 'react'

export default function CharacterItem({ character, handleToggleFavorite }) {
  return (
    <>
      <li key={character.id} className="character-item">
        <div className="character__img-container">
          <img alt={character.name} src={character.image} />
          <button type="button" onClick={() => handleToggleFavorite(character)}>
            ❤️
          </button>
        </div>
        <h3>{character.name}</h3>
      </li>
    </>
  )
}
