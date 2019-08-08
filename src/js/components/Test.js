import React, { Component } from "react";
import ReactDOM from "react-dom";

class Test extends Component {
  constructor() {
    super();
    this.state = {
      seo_title: ""
    }
  }

  render() {
    const { seo_title } = this.state;
    return (
      <form id="article-form">
          <div>Test App</div>
      </form>
    );
  }
}
export default Test;