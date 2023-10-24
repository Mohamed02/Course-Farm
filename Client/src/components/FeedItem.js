import React from 'react';


const FeedItem = ({feed}) => {
  console.log("feed item",feed)
  return (
    <div className="row marketing">
      <div className="col-lg-12">
          <a href={feed?.link}>
            <h4>{feed?.title}</h4>
          </a>
          <p>{feed?.description}</p>
      </div>
    </div>
  );
}

export default FeedItem; 
