import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.flickr.com",
  }),
  endpoints: (builder) => ({
    getCards: builder.query({
      query: (searchText) =>
        `/services/rest/?safe_search=safe&method=flickr.photos.search&api_key=53a635ed164897772597b0b398e2259a&per_page=21&content_type=1&sort=relevance&license=1,2,3,4,5,6&media=photos&text=${searchText}&extras=description,date_upload,owner_name,icon_server,original_format,last_update,tags,views,url_o&format=json&nojsoncallback=1`,
    }),
  }),
});

export const { useGetCardsQuery } = apiSlice;
