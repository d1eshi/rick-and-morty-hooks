import Character from '@/components/Character'
import CharacterItem from '@/components/CharacterItem'
import React from 'react'
import './index.css'

export default function SearchFilter({ characters, handleFavorite }) {
  const [search, setSearch] = React.useState('')
  const searchInput = React.useRef(null)

  const handleSearch = () => {
    console.log('using...')
    setSearch(searchInput.current.value)
  }

  const filteredCharacters = React.useMemo(
    () =>
      characters.filter(character => {
        return character.name.toLowerCase().includes(search.toLowerCase())
      }),
    [characters, search]
  )

  return (
    <>
      <div className="search-filter">
        <input
          ref={searchInput}
          placeholder="morty"
          type="text"
          value={search}
          onChange={handleSearch}
        />
      </div>
      <Character>
        {filteredCharacters.map(character => (
          <CharacterItem
            key={character.id}
            character={character}
            handleToggleFavorite={handleFavorite}
          />
        ))}
      </Character>
    </>
  )
}
