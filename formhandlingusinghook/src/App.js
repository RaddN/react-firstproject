import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import loginimg from "./12953573_Data_security_05.jpg";
import React, {useState} from 'react';
function App() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
  return (
    <div className="App">
      <header className="App-header">
        <h1>Authintication Portal</h1>
        <div className="row">
          <div className="col-md-6">
            <img src={loginimg} alt="" width="500px" />
          </div>
          <div className="col-md-6 my-auto bg-dark p-5 text-light rounded">
            <form className="float-start" onSubmit={()=>alert(`username: ${email} \n password: ${password}`)}>
              <div className="form-group">
                <label className="float-start" htmlFor="exampleInputEmail1">Email address</label>
                <input
                value={email}
                onChange={(data)=>setEmail(data.target.value)}
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label className="float-start" htmlFor="exampleInputPassword1">Password</label>
                <input
                value={password}
                onChange={(data)=>setPassword(data.target.value)}
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="btn btn-primary float-start mt-1">
                Submit
              </button>
            </form>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
