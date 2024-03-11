import React from 'react';
import { useLocation } from 'react-router-dom';
import RelatedVideos from '../components/RelatedVideos';
import ChannelInfo from '../components/ChannelInfo';

export default function VideoDetail() {

    const{state:{video}}= useLocation();
    const {title, description, channelId, chanelTitle} = video.snippet;

    return (
    <section>
      <article>
         <iframe id="player" type="text/html" width="100%" height="640" 
         src={`http://www.youtube.com/embed/${video.id}`} frameborder="0"
         title='title'/>

         <div>
           <h2 className='font-semibold m-10'>{title}</h2>
           <ChannelInfo id={channelId} name={chanelTitle}/>
           <pre className=''>{description}</pre>
         </div>
      </article>

   <section>
    < RelatedVideos key={video.id} video={video}/>
   </section>
        </section>
   
    );
}

