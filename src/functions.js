async function fetchPosts(setPosts, URI='') {
  const result = await fetch(`https://indigo-stocking-production.up.railway.app/posts${URI}`)
  const data = await result.json()
  setPosts(data)

  console.log(`Inside fetch posts - https://indigo-stocking-production.up.railway.app/posts${URI}`)
}

export { fetchPosts } 

  