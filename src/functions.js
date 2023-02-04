async function fetchPosts(setPosts, URI='') {
  const result = await fetch(`https://indigo-stocking-production.up.railway.app/posts${URI}`)
  const data = await result.json()
  setPosts(data)
}

export { fetchPosts } 

  