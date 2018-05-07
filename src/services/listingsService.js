import { mockedListings } from './mockedListings'

class ListingsService {
  async fetchListings() {
    try {

      // just use mocked data
      return mockedListings

      // const response = await fetch('/api/listings')
      // const json = await response.json()

      // if (response.ok) {
      //   return json
      // }

      // throw json
    } catch (error) {
      throw error
    }
  }
}

export default new ListingsService()
