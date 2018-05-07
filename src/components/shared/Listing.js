import React from 'react'
import styled from 'styled-components'
import { Button } from 'react-bootstrap'

const Listing = props => {
  const onActionButtonClick = e => {
    if (props.isSaved) {
      props.unSaveListing(props.id)
    } else {
      props.saveListing(props.id)
    }
  }

  return (
    <ListingContainer>
      <Header backgroundColor={props.agency.brandingColors.primary}>
        <img
          src={props.agency.logo}
          className="img-responsive"
          alt={props.agency.logo}
        />
      </Header>

      <Body>
        <img
          src={props.mainImage}
          className="img-responsive"
          alt={props.mainImage}
        />
        <Button
          className="btn-action"
          bsStyle={props.isSaved ? 'danger' : 'primary'}
          onClick={onActionButtonClick}
        >
          {props.isSaved ? 'Remove property' : 'Add property'}
        </Button>
      </Body>

      <Footer>
        <span className="price">{props.price}</span>
      </Footer>
    </ListingContainer>
  )
}

const ListingContainer = styled.div`
  padding: 10px;
`

const Header = styled.div`
  background-color: ${props => props.backgroundColor}
  padding: 5px 0 0 5px
`

const Body = styled.div`
  background-color: #eee;
  & img {
    width: 100%;
  }

  & button {
    opacity: 0;
    margin-top: -100px;
  }

  &:hover button {
    opacity: 1;
  }
`

const Footer = styled.div`
  background-color: #eee;
  text-align: left;
  padding: 0 0 15px 15px;
`

export default Listing
