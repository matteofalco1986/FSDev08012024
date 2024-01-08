import { Component } from 'react'
import SingleBook from './SingleBook'
import CommentArea from './CommentArea'
import { Col, Form, Row } from 'react-bootstrap'

class BookList extends Component {
  state = {
    searchQuery: '',
    asin: ''
  }

  setStateOfApp = (newAsin) => {
    this.setState({
      asin: newAsin
    })
  }

  componentDidUpdate(){
    console.log('booklist did update')
  }

  render() {
    return (
      <>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Search a book</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search here"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <div className='d-flex justify-content-between'>
          <Row className='books'>
            {this.props.books
              .filter((b) =>
                b.title.toLowerCase().includes(this.state.searchQuery)
              )
              .map((b) => (
                <Col xs={12} md={4} key={b.asin}>
                  <SingleBook book={b} />
                </Col>
              ))}
          </Row>
          <Row className='comments'>
            <Col>
              <CommentArea asin={this.state.asin}/>
            </Col>
          </Row>
        </div>
      </>
    )
  }
}

export default BookList
