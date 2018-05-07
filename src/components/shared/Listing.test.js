import React from 'react'
import { shallow, mount } from 'enzyme'
import { Button } from 'react-bootstrap'
import Listing from './Listing'

it('should display price', () => {
  const props = {
    isSaved: false,
    price: '$726,500',
    agency: {
      brandingColors: {
        primary: '#ffe512'
      },
      logo: 'http://i1.au.reastatic.net/agencylogo/XRWXMT/12/20120927204448.gif'
    },
    id: '1',
    mainImage:
      'http://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg'
  }
  const wrapper = shallow(<Listing {...props} />)

  expect(wrapper.find('.price').text()).toEqual('$726,500')
})

it('should render add property button if listing is not saved', () => {
  const props = {
    isSaved: false,
    price: '$726,500',
    agency: {
      brandingColors: {
        primary: '#ffe512'
      },
      logo: 'http://i1.au.reastatic.net/agencylogo/XRWXMT/12/20120927204448.gif'
    },
    id: '1',
    mainImage:
      'http://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg'
  }
  const wrapper = mount(<Listing {...props} />)

  expect(wrapper.find('button.btn-action').text()).toEqual('Add property')
})

it('should call saveListing function if listing is not saved', () => {
  const props = {
    isSaved: false,
    saveListing: jest.fn(),
    price: '$726,500',
    agency: {
      brandingColors: {
        primary: '#ffe512'
      },
      logo: 'http://i1.au.reastatic.net/agencylogo/XRWXMT/12/20120927204448.gif'
    },
    id: '1',
    mainImage:
      'http://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg'
  }
  const wrapper = mount(<Listing {...props} />)

  const button = wrapper.find('button.btn-action')
  button.simulate('click')

  expect(props.saveListing.mock.calls.length).toEqual(1)
})

it('should render remove property button if listing is saved', () => {
  const props = {
    isSaved: true,
    price: '$726,500',
    agency: {
      brandingColors: {
        primary: '#ffe512'
      },
      logo: 'http://i1.au.reastatic.net/agencylogo/XRWXMT/12/20120927204448.gif'
    },
    id: '1',
    mainImage:
      'http://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg'
  }
  const wrapper = mount(<Listing {...props} />)

  expect(wrapper.find('button.btn-action').text()).toEqual('Remove property')
})

it('should call unSaveListing function if listing is already saved', () => {
  const props = {
    isSaved: true,
    unSaveListing: jest.fn(),
    price: '$726,500',
    agency: {
      brandingColors: {
        primary: '#ffe512'
      },
      logo: 'http://i1.au.reastatic.net/agencylogo/XRWXMT/12/20120927204448.gif'
    },
    id: '1',
    mainImage:
      'http://i2.au.reastatic.net/640x480/20bfc8668a30e8cabf045a1cd54814a9042fc715a8be683ba196898333d68cec/main.jpg'
  }
  const wrapper = mount(<Listing {...props} />)

  const button = wrapper.find('button.btn-action')
  button.simulate('click')

  expect(props.unSaveListing.mock.calls.length).toEqual(1)
})
