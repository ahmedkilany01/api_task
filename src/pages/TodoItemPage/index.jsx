import React, { Component } from 'react';
import TODOS from '../../mock/todos';
import WithParams from '../../components/WithParams';
import { Link, Navigate } from 'react-router-dom';

class TodoItemPage extends Component {
  state = {
    todoItem: {},
  };

  componentDidMount() {
    const todoItem = TODOS.find((todo) => todo.id === +this.props?.params?.id);
    // const todoItemWithName = TODOS.find(
    //   (todo) => todo.id === +this.props?.params?.name
    // );
    console.log(todoItem);

    if (!todoItem) {
      this.setState({ isRedirect: true });
    }
    // if (!todoItemWithName) {
    //   this.setState({ isRedirect: true });
    // }

    this.setState({ todoItem });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Todo Item Page {this.state.todoItem?.id} </h1>

        <p>description: {this.state.todoItem?.title}</p>
        <p>
          completed:
          {this.state.todoItem?.isCompleted ? 'completed' : 'not completed'}
        </p>
        <Link to='2'>Go to another page in same nest</Link>
        {this.state.isRedirect && <Navigate to='404' replace={true} />}
      </div>
    );
  }
}

export default WithParams(TodoItemPage);
