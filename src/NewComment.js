import React from 'react'
import { useDatabasePush } from './database'

const NewComment = props => {
    const [, save] = useDatabasePush('comments')
    const [comment, setComment] = useState('')
    const createComment = () => {
      if(comment !== '') {
        save({ 
          createdAt: firebase.database.ServerValue.TIMESTAMP,
          content: comment,
          user: {
            id: '1',
            name: 'Tulio'
          }
        })
        setComment('')
      }
    }
}
export default NewComment