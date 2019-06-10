import React from 'react';
import {connect} from 'react-redux';
import { fetchPostsAndUsers } from "../actions";
import  UserHeader from './UserHeader';

class PostList extends React.Component {

    componentDidMount() {
        this.props.fetchPostsAndUsers()
    }

    renderList = () => {
        return this.props.posts.map(post => {
            return <div className="card" key={post.id}>
                <div className="content">
                    <div className="header">{post.title}</div>
                    <div className="description">
                        {post.body}
                    </div>
                </div>
                <UserHeader
                    userId = {post.userId}
                />
            </div>

        })
    }

    render() {
        return (
            <div>
                <h2 style={{paddingLeft: '10px'}}>Post List</h2>
                <div className="ui cards" style={{padding: '10px'}}>
                    {this.renderList()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {posts: state.posts}
}

export default connect(mapStateToProps, {fetchPostsAndUsers})(PostList)