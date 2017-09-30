import React from "react";

import Article from "grommet/components/Article";
import Section from "grommet/components/Section";
import Card from "grommet/components/Card";
import Anchor from "grommet/components/Anchor";
import Label from "grommet/components/Label";
import Post from "./Post";

export default class Posts extends React.PureComponent {
  render() {
    const posts = [
      {
        content: "Content",
        user: "Josh",
        tags: "tag1, tag2",
        link: "https://www.dailydrip.com"
      },
      {
        content: "Content",
        user: "Josh",
        tags: "tag1, tag2",
        link: "https://www.dailydrip.com"
      },
      {
        content: "Content",
        user: "Josh",
        tags: "tag1, tag2",
        link: "https://www.dailydrip.com"
      }
    ];

    const renderPosts = posts.map((post, i) => {
      let colorIndex;

      if (i % 2 == 0) {
        colorIndex = "grey-4";
      } else {
        colorIndex = "grey-3";
      }

      return <Post post={post} colorIndex={colorIndex} />;
    });
    return <div>{renderPosts}</div>;
  }
}
