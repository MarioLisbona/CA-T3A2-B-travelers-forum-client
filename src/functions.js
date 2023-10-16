async function fetchPosts(setPosts, URI = "") {
  const result = await fetch(
    `https://tf-server-788f837b6e19.herokuapp.com/posts${URI}`
  );
  const data = await result.json();
  setPosts(data);
}

async function fetchMember(setMemberHasRated, MemberId) {
  const result = await fetch(
    `https://tf-server-788f837b6e19.herokuapp.com/members/${MemberId}`
  );
  const data = await result.json();
  setMemberHasRated(data.has_rated);
}

export { fetchPosts, fetchMember };
