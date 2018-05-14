import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';

const initialState = {
	tasks: []
};

function tasksReducer(state = initialState, action) {
	switch (action.type) {
		case 'ADD_TASK':
			return {
				...state,
				tasks: state.tasks.concat([action.payload.task])
			};
		default:
			return state;
	}
}

const store = createStore(tasksReducer);

function handleChange() {
	console.log(store.getState());
	console.log(store.getState().tasks);
}

const unsubscribe = store.subscribe(handleChange)

const addTask = (task) => ({
	type: 'ADD_TASK',
	payload: {
		task
	}
});

store.dispatch(addTask('Storeを学ぶ'));

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
