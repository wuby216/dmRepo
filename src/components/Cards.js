import React, {Component} from 'react';
import { COMMENT_ICON, CROWN_ICON, LIKE_EMPTY_ICON, LIKE_FILLED_ICON, SHARE_ICON } from '../constants';
import {connect} from "react-redux"
// import { toggleLiked } from "../actions/likeAction";
// import { fetchLiked } from "../actions/likeAction";
import { pressLike } from "../actions/postActions";
import PropTypes from 'prop-types';


class Cards extends Component {

    // componentDidMount() {
    //     if (this.props.items) {
    //         this.props.fetchLiked(this.props.items['current_user']['liked_designs']);
    //     }
    // }

    handleLike = (e) => {
        // this.props.toggleLiked(this.props.like.liked, e.target.id);
        this.props.pressLike(this.props.items, e.target.id);
    }

    renderCards = () => {
        const resItems = this.props.items;
        let cards = [];
        if (resItems.length !== 0) {
            cards = resItems['designs'];
        }

        return (
            cards ? cards.map(card => (
                <div className="card" key={card.id}>

                    <div className="user-info">
                        <img className="profile-pic"
                             src={resItems.users[card.user].image}
                             alt=''
                        />
                        <div className="login-info">
                            <div className="account-info">
                                <p className="user-name">{resItems.users[card.user].name}</p>
                                <img className="crown"
                                     src={resItems.users[card.user].crown ? CROWN_ICON : ''}
                                     alt=''
                                />
                            </div>
                            <p className='post-time'>{resItems.users[card.user].last_sign_in} min ago</p>
                        </div>
                    </div>

                    <img className="image"
                         src={card.image}
                         alt=''
                    />

                    <div className="interaction-icon">
                        <img className="heart-icon" id={card.id} onClick={this.handleLike}
                             src={this.props.items.current_user.liked_designs.includes(card.id) ?
                                 LIKE_FILLED_ICON :
                                 LIKE_EMPTY_ICON}
                             // src={this.props.like.liked.includes(card.id) ? LIKE_FILLED_ICON : LIKE_EMPTY_ICON}
                             alt=''
                        />
                        <img className="comment-icon"
                             src={COMMENT_ICON}
                             alt=''
                        />
                        <img className="share-icon"
                             src={SHARE_ICON}
                             alt=''
                        />
                    </div>

                    <div className="title">
                        <p className="user-name">{resItems.users[0].name}</p>
                        <p className="title-content">{card.title}</p>
                    </div>

                    <div className="post-status">
                        <p>{card.likes} likes, {card.comments} comments</p>
                    </div>

                </div>
            )) : ""
        );
    }

    render() {
        return (
            <div className="cards">
                {this.renderCards()}
            </div>
        );
    }
}

Cards.propTypes = {
    items: PropTypes.object.isRequired,
    pressLike: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    // like: state.like,
    items: state.posts.items
});

export default connect(mapStateToProps, { pressLike })(Cards);
