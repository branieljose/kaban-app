import React from 'react';
import uuid from 'uuid';
import Notes from './Notes';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn React'
        },
        {
          id: uuid.v4(),
          task: 'Do laundry'
        }
      ],
      count: [
          {
              counter: 0
        }
      ]
    };
  }

  render() {
    const {notes} = this.state;
    const {count} = this.state;

    return (
        <div>
          <div>
            <button onClick={this.addNote}>+</button>
            <Notes notes={notes} onDelete={this.deleteNote} />
          </div>
        </div>
    );
  }

    addNote = () => {
        this.setState({
            notes: this.state.notes.concat([{
                id: uuid.v4(),
                task: 'New Task'
            }])
        });
    }

	deleteNote = (id, e) => {
      //avoid bubbling to edit
        e.stopPropagation();

		this.setState({
            notes: this.state.notes.filter(note => note.id !== id)

		});
	}
}


