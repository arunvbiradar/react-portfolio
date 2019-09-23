import React from 'react';
import { posts, categories } from '../data';
import Listing from './Common/Listing';

export default function Blog() {
    const {heroContent, articles, heroSubContent} = posts;
    console.log(categories)
    return (
        <React.Fragment>
            <section className="hero-content-secondary">
                <div className="blue-gray-gradient">
                    <div className="spacing-100"></div>
                    <div className="container">
                        <div className="jumbotron bg-transparent">
                            <h1 className="display-3 text-center">{heroContent}</h1>
                            <div className="search-bar text-center">
                                <div className="form-group d-inline-block w-75">
                                    <div className="input-group">
                                        <input type="text" className="form-control text-theme-secondary" id="searchbar" placeholder="Type a keyword" />
                                        <div className="input-group-append">
                                            <button className="input-group-btn btn btn-dark">Go</button>
                                        </div>
                                    </div>
                                    <small id="searchbar_helpline" className="font-bold text-theme-primary form-text text-left">Categories:&nbsp;
                                    {categories.map(item => {
                                        return <span>{item.label}, </span>
                                    })}
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="spacing-50"></div>
                </div>
            </section>
            <section className="blog-categories bg-theme-primary-light">
                <div className="spacing-50"></div>
                <div className="container text-center">
                    <h3 className="display-4 text-center font-normal">Categories</h3>
                    <h6 className="text-center mb-5 font-normal text-theme-secondary">Every line written to make the web a better place</h6>
                    <Listing listItem={categories} type={'Categories'} />
                </div>
                <div className="spacing-100"></div>
            </section>
            <section className="posts bg-theme-light">
                <div className="spacing-50"></div>
                <div className="container">
                    <h3 className="display-4 text-center font-normal">Posts</h3>
                    <h6 className="text-center mb-5 font-normal text-theme-secondary">{heroSubContent}</h6>
                    <Listing listItem={articles} type={'Articles'} />
                </div>
                <div className="spacing-100"></div>
            </section>
        </React.Fragment>    
    )
}