async function fetchPosts(setPosts, URI = "") {
  const result = await fetch(
    `https://travellers-forum.up.railway.app/posts${URI}`
  );
  const data = await result.json();
  setPosts(data);
}

async function fetchMember(setMemberHasRated, MemberId) {
  const result = await fetch(
    `https://travellers-forum.up.railway.app/members/${MemberId}`
  );
  const data = await result.json();
  setMemberHasRated(data.has_rated);
}

export { fetchPosts, fetchMember };
