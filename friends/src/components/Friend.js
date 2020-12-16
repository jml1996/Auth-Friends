import React from 'react';

class Friend extends React.Component {
    render() {
        const { friend } = this.props;
        return(<div className="card">
            <p>Name: {friend.name}</p>
            <p>Age: {friend.age}</p>
            <p>email: {friend.email}</p>
        </div>);
    }
}

export default Friend;


//   {
//     id: 1,
//     name: 'Rachel Green',
//     age: 30,
//     email: 'rachel@friends.com'
//   },