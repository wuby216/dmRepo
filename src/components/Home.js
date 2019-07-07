import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from "../actions/postActions"
import PropTypes from 'prop-types';
import Cards from './Cards';
import Spinner from './Spinner';

class Home extends React.Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    getPanelContent = () => {
        const isLoading = this.props.isLoading;

        return (isLoading ?
                <div style={{marginLeft:'670px', marginTop:'100px'}}>
                    <Spinner />
                </div> : <Cards />
        );
    }

    render() {
        return (
            <div className="home">
                {this.getPanelContent()}
            </div>
        );
    }
}

Home.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    isLoading: state.posts.isLoadingPosts
});

export default connect(mapStateToProps, { fetchPosts })(Home);