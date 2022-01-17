async function getVideosFetch(category){

    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCrSoy7RbcW2fEfna7ipATtTs4qyjloW2I&q=${category}&part=snippet&maxResults=25`,
    //const response = await fetch('./data/youtube-videos-mock.json',
        {
        headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
    );

    let {items} = await response.json();
    items = items.filter( (item) => item.id.kind === "youtube#video" )

    const data = items.map( (item) => {
      
      return {
        id: item.id.videoId,
        channelId: item.snippet.channelId,
        channelTitle: item.snippet.channelTitle,
        description: item.snippet.description,
        thumbnails: item.snippet.thumbnails,
        width : item.snippet.thumbnails.medium.width,
        height: item.snippet.thumbnails.medium.height,
        title: item.snippet.title,
        url: item.snippet.thumbnails.medium.url
      }
    });
    
    return data;
}

export default getVideosFetch;


/*
const getData = () => {
    fetch('./data/youtube-videos-mock.json',
    {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
      });
  }
  useEffect(()=>{
    getData()
  },[])
  */