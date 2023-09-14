import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
constructor(){
    super();
    this.state = {
        articles: this.articles,
        loading : false,
        page:1
    }
}


    async componentDidMount() {
        const url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=d17d26035d0c48a3ad27fc3ba2e26c57"
        const data = await fetch(url);
        const passData = await data.json()
        console.log("passData", passData);
        this.setState({articles: passData.articles })
    }

    render() {
        return (
            <div className='container my-3'>
                <h1>My News - Top Headlines</h1>
                <div className='row'>
                    {this.state.articles?.map((element) => {
                        return <div className='col-md-4' key={element.url}>
                            <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imagUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className='container'>
                <button type="button" class="btn btn-dark">previous</button>
                <button type="button" class="btn btn-dark">Next</button>

                </div>
            </div>
        )
    }
}

export default News
