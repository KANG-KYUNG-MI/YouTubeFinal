import axios from 'axios';

//환경설정(configuration) axios.create([config]) create a new instance
  export default class YouTubeClient{
    constructor(){  
      this.httpClient= axios.create({
        baseURL:'https://www.googleapis.com/youtube/v3/',
        params:{key:process.env.REACT_APP_YOUTUBE_API_KEY
        }
      });
    }

    async getSearch(params){
        return this.httpClient.get('search', params)
      
    }

    async getVideos(params){
        return this.httpClient.get('videos', params)
    }

    async getChannels(params){
      return this.httpClient.get('channels', params)
  }
}

