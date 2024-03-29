import React from 'react';
import { useLocation } from 'react-router-dom';
import RelatedVideos from '../components/RelatedVideos';
import ChannelInfo from '../components/ChannelInfo';

export default function VideoDetail() {

    const{state:{video}}= useLocation();
    console.log(video);
    const {title, description, channelId, channelTitle} = video.snippet;

    return (
    <section className='flex flex-col lg:flex-row'>
      <article className=' basis-4/6'>
         <iframe 
         id="player" type="text/html" width="100%" height="640" 
         src={`http://www.youtube.com/embed/${video.id}`} frameborder="0"
         title='title'
         />

         <div className='mt-2 mb-5'>
           <h2 className='font-bold'>{title}</h2>
           <ChannelInfo id={channelId} name={channelTitle}/>
           <pre className='whitespace-pre-wrap'>{description}</pre>
         </div>
      </article>

   <section className='ml-2 basis-2/6'>
    < RelatedVideos/>
   </section>
        </section>
   
    );
}

