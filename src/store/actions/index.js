import { CREATE_POST, FETCH_POSTS } from '../types';
import history from '../../history';
import posts from '../../apis/posts';

const createPost = (formValues) => async (dispatch) => {
	const response = await posts.post('/posts', formValues);
	dispatch({ type: CREATE_POST, payload: response.data });
	history.push('/');
};

const fetchPosts = () => async (dispatch) => {
	const { data } = await posts.get('/posts');
	dispatch({ type: FETCH_POSTS, payload: data });
};

export { createPost, fetchPosts };
