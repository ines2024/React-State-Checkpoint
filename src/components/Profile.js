import React, { Component } from "react";

let Style = {
  fontFamily: "Roboto",
  fontSize: "50px",
  textTransform: "uppercase",
  color: "cadetblue",
};

let bioTag = {
  fontFamily: "Roboto",
  fontSize: "18px",
  color: "rgb(226, 140, 60)",
  width: "70%",
  margin: "10px auto",
};
let prof = {
  width: "40%",
  fontFamily: "Roboto",
  fontSize: "15px",
  color: "rgb(87, 85, 85)",
  margin: "10px auto",
};
let pictureStyle = {
  width: "200px",
  height: "200px",
  borderRadius: "50%",
  marginTop: "20px",
};

export default class Profile extends Component {
  constructor(props) {
    super();
    this.state = {
      fullName: "Ines Lahbib",
      bio: "Hi 👋 So glad to have you around !! I'm a FULLSTACK JS DEVELOPER 😉 ",
      imgSrc:
        "https://img.freepik.com/photos-gratuite/femme-qui-travaille_329181-11695.jpg",
      profession: "FULL STACK DEVELOPER",
      Time: 0,
      Shows: true,
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ Time: this.state.Time + 1 });
    }, 1000);
  }
  Showing = () => {
    this.setState({ Shows: !this.state.Shows });
  };

  render() {
    return (
      <div>
        <img style={pictureStyle} src={this.state.imgSrc} alt="Img" />
        <h1 style={Style}>{this.state.fullName}</h1>
        <h2 style={bioTag}>{this.state.bio}</h2>
        <p style={prof}>{this.state.profession}</p>
        <br />
        <h2
          style={prof}
        >{`This component was last mounted ${this.state.Time}s ago`}</h2>
      </div>
    );
  }
}