import React from 'react'

const NewsItems =(props) =>{
         let {title,description,imgUrl,NewsUrl,date,author} = props;
        return (
            
            <div className="my-3">
                <div className="card">
                    <img src={!imgUrl?"https://cdn.ndtv.com/common/images/ogndtv.png":imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                         <h5 className="card-title">{title}{/*<span class="badge bg-">{from}</span>*/}</h5> 
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-body-secondary">By {author}</small></p>
                        <p className="card-text"><small className="text-body-secondary">{new Date(date).toISOString()} </small></p>
                        <a rel='noreferrer' href={NewsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }


export default NewsItems

