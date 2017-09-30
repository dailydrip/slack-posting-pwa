import React from "react";

import Article from "grommet/components/Article";
import Section from "grommet/components/Section";
import Card from "grommet/components/Card";
import App from "grommet/components/App";
import Headline from "grommet/components/Headline";
import Anchor from "grommet/components/Anchor";
import Label from "grommet/components/Label";
import Posts from "./Posts";

export default class AppContainer extends React.PureComponent {
  render() {
    return (
      <App>
        <Posts />
      </App>
    );
  }
}
