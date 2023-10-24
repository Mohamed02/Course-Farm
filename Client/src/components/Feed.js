import React from 'react';
import FeedItem from './FeedItem';

function Feed(props) {
  // eslint-disable-next-line no-console
  console.log('feed component', props);

  return (
      <div>
        hellow
      { props.feeds?.map((item) => 
        <FeedItem key={item.id} feed={item} />
      )}
      </div>
    )
}

export default Feed; 
