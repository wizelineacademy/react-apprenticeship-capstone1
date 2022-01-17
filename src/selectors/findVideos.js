function findVideos(videos){

    videos.find( video => video.title)
    let {items} = await response.json();
    console.log('vi')
    const videoItem = items.find( item => ((item.id.kind === "youtube#video") && (item.id.videoId === id)));
    console.log('vi1')
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