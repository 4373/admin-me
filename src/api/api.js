const douban = [
  {
    name: 'movieSearch', // 电影搜索
    url: '/v2/movie/search',
    method: 'get'
  },
  {
    name: 'movieNew', // 新片榜
    url: '/v2/movie/new_movies',
    method: 'get'
  },
  {
    name: 'movieNow', // 正在上映
    url: '/v2/movie/in_theaters',
    method: 'get'
  },
  {
    name: 'movieComing', // 即将上映
    url: '/v2/movie/coming_soon',
    method: 'get'
  },
  {
    name: 'reviews',
    url: '/v2/music/reviews',
    method: 'post'
  },
  {
    name: 'movieDetail',
    url: '/v2/movie/subject/:id',
    method: 'get'
  }
]

const cnode = [
  {
    name: 'cnodeList',
    url: '/api/v1/topics',
    method: 'get'
  }
]

export { douban, cnode }
