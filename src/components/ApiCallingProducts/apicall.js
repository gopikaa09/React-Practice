// import { Component } from "react";
// import axios from 'axios'


// class ApiCalling extends Component{
//     constructor(){
//         super();
//         this.state={
//             data:null,
//             error:null,
//         }
//     }

//     componentDidMount(){
//         axios.get('https://fakestoreapi.com/carts')
//         .then(response=>{
//             this.setState({data:response.data})
//             console.log(response.data);
//         }).catch(error=>{
//             this.setState({error:error})
//         });
//     }
//     render(){
//         const {data,error}=this.state
//         return(
//             <div>
//             {data ? (
//               <div>
//                 <h1>ID: {data.id}</h1>
//                 <p>User ID: {data.userId}</p>
//                 <p>Date: {data.date}</p>
//                 <p>Products: {data.products}</p>
                
//               </div>
//             ) : error ? (
//               <p>Error: {error.message}</p>
//             ) : (
//               <p>Loading...</p>
//             )}
//           </div>
//         )
//     }
// }
// export default ApiCalling;



import { Component } from "react";
import axios from 'axios'

class ApiCalling extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      error: null,
    };
  }

  componentDidMount() {
    axios.get('https://fakestoreapi.com/carts')
      .then(response => {
        if (response.data.length > 0) {
            for(let i=0;i<response.data.length;i++){
          this.setState({ data: response.data[i] });
          console.log(response.data[i]);
            }
        } else {
          this.setState({ error: "No data found" });
        }
      })
      .catch(error => {
        this.setState({ error: error });
      });
  }

  render() {
    const { data, error } = this.state;

    return (
      <div>
        {data ? (
          <div>
            <h1>ID: {data.id}</h1>
            <p>User ID: {data.userId}</p>
            <p>Date: {data.date}</p>
            <p>Products: {JSON.stringify(data.products)}</p>
          </div>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default ApiCalling;
