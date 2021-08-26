import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    render() {
        return (
            <>
                <h1>This is a news component</h1>
                <NewsItem />
            </>
        )
    }
}

export default News
