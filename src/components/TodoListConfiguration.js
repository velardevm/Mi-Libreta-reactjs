import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import PropTypes from 'prop-types'
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import './styles/TodoList.css'
import IconButton from '@mui/material/IconButton'
import SchoolIcon from '@mui/icons-material/School'
import PieChartIcon from '@mui/icons-material/PieChart'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon'
import { blue, red } from '@mui/material/colors'

const TodoListConfiguration = (props) => {
  const { todos, setTodos, setEditTodo, setVisible, visible } = props

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleEdit = (id) => {
    const findTodo = todos.find((todo) => todo.id === id)
    setEditTodo(findTodo)
    setVisible(!visible)
  }
  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <SchoolIcon sx={{ color: blue[100], marginTop: '7px', marginLeft: '5px' }} />
          <input
            type="text"
            value={todo.title}
            className="list"
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <IconButton
              aria-label="delete"
              onClick={() => {
                handleDelete(todo.id)
              }}
            >
              <HighlightOffIcon sx={{ color: red[500] }} />
            </IconButton>
            <IconButton
              aria-label="edit"
              onClick={() => {
                handleEdit(todo.id)
              }}
            >
              <AutoFixHighIcon sx={{ color: 'rgb(35, 144, 216)' }} />
            </IconButton>
          </div>
        </li>
      ))}
    </div>
  )
}

TodoListConfiguration.propTypes = {
  setInput: PropTypes.func,
  input: PropTypes.string,
  setTodos: PropTypes.func,
  todos: PropTypes.string,
  setEditTodo: PropTypes.func,
  visible: PropTypes.bool,
  setVisible: PropTypes.func,
}

export default React.memo(TodoListConfiguration)
