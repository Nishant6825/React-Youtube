import React, { Component } from 'react'
import '../index.css'
export class NewItem extends Component {
  
  render() {
    let { title, description, imageUrl, newsUrl, publishedAt, author, source} = this.props
    return (

      <div className="card" style={{  fontFamily: 'Westminster', borderColor:'black' }}>
        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-warning"style={{left:"97%", zIndex:'1'}}>{source.name}</span>
        <img src={imageUrl?imageUrl:'https://sportscafe.in/img/es3-cfill-w800-h418/articles/cricket-2023/Prabhsimran_Singh_DC_vs_PBKS_Arun_Jaitley_BCCI.scorimg.webp'} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title" >Title: {title} <span class="badge rounded-pill text-bg-info">New</span></h5> 
          <p className="card-text">Description: {description}</p>
          <p className="card-text">Published at: {publishedAt}</p>
          <p class="card-text"><small class="text-body-secondary">Last updated by {author? author:"unknown "} on {new Date(publishedAt).toTimeString() }</small></p>
          <a rel='noreferrer' href={newsUrl} className="btn btn-sm btn-dark" target='blank'>Read More</a>
        </div>
      </div>

    )
  }
}

export default NewItem;     