import React, { Component } from 'react'

export class NewsItems2 extends Component {
    render() {
        return (
            <div  className="my-3">
                <div className="card mb-3" style={{ maxWidth: "540px", maxHeight:"540px" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={!imgUrl ? "https://cdn.ndtv.com/common/images/ogndtv.png" : imgUrl} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">{description}</p>
                                <p className="card-text"><small className="text-body-secondary">By {author} At {new Date(date).toLocaleTimeString()} </small></p>
                                <a rel='noreferrer' href={NewsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default NewsItems2
