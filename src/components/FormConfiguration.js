import React, { useState, useEffect } from 'react'
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
import TodoListConfiguration from './TodoListConfiguration'
import { v4 as uuidV4 } from 'uuid'
import { ModalConfiguration } from './Modals'

const FormConfiguration = (props) => {
  const { todos, setTodos, input, setInput, cardTitle, editTodo, setEditTodo, titleButton } = props
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title)
    } else {
      setInput('')
    }
  }, [setInput, editTodo])

  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) => (todo.id === id ? { title, id, completed } : todo))
    setTodos(newTodo)
    setEditTodo('')
  }

  const onFormSubmit = (event) => {
    event.preventDefault()
    if (!editTodo) {
      setTodos([...todos, { id: uuidV4(), title: input, completed: false }])
      setInput('')
    } else {
      updateTodo(input, editTodo.id, editTodo.completed)
    }
  }
  return (
    <CRow className="justify-content-md-center">
      <CCol xs lg="8">
        <CCard border="light" className="bg-white shadow-sm">
          <CCardHeader>
            <strong>{cardTitle}</strong>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol md={12}>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <ModalConfiguration
                    input={input}
                    setInput={setInput}
                    onFormSubmit={onFormSubmit}
                    message={'TEes'}
                    modalBody={'¿Está seguro de enviar los reportes seleccionados?'}
                    visible={visible}
                    setVisible={setVisible}
                    title={titleButton}
                  />
                </div>
              </CCol>
            </CRow>
            <TodoListConfiguration
              todos={todos}
              setTodos={setTodos}
              setEditTodo={setEditTodo}
              visible={visible}
              setVisible={setVisible}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

FormConfiguration.propTypes = {
  setInput: PropTypes.func,
  input: PropTypes.string,
  setTodos: PropTypes.func,
  todos: PropTypes.object,
  cardTitle: PropTypes.string,
  editTodo: PropTypes.string,
  setEditTodo: PropTypes.func,
  titleButton: PropTypes.string,
}

export default React.memo(FormConfiguration)
