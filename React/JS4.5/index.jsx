class TodoList extends React.Component {
    render() {
        return (
          <div className="todoListMain">
            <div className="header">
              <form onSubmit={this.addItem}>
                <input placeholder="enter task">
                </input>
                <button type="submit">add</button>
                <ul>
                    <li>Задача 1</li>
                    <li>Задача 2</li>
                    <li>Задача 3</li>
                    <li>Задача 4</li>
                    <li>Задача 5</li>
                </ul>
              </form>
            </div>
          </div>
        );
      }
}
ReactDOM.render(
    <TodoList></TodoList>,
    document.getElementById("app")
)
