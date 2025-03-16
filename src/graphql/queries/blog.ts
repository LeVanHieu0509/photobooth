import { gql } from "@apollo/client";
import blogFragment from "../fragment/blog";

export const getBlogsQuery = /* GraphQL */ `
  query getBlogs {
    blogs {
      data{
        id ,
        attributes{
          title
        }
      }
    }
  }
#   ${blogFragment}
`;

export const GET_BLOGS = gql`
  # Write your query or mutation here
  query getBlogs($page: Int!, $topic: String) {
    blogs(pagination: { page: $page, pageSize: 3 }, filters: { topics: { slug: { eq: $topic } } }) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }

      data {
        id

        attributes {
          title
          cover_img {
            data {
              attributes {
                url
              }
            }
          }
          content
          release_date
          author {
            data {
              attributes {
                name
              }
            }
          }
          slug
          description
          related_blogs {
            data {
              attributes {
                title
              }
            }
          }
          topics {
            data {
              attributes {
                slug
                title
              }
            }
          }
          tags
          __typename
        }
      }
    }
  }
`;

export const GET_BLOGS_HOMEPAGE = gql`
  # Write your query or mutation here
  query getBlogs {
    blogs {
      data {
        id

        attributes {
          title
          cover_img {
            data {
              attributes {
                url
              }
            }
          }
          content
          release_date
          author {
            data {
              attributes {
                name
              }
            }
          }
          slug
          description
          related_blogs {
            data {
              attributes {
                title
              }
            }
          }
          topics {
            data {
              attributes {
                slug
                title
              }
            }
          }
          tags
          __typename
        }
      }
    }
  }
`;

export const GET_BLOG = gql`
  query getBlog($slug: String) {
    blogs(filters: { slug: { eq: $slug } }) {
      data {
        id

        attributes {
          related_blogs {
            data {
              attributes {
                title
                cover_img {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                release_date
                slug
              }
            }
          }

          title
          cover_img {
            data {
              attributes {
                url
              }
            }
          }
          content
          release_date
          author {
            data {
              attributes {
                name
              }
            }
          }
          slug
          description
          related_blogs {
            data {
              attributes {
                title
              }
            }
          }
          tags
          __typename
          topics {
            data {
              attributes {
                slug
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_TOPICS = gql`
  # Write your query or mutation here
  query getTopics {
    topics {
      data {
        id
        attributes {
          title
          slug
        }
      }
    }
  }
`;

export const GET_AUTHOR = gql`
  # Write your query or mutation here
  query getAuthors {
    authors {
      data {
        id
        attributes {
          name
          self_description
          avatar {
            data {
              attributes {
                url
              }
            }
          }
          self_short_description
          self_bio
          socials {
            social_linkedin_link
            social_facebook_link
            social_twitter_link
            social_instgram_link
          }
        }
      }
    }
  }
`;

export const GET_QAS = gql`
  # Write your query or mutation here
  query getQAs {
    qas {
      data {
        attributes {
          question
          answer
          qa_code
        }
      }
    }
  }
`;

export const GET_HOMEOWNER = gql`
  # Write your query or mutation here
  query getHomeowner {
    homeowners {
      data {
        attributes {
          name
          description
          sallary
          location
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_HOUSEKEEPER = gql`
  # Write your query or mutation here
  query getHousekeeper {
    housekeepers {
      data {
        attributes {
          name
          description
          sallary
          location
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
