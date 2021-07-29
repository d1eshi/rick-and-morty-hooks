export function favoriteReducer(state, action) {
    switch (action.type) {
      case '@favorites/add_request':
        return {...state,
          favorites: [...state.favorites, action.payload],
        }

      default:
        return state
    }
  }
