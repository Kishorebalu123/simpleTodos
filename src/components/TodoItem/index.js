import './index.css'

const TodoItem = props => {
  const {TodoItemDetails, deleteTodo} = props
  const {title, id} = TodoItemDetails

  const onClickButton = () => {
    deleteTodo(id)
  }

  return (
    <li>
      <div className="list-container">
        <p>{title}</p>
        <button type="button" onClick={onClickButton}>
          Delete
        </button>
      </div>
    </li>
  )
}
export default TodoItem
