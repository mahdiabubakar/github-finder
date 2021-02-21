import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

import {
    SEARCH_USERS,
    SET_LOADING,
    GET_USERS,
    GET_USER,
    GET_REPOS,
    CLEAR_USERS
} from '../types';

const GithubState = (props) => {
    const initailState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    };

    const [state, dispatch] = useReducer(GithubReducer, initailState);

    // Search Users
    const searchUsers = async text => {
        setLoading();

        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);


        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        });

    };


    // Get User
    const getUser = async username => {
        setLoading();

        const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

        dispatch({
            type: GET_USER,
            payload: res.data
        });
    };

    // Set Loading

    // Get Users

    // Clear Users
    const clearUsers = () => dispatch({ type: CLEAR_USERS });

    // Get Repos
    const getUserRepos = async username => {

        setLoading();
        // this.setState({ loading: true });

        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=10&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

        // this.setState({ repos: res.data, loading: false });
        dispatch({
            type: GET_REPOS,
            payload: res.data
        });
        // setRepos(res.data);
        // setLoading(false);
    };

    // Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING });


    return (
        <GithubContext.Provider
            value={{
                users: state.users,
                user: state.user,
                loading: state.loading,
                repos: state.repos,
                searchUsers,
                clearUsers,
                getUser,
                getUserRepos
            }}
        >

            {props.children}
        </GithubContext.Provider>
    );
};

export default GithubState;