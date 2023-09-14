import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        const {title, description, imagUrl,newsUrl} = this.props;
        return (
            <>
            <div className='my-5'>
                <div className="card" style={{width: '18rem'}}>
                    <img src={! imagUrl?"https://thewire.in/wp-content/uploads/2016/07/117048243_7cc6bb0b87_b.jpg":imagUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
                </div>
            </>
        )
    }
}

export default NewsItem
