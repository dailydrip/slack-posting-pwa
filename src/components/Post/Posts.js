import React from "react";

import Article from "grommet/components/Article";
import Section from "grommet/components/Section";
import Card from "grommet/components/Card";
import Anchor from "grommet/components/Anchor";
import Label from "grommet/components/Label";
import Post from "./Post";
import Api from "../../api/Api";

export default class Posts extends React.PureComponent {
  constructor() {
    super();
    this.state = { posts: [] };
  }

  componentDidMount() {
    Api.getPosts().then(response => {
      const posts = response.data;
      this.setState({ posts: posts });
    });
  }
  render() {
    const renderPosts = this.state.posts.map((post, i) => {
      let colorIndex;

      if (i % 2 == 0) {
        colorIndex = "grey-4";
      } else {
        colorIndex = "grey-3";
      }

      return <Post key={i} post={post} colorIndex={colorIndex} />;
    });
    return <div>{renderPosts}</div>;
  }
}
