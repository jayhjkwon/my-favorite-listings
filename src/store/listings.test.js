import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import {
  actionCreators,
  reducer,
  initialState,
  REQUEST_LISTINGS,
  RECEIVE_LISTINGS,
  SAVE_LISTING,
  UNSAVE_LISTING
} from './listings'

describe('actionCreators', () => {
  const mockedDispatch = payload => payload

  it('should have the properties', () => {
    expect(actionCreators).toHaveProperty('fetchListings')
    expect(actionCreators).toHaveProperty('saveListing')
    expect(actionCreators).toHaveProperty('unSaveListing')
  })

  it('fetchListings action creator should create RECEIVE_LISTINGS action type', async () => {
    const action = await actionCreators.fetchListings()(mockedDispatch)
    expect(action.type).toEqual(RECEIVE_LISTINGS)
  })

  it('saveListing action creator should create SAVE_LISTING action type', async () => {
    const action = await actionCreators.saveListing(1)(mockedDispatch)
    expect(action.type).toEqual(SAVE_LISTING)
  })

  it('unSaveListing action creator should create UNSAVE_LISTING action type', async () => {
    const action = await actionCreators.unSaveListing(1)(mockedDispatch)
    expect(action.type).toEqual(UNSAVE_LISTING)
  })
})

describe('reducer', () => {
  it('should return initial state', () => {
    const state = reducer(undefined, {})
    expect(state).toEqual({
      isLoading: false,
      error: null,
      results: [],
      saved: []
    })
  })

  it('should handle REQUEST_LISTINGS action type', () => {
    const state = reducer(undefined, {
      type: REQUEST_LISTINGS
    })
    expect(state.isLoading).toEqual(true)
  })

  it('should handle RECEIVE_LISTINGS action type', () => {
    const state = reducer(undefined, {
      type: RECEIVE_LISTINGS,
      results: [{ id: 1 }, { id: 2 }],
      saved: [{ id: 3 }]
    })
    expect(state.isLoading).toEqual(false)
    expect(state.results).toEqual([{ id: 1 }, { id: 2 }])
    expect(state.saved).toEqual([{ id: 3 }])
  })

  it('should handle SAVE_LISTING action type', () => {
    const existingState = {
      results: [{ id: 1 }, { id: 2 }],
      saved: [{ id: 3 }]
    }
    const state = reducer(existingState, {
      type: SAVE_LISTING,
      id: 1
    })
    expect(state.results).toEqual([{ id: 2 }])
    expect(state.saved).toEqual([{ id: 3 }, { id: 1 }])
  })

  it('should handle UNSAVE_LISTING action type', () => {
    const existingState = {
      results: [{ id: 1 }, { id: 2 }],
      saved: [{ id: 3 }]
    }
    const state = reducer(existingState, {
      type: UNSAVE_LISTING,
      id: 3
    })
    expect(state.results).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }])
    expect(state.saved).toEqual([])
  })
})
