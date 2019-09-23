import React from 'react';
import { landingStore, myWorks } from './../data';
import Listing from './Common/Listing';

export default function Landing(props) {
    const {author, authorAvtar, heroContent, heroSubContent, aboutSuperContent, aboutMe} = landingStore;
    const {subTitle, projects} = myWorks;
    return (
        <div className="main-content home">
            <section className="hero-content blue-gray-gradient">
                <div className="container">
                    <div className="spacing-150"></div>
                    <div className="jumbotron text-center bg-transparent">
                        <h1 className="display-3">{heroContent}<span className="text-theme-secondary d-block">{heroSubContent}</span></h1>
                    </div>
                    <div className="spacing-150"></div>
                </div>
            </section>
            <section className="profile bg-theme-light" id="profile">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h4 className="text-theme-secondary mb-4 font-normal">{aboutSuperContent}</h4>
                            <h2 className="display-1 font-noraml mb-4 author">{author}</h2>
                            <p className="mb-5">{aboutMe}</p>
                        </div>
                        <div className="col-md-4">
                            <div className="card rounded-0 text-center"><img src={authorAvtar} alt={author} className="img-fluid" /></div>
                        </div>
                    </div>
                </div>
                <div className="spacing-50"></div>
            </section>
            <section className="my-works">
                <div className="content">
                    <div className="spacing-50"></div>
                    <div className="container">
                        <h3 className="display-4 text-center font-normal">My Works</h3>
                        <h6 className="text-center mb-5 font-normal text-theme-secondary">{subTitle}</h6>
                        <Listing listItem={projects} type={'My Works'} />
                    </div>
                </div>
                <div className="spacing-50"></div>
                <div className="spacing-150"></div>
                <div className="spacing-150"></div>
            </section>
        </div>
    )
}