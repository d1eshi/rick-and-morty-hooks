import React from 'react'
import { getCharacters } from '@/services/getCharacters'

export default function useCharacters() {
  const [characters, setCharacters] = React.useState([])

  React.useEffect(() => {
    getCharacters({ setCharacters })
  }, [])

  return characters
}
