import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import {
  GET_AUTHOR,
  GET_BLOG,
  GET_BLOGS,
  GET_BLOGS_HOMEPAGE,
  GET_HOMEOWNER,
  GET_HOUSEKEEPER,
  GET_TOPICS,
} from "./queries/blog";

// config graphql for server
const httpLink = createHttpLink({
  uri: `${process.env.NEXT_GRAPHQL_API_ENDPOINT}/graphql`,
  credentials: "same-origin",
});

const authLink = setContext((_, { headers }) => {
  const token = process.env.JWT_SECRET;

  return {
    headers: {
      "Cache-Control": "no-cache",
      Pragma: "no-cache",
      Expires: "0",
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

export const serverGraphql = new ApolloClient({
  ssrMode: true,
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    resultCaching: false, // This is not actually an option for InMemoryCache, so it's for illustrative purposes
  }),
});

export interface ResponseGenerator<T extends object> {
  config?: any;
  data?: T;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

// config graphql for client
const httpLinkClient = createHttpLink({
  uri: process.env.basePath + "/graphql",
  credentials: "same-origin",
});

export const client = new ApolloClient({
  link: authLink.concat(httpLinkClient),
  cache: new InMemoryCache(),
});

// ----------------------------------------- CALL API GRAPHQL FOR SERVER ------------------------------------------ //
export async function getBlogGraphql({ slug }: { slug: string }): Promise<any> {
  try {
    const { data } = await serverGraphql.query({
      query: GET_BLOG,
      variables: { slug: slug },
      fetchPolicy: "no-cache",
      context: {
        fetchOptions: {
          next: { revalidate: 10 },
        },
      },
    });

    return data;
  } catch (error) {}
}

export async function getBlogsGraphql({ page, topic }: any): Promise<any> {
  try {
    const { data } = await serverGraphql.query({
      query: GET_BLOGS,
      fetchPolicy: "no-cache",
      variables: {
        page,
        topic,
      },
      context: {
        fetchOptions: {
          next: { revalidate: 10 },
        },
      },
    });

    return data;
  } catch (e) {}
}

export async function getBlogsHomePageGraphql(): Promise<any> {
  try {
    const { data } = await serverGraphql.query({
      query: GET_BLOGS_HOMEPAGE,
      fetchPolicy: "no-cache",
      context: {
        fetchOptions: {
          next: { revalidate: 10 },
        },
      },
    });

    return data;
  } catch (e) {}
}

export async function getTopicsGraphql(): Promise<any> {
  try {
    const { data } = await serverGraphql.query({
      query: GET_TOPICS,
      fetchPolicy: "no-cache",
      context: {
        fetchOptions: {
          next: { revalidate: 10 },
        },
      },
    });

    return data;
  } catch (error) {}
}

export async function getAuthorGraphql(): Promise<any> {
  try {
    const { data } = await serverGraphql.query({
      query: GET_AUTHOR,
      fetchPolicy: "no-cache",
      context: {
        fetchOptions: {
          next: { revalidate: 10 },
        },
      },
    });

    return data;
  } catch (error) {}
}

export async function getHousekeeper(): Promise<any> {
  try {
    const { data } = await serverGraphql.query({
      query: GET_HOUSEKEEPER,
      fetchPolicy: "no-cache",
      context: {
        fetchOptions: {
          next: { revalidate: 10 },
        },
      },
    });

    return data;
  } catch (error) {}
}

export async function getHomeowner(): Promise<any> {
  try {
    const { data } = await serverGraphql.query({
      query: GET_HOMEOWNER,
      fetchPolicy: "no-cache",
      context: {
        fetchOptions: {
          next: { revalidate: 10 },
        },
      },
    });

    return data;
  } catch (error) {}
}
