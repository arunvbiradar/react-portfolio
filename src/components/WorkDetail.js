import React from 'react';
import Details from './Common/Details';
import { myWorks } from './../data';

export default function Work(props) {
    return <Details props={props} posts={myWorks.projects} />
}