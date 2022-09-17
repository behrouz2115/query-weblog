import { gql } from "@apollo/client";

export const GET_BLOGS_INFO = gql`
  query {
    posts {
      author {
        ... on Author {
          id
          name
          avatar {
            id
            url
          }
        }
      }
      id
      title
      slug
      coverPhoto {
        url
      }
    }
  }
`;
export const GET_AUTHOR = gql `
    query {
      authors {
        id
        name
        slug
        avatar {
          url
        }
      }
    }
`
