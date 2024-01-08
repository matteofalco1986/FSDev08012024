import { Component } from 'react'
import { Card } from 'react-bootstrap'
import CommentArea from './CommentArea'

class SingleBook extends Component {
  state = {
    selected: false,
  }

  checkSelected = (value) => {
    if (value === this.state.selected) {
      return 'selected';
    }
    return '';
  }



  render() {
    return (
      <>
        <Card
          onClick={() => {
            // this.props.setStateOfApp(this.props.book.asin);
            this.setState({selected: !this.state.selected});
            (this.state.selected ? console.log(this.props.book.asin) : console.log('miao'))
          }}
          style={{ border: this.state.selected ? '3px solid red' : 'none' }}
        >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title style={{ color: 'black' }}>
              {this.props.book.title}
            </Card.Title>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default SingleBook
