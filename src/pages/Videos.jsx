import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import VideoCard from '../components/VideoCard';
import { useYouTubeApi } from '../context/YouTubeApiContext';

export default function Videos() {
    const {keyword} = useParams();
    const {youTube} = useYouTubeApi();

    const {isLoading, error, data:videos} = useQuery({ 
      queryKey: ['videos', keyword],  
      queryFn: ()=>youTube.search(keyword)
    })
    console.log(videos);

    return (
      <>
      
        {isLoading && <p>Loading...</p>}
        {error && <p>Something is wrong😵‍💫</p>}
        
        {videos && 
                  <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4'>
            {videos.map((video)=> (<VideoCard key={video.id} video={video}/>) )}
                  </ul>}
       </>
    );
}

