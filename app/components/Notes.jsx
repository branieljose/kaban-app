import React from 'react';
import Note from './Note';




// console.log(notes);
export default ({notes}) => (
	<ul>{notes.map(note => 
		<li key={notes.id}><Note task={note.task} /></li>
	)}</ul>
)
