import React, { Component, useEffect, useState } from "react";
import axios from "axios";
export default class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [{}],
    };
  }

  async getData() {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    this.setState({
      userData: await data.json(),
    });
  }
  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <div className="container">
        <div className="row row-cols-md-2 row-cols-lg-3">
          {this.state.userData.map((value) => (
            <div className="col mb-4" key={value.id}>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://raddn.github.io/images/mewebp.webp"
                  className="card-img-top"
                  alt="..."
                  height={350}
                />
                <div className="card-body">
                  <h5 className="card-title">{value.name}</h5>
                  <p className="card-text">{value.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <UsingAxios />
      </div>
    );
  }
}

export const UsingAxios = () => {
  const [mydata, setMyData] = useState([{}]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        setMyData(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  });
  return (
    <div className="container testimonial-group">
      <div className="row">
        <h1>using axios</h1>
        {mydata.map((value) => (
          <div className="col mb-4" key={value.id}>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://raddn.github.io/images/mewebp.webp"
                className="card-img-top"
                alt="..."
                height={350}
              />
              <div className="card-body">
                <h5 className="card-title">{value.name}</h5>
                <p className="card-text">{value.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
