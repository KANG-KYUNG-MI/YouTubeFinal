import axios from 'axios';

  export default class MockDataClient{

    async getSearch(){
        return axios.get('/videos/search.json');
    }

    async getVideos(){
        return axios.get('/videos/popular.json');
    }

    async getChannels(){
        return axios.get('/videos/channel.json');
    }
}