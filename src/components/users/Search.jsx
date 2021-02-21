import React, { useContext, useState, } from 'react';
import GithubContext from '../../context/github/githubContext';
import PropTypes from 'prop-types';


const Search = ({ setAlert }) => {

    const githubContext = useContext(GithubContext);

    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            setAlert('Please Enter Something', 'light');
        } else {
            githubContext.searchUsers(text);
            setText('');
        }
    };

    const onChange = (e) => setText(e.target.value);

    return (
        <div>
            <form className='form' onSubmit={onSubmit} >
                <input
                    type="text"
                    placeholder='Search Users...'
                    name='text'
                    value={text}
                    onChange={onChange}
                />
                <input
                    type="submit"
                    value="Search"
                    className='btn btn-block btn-dark'
                />
            </form>
            {githubContext.users.length > 0 && <button
                className="btn btn-block btn-light"
                onClick={githubContext.clearUsers}
            >
                Clear
                </button>}

        </div>
    );
};


Search.propTypes = {
    setAlert: PropTypes.func.isRequired
};

export default Search;
