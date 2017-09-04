import React from 'react';
import Note from './Note';



export default ({notes, onNoteClick=() => {}, onEdit=() => {}, onDelete=() => {} }) => (
	<ul>{notes.map(({id, editing, task}) =>
		<li key={id}>
			//v1
			// <Note
			// 	onDelete={onDelete.bind(null, id)}
			// 	task={task} />
			<Note>
				<span>{task}</span>
				<button onClick={onDelete.bind(null, id)}>x</button>
			</Note>
		</li>
	)}</ul>
)