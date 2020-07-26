import React from 'react';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const TestOne = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>Warning!</h4>
                Are you sure, Do you want to do this?
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Sachin"
                    timeAgo="Today at 4:00PM"
                    content="this is the comment 1"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Abinaya"
                    timeAgo="Today at 4:00PM"
                    content="this is the comment 2"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Yohan"
                    timeAgo="Today at 4:00PM"
                    content="this is the comment 3"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

export default TestOne;