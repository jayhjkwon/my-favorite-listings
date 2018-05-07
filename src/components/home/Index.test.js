import React from 'react'
import { shallow, mount } from 'enzyme'
import { Index } from './Index'
import ListingItems from '../shared/ListingItems'
import Listing from '../shared/Listing'

it('should call fetchListings function after mounting component', () => {
  const props = {
    fetchListings: jest.fn(),
    results: [{ id: 1 }, { id: 2 }],
    saved: [{ id: 3 }]
  }
  const wrapper = shallow(<Index {...props} />)

  expect(props.fetchListings.mock.calls.length).toEqual(1)
})

it('should render ListingItems', () => {
  const props = {
    fetchListings: jest.fn(),
    results: [{ id: 1 }, { id: 2 }],
    saved: [{ id: 3 }]
  }
  const wrapper = shallow(<Index {...props} />)

  expect(wrapper.find(ListingItems).length).toEqual(2)
})

it('should render Listing', () => {
  const props = {
    fetchListings: jest.fn(),
    results: [
      {
        isSaved: false,
        price: '$726,500',
        agency: {
          brandingColors: {
            primary: '#ffe512'
          },
          logo:
            'http://i1.au.reastatic.net/agencylogo/XRWXMT/12/20120927204448.gif'
        },
        id: '1',
        mainImage:
          'http://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg'
      }
    ],
    saved: [
      {
        price: '$560,520',
        agency: {
          brandingColors: {
            primary: '#fcfa3b'
          },
          logo:
            'http://i4.au.reastatic.net/agencylogo/BFERIC/12/20150619122858.gif'
        },
        id: '2',
        mainImage:
          'http://i1.au.reastatic.net/640x480/88586227f9176f602d5c19cf06261108dbb29f03e30d1c4ce9fc2b51fb1e4bd6/main.jpg'
      }
    ]
  }
  const wrapper = mount(<Index {...props} />)

  expect(wrapper.find(Listing).length).toEqual(2)
})
