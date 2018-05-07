import React from 'react'
import Listing from './Listing'

export default props => {
  return (
    <div>
      {props.listings &&
        props.listings.map(listing => (
          <Listing
            key={listing.id}
            {...listing}
            {...props}
            isSaved={props.isSaved}
          />
        ))}
    </div>
  )
}
