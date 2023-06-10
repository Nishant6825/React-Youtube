import React, { Component } from 'react'
import { NewItem } from './NewItem'
import '../App.css'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    
    

    constructor() {
        super();

        this.state = {
            articles: [],
            loading: true,
            page: 1,

        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({loading: true })
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({ 
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        
    }
    handleNext = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) 
        {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading: true })
            let data = await fetch(url)
            let parsedData = await data.json()
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
            // console.log('next ')
            // console.log(this.state.articles)
            // console.log(this.state.page)
            console.log(this.state.varl)
        }
        
    }
    handlePrev = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page-1}&pageSize=20`;
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            page: this.state.page - 1, 
            articles: parsedData.articles
        });
        console.log(this.state.page)
    }
    render() {
        return (
           
        <div className='container my-3'>
            {/* <h1 className='text-center' style={{margin: '35px '}}>NewsMonkey - Top News of India</h1> */}
            <h1><span>"News </span><span>Monkey"</span></h1>
            {this.state.loading && <Spinner/>}
            <div className="row">
                {this.state.articles.map((element) => {
                    return <div className="col-md-4" key={element.url}>
                        <NewItem title={element.title ? element.title.slice(0, 25) : '...'} description={element.description ? element.description.slice(0, 45) : ''} imageUrl={element.urlToImage} publishedAt={element.publishedAt} newsUrl={element.url} author={element.author} source={element.source} />
                    </div>
                })}
            </div>
            <div className="container d-flex justify-content-between">
                <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrev}>&larr; Previous</button>
                <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-dark   " onClick={this.handleNext}>&rarr; Next</button>
            </div>
        </div>
        )
    }
}

export default News
