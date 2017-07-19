import React from 'react';




// console.log(notes);
export default ({notes}) => (
	<ul>{notes.map(note => 
		<li key={notes.id}>{note.task}</li>
	)}</ul>
)
