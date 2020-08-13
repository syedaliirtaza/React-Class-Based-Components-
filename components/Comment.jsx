import React from 'react';
import UserInfo from './UserInfo';

const Comment = (props) => {
    return (
        <div className="Comment">
        <UserInfo user={props.author} />
        <div className="Comment-text">
            {props.text}
        </div>
        <div className="Comment-date">
            {/* {formatDate(props.date)}} */}
        </div>
    </div>    
    );
}
export default Comment;