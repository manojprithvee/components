import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard><div><h4>Are you sure?</h4></div></ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author={faker.name.findName()}
                    timeAgo={faker.date.past().toDateString()}
                    avatar={faker.image.avatar()}
                    content={faker.lorem.sentence()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author={faker.name.findName()}
                    timeAgo={faker.date.past().toDateString()}
                    avatar={faker.image.avatar()}
                    content={faker.lorem.sentence()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author={faker.name.findName()}
                    timeAgo={faker.date.past().toDateString()}
                    avatar={faker.image.avatar()}
                    content={faker.lorem.sentence()}
                />
            </ApprovalCard>
        </div>
    );
};
ReactDOM.render(<App />, document.querySelector('#root'))