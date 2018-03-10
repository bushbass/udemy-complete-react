import React from 'react';

const NewsItem = (props) => {
    return (
        <div>
            <div className="news_item">
                <h3>{props.item.title}</h3>
                <div>{props.item.feed}</div>
            </div>
        </div>
    )
}

export default NewsItem;