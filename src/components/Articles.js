import React, { Component } from 'react';

class Articles extends Component {
    render() {
        return (
            <section id="articles">
                <div className="col-md-12">
                    <h1 style={{ color: "black" }}>
                        <span>Articles</span>
                    </h1>
                    <div className="row center mx-auto mb-5">
                        <div className="col-md-8 center">
                            <div className="col-md-10">
                                <div className="card">
                                    <div className="card-header">
                                        <span className="iconify" data-icon="emojione:red-circle" data-inline="false"></span> &nbsp;{" "}
                                        &nbsp;
                                        <span className="iconify" data-icon="emojione:black-circle" data-inline="false"></span> &nbsp;{" "}
                                        &nbsp;
                                        <span className="iconify" data-icon="emojione:blue-circle" data-inline="false"></span> &nbsp;{" "}
                                    </div>
                                    <div className='card-body font-trebuchet text-justify ml-3 mr-3'><br /><span className='wave'> Coming Soon... </span><br /> Come check out my articles on <a href="/">Medium</a> and <a href="/">Github</a>.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        );
    }
}

export default Articles;