import React from "react";

import Article from "grommet/components/Article";
import Section from "grommet/components/Section";
import Card from "grommet/components/Card";
import Anchor from "grommet/components/Anchor";
import Label from "grommet/components/Label";

export default class Post extends React.PureComponent {
  render() {
    const { user, tags, content, link } = this.props.post;
    const { colorIndex } = this.props;

    return (
      <Article colorIndex={colorIndex}>
        <Section pad="large">
          <Label size="small">From {user}</Label>
          <Card
            label={tags}
            heading={content}
            link={<Anchor href={link} label="Link" />}
          />
        </Section>
      </Article>
    );
  }
}
