async function getVideoById(id){

    const response = await fetch('./data/youtube-videos-mock.json',
        {
        headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
    );
    let {items} = await response.json();
    
    const videoItem = items.find( item => ((item.id.kind === "youtube#video") && (item.id.videoId === id)));
    
    return {
        id: videoItem.id.videoId,
        channelId: videoItem.snippet.channelId,
        channelTitle: videoItem.snippet.channelTitle,
        description: videoItem.snippet.description,
        width: videoItem.snippet.thumbnails.high.width,
        height: videoItem.snippet.thumbnails.high.height,
        title: videoItem.snippet.title,
    }   
}

export default getVideoById;