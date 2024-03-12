import React from 'react';
import { useYouTubeApi } from '../context/YouTubeApiContext';
import { useQuery } from '@tanstack/react-query';

import VideoCard from './VideoCard';
import { useParams } from 'react-router-dom';


export default function RelatedVideos() {
    const {keyword} = useParams();
    console.log(keyword);
    const {youTube} = useYouTubeApi();

    const {data:videos} =  useQuery({ 
        queryKey: ['videos', keyword],  
        queryFn: ()=>youTube.search(keyword)
      })
      console.log(videos);
      
  
    return (
        <div>
        {/* {isLoading && <p>Loading...</p>}
        {error && <p>Something is wrong😵‍💫</p>} */}
        
        {videos && 
                  <ul >
  {videos.map(video=><VideoCard key={video.id} video={video} type='list'/>)}
                  </ul>}
        </div>
    );
}

