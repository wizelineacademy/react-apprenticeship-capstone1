import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StyledRelatedVideos } from './RelatedVideos.styles';
import Card from '../../components/Card/Card';

function RelatedVideos() {
  const [related, setRelated] = useState(null);
  const params = useParams();
  useEffect(() => {
    const fetctRelatedVideos = async () => {
      let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${params.videoId}&type=video&key=AIzaSyDwsRUO25ZI25bzx-K7L8QKsRG39bIBiDg`;
      try {
        const response = await axios.get(url);
        let relatedList = response.data.items;
        relatedList.map((item) => {
          if (item.snippet) {
            item.snippet.description =
              item.snippet.description.substr(0, 200) + '...';
          }
          return relatedList;
        });
        setRelated(relatedList);
      } catch (error) {
        console.log(error);
      }
    };

    fetctRelatedVideos();
  }, []);

  return (
    <StyledRelatedVideos>
      <h4>Related Videos:</h4>

      <div className="related-list">
        {related != null
          ? related.map((item, index) => {
              if (!item.snippet) {
                item.snippet = {
                  title: 'no title',
                  description: 'no description',
                  publishTime: null,
                };
              }
              return (
                <Card key={index} snippet={item.snippet} id={item.id.videoId} />
              );
            })
          : null}
      </div>
    </StyledRelatedVideos>
  );
}

export default RelatedVideos;
