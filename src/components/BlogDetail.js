import React from 'react';
import Details from './Common/Details';
import { posts } from './../data';

export default function Blog(props) {
    return <Details props={props} posts={posts.articles} />
}