import React from 'react';
import { useYouTubeApi } from './../context/YouTubeApiContext';
import { useQuery } from '@tanstack/react-query';

//id={channelId} name={channelTitle} from videosdetail ( useLocation-{state:{video}}-video.snippet)
export default function ChannelInfo({id, name}) {
 
     const { youTube} = useYouTubeApi();

     // channel img url
     const { data: url } = useQuery({ 
        queryKey: ['channels', id],  
        queryFn: ()=>youTube.channelImageURL(id),
      })

    //   async channelImageURL(id){
    //     return  this.apiClient.getChannels(
    //       {params:{part:'snippet',
    //                id:id                       
    //               }})//
    //    .then((res)=>res.data.items[0].snippet.thumbnails.default.url) }

    return (
        <div className='flex my-4 mb-8 items-center'>
           
            {url && <img className='w-10 h-10 rounded-full' src={url} alt={name} />}
            <p className='text-lg font-medium ml-2' >{name}</p>
        </div>
    );
}

