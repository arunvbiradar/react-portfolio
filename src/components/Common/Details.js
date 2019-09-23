import React from 'react';
import { Link } from 'react-router-dom';
import Info from './Info';

export default function Details({props, posts}) {
    const post = posts.find(item => item.id === parseInt(props.match.params.id));
    const {id, title, mainCategory, timeline, categories, imgDetail, heading, subTitle, info} = post;

    return (
        <React.Fragment>
            <section className="hero-content-secondary details">
                <div className="blue-gray-gradient">
                    <div className="spacing-100"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <h2 className="display-1 font-normal mb-4">{mainCategory} {id}</h2>
                                <h3 className="text-theme-secondary font-normal mb-4">{title}</h3>
                                <small className="text-muted mb-5 font-bold text-theme-primary d-block">Posted On: {timeline}</small>
                                <ul className="list-inline">
                                    {categories.map((item, index) => {
                                        return <li key={index} className="list-inline-item"><span className="badge badge-light">{item}</span></li>
                                    })}
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <div className="card rounded-0 text-center"><img src={imgDetail} alt={title} className="img-fluid" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="spacing-100"></div>
                </div>
            </section>
            <section className="blog-content">
                <div className="spacing-50"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h2 className="display-4 font-normal">{heading}</h2>
                            <h3 className="text-theme-secondary font-normal mb-5">{subTitle}</h3>
                        </div>
                    </div>
                    <Info info={info} />
                </div>
                <div className="spacing-50"></div>
            </section>
        </React.Fragment>
    )
}