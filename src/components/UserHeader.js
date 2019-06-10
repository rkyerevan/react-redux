import React from 'react';

import { connect } from 'react-redux'

class UserHeader extends React.Component {


    render() {

        const {user} = this.props;

        if(!user){
            return null
        }

        return (
            <div style={{paddingLeft: '10px', paddingBottom: '10px'}}>
                <strong>Author:</strong> {user.name}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {

    return {user: state.users.find(user => user.id === ownProps.userId)}
}

export default connect(mapStateToProps)(UserHeader);