import React from "react";

import Article from "grommet/components/Article";
import Section from "grommet/components/Section";
import Card from "grommet/components/Card";
import Label from "grommet/components/Label";

export default class Post extends React.PureComponent {
  render() {
    const { user_name, tags, text, link } = this.props.post;
    const { colorIndex } = this.props;
    const tagsString = tags.map(x => x.name).join(",");

    return (
      <Article colorIndex={colorIndex}>
        <Section pad="large">
          <Label size="small">From {user_name}</Label>
          <Card label={tagsString} heading={text} />
        </Section>
      </Article>
    );
  }
}
