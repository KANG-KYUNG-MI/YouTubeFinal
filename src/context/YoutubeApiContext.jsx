import { createContext, useContext } from 'react';
import YouTube from '../api/youTube';
//import MockDataClient from '../api/mockDataClient';
import YouTubeClient from '../api/youTubeClient';

//const client = new MockDataClient();
const client = new YouTubeClient();
const youTube = new YouTube(client);

const YouTubeApiContext = createContext();

export function useYouTubeApi(){
    return (
        useContext(YouTubeApiContext)
    )
}

export function YouTubeApiProvider({children}){

    return (
        <YouTubeApiContext.Provider value={ {youTube} }>
             {children}
        </YouTubeApiContext.Provider>
    )
}