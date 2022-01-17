const timePublished = (publishDate) => {
  let diff = Math.abs(new Date() - new Date(publishDate));
  let day = 1000 * 60 * 60 * 24;

  let days = Math.floor(diff / day);
  let months = Math.floor(days / 31);
  let years = Math.floor(months / 12);

  let message = `${years} years, `;
  message += `${months} months, `;
  message += `and ${days} days ago.`;

  return message;
};

export { timePublished };
