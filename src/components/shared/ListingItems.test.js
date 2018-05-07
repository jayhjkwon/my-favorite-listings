import React from 'react'
import { shallow, mount } from 'enzyme'
import ListingItems from './ListingItems'
import Listing from './Listing'

it('should render listings', () => {
  const props = {
    isSaved: false,
    listings: [{ id: 1 }, { id: 2 }]
  }
  const wrapper = shallow(<ListingItems {...props} />)

  expect(wrapper.find(Listing).length).toEqual(2)
})
