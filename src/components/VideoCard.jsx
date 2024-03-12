import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatAgo } from '../util/date';

export default function VideoCard( {video}, {type} ) {
 
    const { title,thumbnails, channelTitle, publishedAt} = video.snippet;
    const navigate = useNavigate();
    const isList = type ==='list';
   
    return (
<li key={video.id} className={isList? 'flex gap-10':''} onClick={()=>{navigate( `/videos/watch/:${video.id}`, {state:{video:video}})}} >

<img  className={isList? 'mr-2' : 'w-full'} src={thumbnails.medium.url} alt={title}/>
            
            <div className='isList? mb-7' >            
<p className='line-clamp-2 font-semibold m-1'>{title}</p>
<p className='text-sm opacity-60'>{channelTitle} {formatAgo(publishedAt,'en')}</p>
            </div>
        </li>
    );
}

