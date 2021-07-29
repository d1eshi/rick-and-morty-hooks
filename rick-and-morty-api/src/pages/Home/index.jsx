import React from 'react'
import Character from '@/components/Character'
import Header from '@/components/Header'
import CharacterItem from '@/components/CharacterItem'
import SearchFilter from '@/components/Search'
import useCharacters from '@/hooks/useCharacters'

import { favoriteReducer } from '../../reducers/favoriteReducer'
import ThemeContext from '../../context/toggleTheme'

export default function Home() {
  const initilalState = {
    favorites: [],
  }
  const { darkTheme } = React.useContext(ThemeContext)
  const [favorites, dispatch] = React.useReducer(favoriteReducer, initilalState)

  const headerClass = darkTheme ? 'theme-dark' : 'theme-light'

  const characters = useCharacters()

  const toggleFavorite = character => {
    console.log('added')
    dispatch({
      type: '@favorites/add_request',
      payload: character,
    })
  }

  return (
    <div className={`Home ${headerClass} `}>
      <Header />

      {favorites.favorites.length > 0 ? (
        <Character title="Favoritos">
          {favorites.favorites.map(character => (
            <CharacterItem
              key={character.id}
              character={character}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </Character>
      ) : null}

      <SearchFilter characters={characters} handleFavorite={toggleFavorite} />
    </div>
  )
}
