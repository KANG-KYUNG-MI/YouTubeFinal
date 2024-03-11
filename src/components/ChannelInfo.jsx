import React from 'react';
import { useYouTubeApi } from './../context/YouTubeApiContext';
import { useQuery } from '@tanstack/react-query';


export default function ChannelInfo({id, name}) {

     const { youTube} = useYouTubeApi();
     const { isLoading, error, data: url } = useQuery({ 
        queryKey: ['channels', id],  
        queryFn: ()=>youTube.channelImageURL(id),
      })

      console.log({ isLoading, error, data: url });

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {error && <p>{error.message}</p>} 
            {url && <img src={url} alt={name} />}
            <p>{name}</p>
        </div>
    );
}

