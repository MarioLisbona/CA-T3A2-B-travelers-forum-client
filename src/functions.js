async function fetchPosts(setPosts) {
  const result = await fetch("https://indigo-stocking-production.up.railway.app/posts/")
  const data = await result.json()
  setPosts(data)
}

export { fetchPosts } 

  