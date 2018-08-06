import logo from '../logo.svg';
import '../App.css';
import {Switch, Route,Link,Redirect} from 'react-router-dom'
import '../css/home.css'
/*import data from Google API here*/

class Home extends Component {
  constructor(props){
    super(props)
      this.state= {
        clickRedirect: false
        redirect:''
      }
    }

submitForm = (e) => {
  e.preventDefault()
  this.setState({ clickRedirect: true, redirect:'/results'})
}
render(){
  const { from } = this.props.location.state || '/'
  const { clickRedirect } = this.state.clickRedirect
  const {redirect}=this.state.redirect
  return(
    <div>
    <form onSubmit={this.submitForm}>
        <button type="submit">Submit</button>
      </form>
      {clickRedirect && (
        <Redirect to={from || redirect}/>
      )}
    </div>
    );
}

export default redirectbutton
