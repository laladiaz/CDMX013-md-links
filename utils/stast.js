// stats for stats: true
const statsWithoutVal = (arr) =>{
    const arrLinksHref = arr.map(link => link.href);
        return ({
          Total: arrLinksHref.length,
          Unique: new Set(arrLinksHref).size
        })
  }

  module.exports = {
    statsWithoutVal
  }