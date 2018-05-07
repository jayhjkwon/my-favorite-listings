import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actionCreators } from '../../store/listings'
import styled from 'styled-components'
import ListingItems from '../shared/ListingItems'

export class Index extends Component {
  componentDidMount() {
    this.props.fetchListings()
  }

  render() {
    return (
      <HomePageContainer>
        <Grid>
          <Row>
            <Col sm={5} smOffset={2}>
              <ListingsContainer>
                <h3>Results</h3>
                <ListingItems
                  listings={this.props.results}
                  isSaved={false}
                  {...this.props}
                />
              </ListingsContainer>
            </Col>
            <Col sm={3}>
              <ListingsContainer>
                <h3>Saved Properties</h3>
                <ListingItems
                  listings={this.props.saved}
                  isSaved={true}
                  {...this.props}
                />
              </ListingsContainer>
            </Col>
          </Row>
        </Grid>
      </HomePageContainer>
    )
  }
}

const HomePageContainer = styled.div`
  padding: 2rem 0;
`

const ListingsContainer = styled.div`
  margin-bottom: 15px;
  padding: 20px;
  border: solid 1px #ddd;
  border-radius: 5px;

  h3 {
    margin: 0 0 10px 0;
  }
`

export default connect(
  state => state.listingsState,
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Index)
