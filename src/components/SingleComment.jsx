import { Button, ListGroup } from 'react-bootstrap'

const url = 'https://striveschool-api.herokuapp.com/api/comments/'
const apiKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTliZjU0NWUwZGQxZDAwMTgyZDE3MTciLCJpYXQiOjE3MDQ3MTk2ODUsImV4cCI6MTcwNTkyOTI4NX0.1fwo0ot_eP0U_kAOs1HTKlQXo-mh0MXO8df7dauyXWg";

const SingleComment = ({ comment }) => {
  const deleteComment = async (id) => {
    try {
      let response = await fetch(
        url + id,
        {
          method: 'DELETE',
          headers: {
            Authorization: apiKey,
          },
        }
      )
      if (response.ok) {
        alert('Comment was deleted successfully!')
      } else {
        alert('Error - comment was NOT deleted!')
      }
    } catch (error) {
      alert('Error - comment was NOT deleted!')
    }
  }

  return (
    <ListGroup.Item>
      {comment.comment}
      <Button
        variant="danger"
        className="ml-2"
        onClick={() => deleteComment(comment._id)}
      >
        Delete
      </Button>
    </ListGroup.Item>
  )
}

export default SingleComment
