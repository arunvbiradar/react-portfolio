import React from 'react';
import { myWorks } from './../data';
import Listing from './Common/Listing';

export default function MyWork() {
    const {subTitle, myWorksAvtar, projectSubTitle, projects} = myWorks;
    console.log(myWorks)
    return (
        <React.Fragment>
            <section className="hero-content-secondary works">
                <div className="blue-gray-gradient">
                    <div className="spacing-100"></div>
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-md-6">
                                <h2 className="display-1 font-normal mb-4">My <br /> Works</h2>
                                <h3 className="text-theme-secondary font-normal">{subTitle}</h3>
                                <div className="spacing-50"></div>
                            </div>
                            <div className="col-md-4">
                                <div className="card rounded-0 text-center"><img src={myWorksAvtar} alt="my works" className="img-fluid" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="projects">
                <div className="spacing-50"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h2 className="display-4 font-normal">Projects</h2>
                            <h3 className="text-theme-secondary font-normal mb-5">{projectSubTitle}</h3>
                        </div>
                    </div>
                    <Listing listItem={projects} />
                </div>
                <div className="spacing-50"></div>
            </section>
        </React.Fragment>
    )
}