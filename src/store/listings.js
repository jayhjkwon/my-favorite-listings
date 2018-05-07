import listingsService from '../services/listingsService'

export const REQUEST_LISTINGS = 'REQUEST_LISTINGS'
export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS'
export const SAVE_LISTING = 'SAVE_LISTING'
export const UNSAVE_LISTING = 'UNSAVE_LISTING'

export const initialState = {
  isLoading: false,
  error: null,
  results: [],
  saved: []
}

export const actionCreators = {
  fetchListings: () => async (dispatch, getState) => {
    dispatch({ type: REQUEST_LISTINGS })

    try {
      const response = await listingsService.fetchListings()
      return dispatch({ type: RECEIVE_LISTINGS, ...response })
    } catch (error) {
      return dispatch({ type: RECEIVE_LISTINGS, error })
    }
  },

  saveListing: id => dispatch => {
    return dispatch({ type: SAVE_LISTING, id })
  },

  unSaveListing: id => dispatch => {
    return dispatch({ type: UNSAVE_LISTING, id })
  }
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_LISTINGS: {
      return {
        ...state,
        isLoading: true
      }
    }

    case RECEIVE_LISTINGS: {
      return {
        ...state,
        isLoading: false,
        error: action.error,
        results: action.results,
        saved: action.saved
      }
    }

    case SAVE_LISTING: {
      // check if the listing is already saved
      if (state.saved.filter(listing => listing.id === action.id).length >= 1) {
        return {
          ...state
        }
      }

      const newSavedListings = [
        ...state.saved,
        ...state.results.filter(listing => listing.id === action.id)
      ]

      return {
        ...state,
        saved: newSavedListings
      }
    }

    case UNSAVE_LISTING: {
      const newSavedListings = state.saved.filter(
        listing => listing.id !== action.id
      )

      return {
        ...state,
        saved: newSavedListings
      }
    }

    default:
      return state
  }
}
