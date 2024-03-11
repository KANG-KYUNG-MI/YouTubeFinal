export default class YouTube{
    
    constructor( apiClient ){  
      this.apiClient= apiClient;
    }

    async search(keyword){
        return keyword? this.searchByKeyword(keyword) : this.mostPopular();
    }

   

    async searchByKeyword(keyword){
        return this.apiClient.getSearch(
          {params: {
            part:'snippet',
            maxResults: 25,
            q:keyword,
            type:'video',
                    },
        })
        .then((res)=> res.data.items)
        .then((items)=>items.map((item)=>({...item, id:item.id.videoId})))
    }

    async mostPopular(){
        return this.apiClient.getVideos(
          {params:{
                     part:'snippet',
                     maxResults: 25,
                     chart:'mostPopular',
                    },
          })
          .then((res)=> res.data.items)
 }

 async channelImageURL(id){
  return  this.apiClient.getChannels(
    {params:{
             part:'snippet',
             id:id                       
            }})//
            .then((res)=>res.data.items[0].snippet.thumbnails.default.url)
                   }


 async relatedVideos(keyword){
  return this.apiClient.getSearch(
    {params: {
      part:'snippet',
      maxResults: 25,
      q:keyword,
      type:'video',
              },
  })
  .then((res)=> res.data.items)
  .then((items)=>items.map((item)=>({...item, id:item.id.videoId})))

}
}



