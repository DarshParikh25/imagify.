const tagsCleaning = (tags) => {
  return Array.from(new Set(tags.map((tag) => tag.trim().toLowerCase())));
};

export default tagsCleaning;
