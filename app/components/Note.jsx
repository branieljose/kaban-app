import React from 'react';



export default ({children, ..props}) => (
	<div {..props}>
		{children}
	</div>
);


//v1
// export default ({task, onDelete}) => (
// 	<div>
// 		<span>{task}</span>
// 		<button onClick={onDelete}>X</button>
// 	</div>	
// );

