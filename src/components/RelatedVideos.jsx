import React from 'react';
import { useYouTubeApi } from '../context/YouTubeApiContext';
import { useQuery } from '@tanstack/react-query';

import VideoCard from './VideoCard';
import { useParams } from 'react-router-dom';


export default function RelatedVideos() {
    const {keyword} = useParams()
    const {youTube} = useYouTubeApi();

    const {data:videos} =  useQuery({ 
        queryKey: ['videos', keyword],  
        queryFn: ()=>youTube.search(keyword)
          })
      
      
    return (
        <div className=''>
        {/* {isLoading && <p>Loading...</p>}
        {error && <p>Something is wrong😵‍💫</p>} */}
        
        {videos && 
                  <ul >
  {videos.map(video=><VideoCard video={video} type='list'/>)}
                  </ul>}
        </div>
    );
}

