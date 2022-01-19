import React, { useContext } from 'react';
import { AppContext } from '../../components/Context/AppContext';
import Navbar from '../../components/Navbar/Navbar';
import Card from '../../components/Card/Card';
function Favorites() {
  const { favoritesList } = useContext(AppContext);

  return (
    <div>
      <Navbar />
      <div>
        {favoritesList != null
          ? favoritesList.map((item, index) => {
              console.log(item);
              if (!item.snippet) {
                item.snippet = {
                  title: 'no title',
                  description: 'no description',
                  publishTime: null,
                };
              } else {
                item.snippet.description =
                  item.snippet.description.substr(0, 300) + '...';
              }
              return <Card key={index} snippet={item.snippet} id={item.id} />;
            })
          : null}
      </div>
    </div>
  );
}

export default Favorites;
