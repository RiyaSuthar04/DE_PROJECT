function slugify(text) {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/&/g, 'and')       // Replace & with 'and'
      .replace(/\s+/g, '-')       // Replace spaces with -
      .replace(/[^\w\-]+/g, '')   // Remove all non-word chars
      .replace(/\-\-+/g, '-');    // Replace multiple - with single -
  }
  
  module.exports = slugify;
  