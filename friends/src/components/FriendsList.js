import React from 'react';
import { axiosWithAuth } from './../utils/axiosWithAuth';
import Friend from './Friend';

class FriendsList extends React.Component {
    state = {
      friendsList: []
    };
  
    componentDidMount() {
      this.getData();
    }
  
    getData = () => {
      axiosWithAuth()
        .get('/api/friends')
        .then((res)=>{
          console.log("data: ", res);
  
          this.setState({
            friendsList: res.data
          });
        })
        .catch((err)=>{
          console.log(err);
        })
    };
  
    render() {
      return (
          <div>
              {
                  this.state.friendsList.map((friend, index) => {
                      return <Friend className="card" key={index} friend={friend} />
                  })
              }
          </div>
      );
    }
  }
  
  export default FriendsList;


//   {
//     this.props.isLoading ? (<div>Loading</div>) : (smurfs.map((smurf, index) => {
//             return <Smurf key={index} smurf={smurf} />
//         }))
//     }
   
    // formatData = () => {
    //   const formattedData = [];
      
    //   this.state.gasPrices.forEach((price, index, arr) => {
    //     if (price.location === 'US') {
    //       formattedData.push({
    //         date: moment(price.date).format('MMM'),
    //         USPrice: price.price,
    //         HawaiiPrice: arr[index + 1].price
    //       });
    //     }
    //   });
    //   return formattedData;
    // };
  