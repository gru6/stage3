// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define our single API slice object
export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: "api",
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.flickr.com",
  }),
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    // The `getPosts` endpoint is a "query" operation that returns data
    getCards: builder.query({
      // The URL for the request is '/fakeApi/posts'
      query: (searchText) =>
        `/services/rest/?safe_search=safe&method=flickr.photos.search&api_key=53a635ed164897772597b0b398e2259a&per_page=21&content_type=1&sort=relevance&license=1,2,3,4,5,6&media=photos&text=${searchText}&extras=description,date_upload,owner_name,icon_server,original_format,last_update,tags,views,url_o&format=json&nojsoncallback=1`,
    }),
  }),
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetCardsQuery } = apiSlice;
