const ANILIST_API_URL = 'https://graphql.anilist.co';

export async function fetchAnime({
  page = 1,
  perPage = 1,
  bannedGenres = [],
  bannedTags = [],
} = {}) {
  const query = `
    query ($page: Int, $perPage: Int, $genre_not_in: [String], $tag_not_in: [String]) {
      Page(page: $page, perPage: $perPage) {
        media(
          type: ANIME,
          genre_not_in: $genre_not_in,
          tag_not_in: $tag_not_in,
          isAdult: false
        ) {
          id
          title {
            romaji
            english
          }
          coverImage {
            large
          }
          genres
          tags {
            name
          }
          startDate {
            year
          }
          seasonYear
          isAdult
        }
      }
    }
  `;

  const variables = {
    page,
    perPage,
    genre_not_in: bannedGenres,
    tag_not_in: bannedTags,
  };

  const response = await fetch(ANILIST_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  });

  const data = await response.json();
  if (data.errors) throw new Error(data.errors[0].message);
  return data.data.Page.media;
}
