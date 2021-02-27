import { CREATE_POST, FETCH_POSTS } from '../types';

export const postReducer = (state = {}, action) => {
	switch (action.type) {
		case FETCH_POSTS:
			return {
				...state,
				...action.payload.reduce((acc, post) => {
					acc[post.id] = post;
					return acc;
				}, {}),
			};
			break;
		case CREATE_POST:
			return { ...state, [action.payload.id]: action.payload };
			break;
		default:
			return state;
	}
};
