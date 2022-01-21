import React from 'react';
import styles from './VideoCard.module.scss';

function VideoCard({ title, description, img }) {
  return (
    <div className={styles.cardContainer}>
      <img src={img} alt={title} loading="lazy" />
      <div className={styles.cardText}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default VideoCard;
