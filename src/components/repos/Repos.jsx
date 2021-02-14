import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';


const Repos = ({ repos }) => {
    return repos.map(repo => <RepoItem repo={repo} key={repo.id} />);
    // return repos.map(repo => <Fragment>
    //     <h1>Repos</h1>
    //     <RepoItem repo={repo} key={repo.id} />
    // </Fragment>);

};

Repos.prototype = {
    repos: PropTypes.array.isRequired,
};

export default Repos;