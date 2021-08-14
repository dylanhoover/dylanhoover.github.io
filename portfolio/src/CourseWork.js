import React, { Component } from "react";
import CodeElement from "./CodeElement";

class CourseWork extends Component {
  render() {
    return (
      <div>
        <h2>CourseWork Repository Links</h2>
        <div id="CodeContainer">
        <CodeElement title={"COEN 11"} link={"https://github.com/dylanhoover/SCU-Coursework/tree/main/COEN11"} />
        <CodeElement title={"COEN 12"} link={"https://github.com/dylanhoover/SCU-Coursework/tree/main/COEN12"} />
        <CodeElement title={"COEN 140"} link={"https://github.com/dylanhoover/SCU-Coursework/tree/main/COEN140"} />
        <CodeElement title={"COEN 146"} link={"https://github.com/dylanhoover/SCU-Coursework/tree/main/COEN146"} />
        <CodeElement title={"COEN 148"} link={"https://github.com/dylanhoover/SCU-Coursework/tree/main/COEN148"} />
        <CodeElement title={"COEN 177"} link={"https://github.com/dylanhoover/SCU-Coursework/tree/main/COEN177"} />
        <CodeElement title={"COEN 79"} link={"https://github.com/dylanhoover/SCU-Coursework/tree/main/COEN79"} />
        </div>
      </div>
    );
  }
}

export default CourseWork;
