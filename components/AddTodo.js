import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <React.Fragment>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        {/*Material UI components doesn't support ref instead use inputRef */}
        <TextField id="outlined-basic" inputRef={node => (input = node)} variant="standard" />
        <Button type="submit" variant="outlined">Add Todo</Button>
      </form>
    </React.Fragment>
  )
}
export default connect()(AddTodo);