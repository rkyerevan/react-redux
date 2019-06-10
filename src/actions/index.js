import _ from 'lodash'
import JsonPlaceholder from './../apis/JsonPlaceholder'

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPost());

    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value()
}



export const fetchPost = () => async dispatch => {
    const response = await JsonPlaceholder.get('/posts')
    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    })
};

export const fetchUser = id => async dispatch => {
    const response = await JsonPlaceholder.get(`/users/${id}`);
    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    })
}

