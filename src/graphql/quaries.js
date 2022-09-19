import { gql } from "@apollo/client";

 const GET_BLOGS_INFO = gql`
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
 const GET_AUTHOR = gql `
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
const GET_AUTHOR_INFO =gql`
      guery getAuthorInfo($slug:String!) {
        {
  author(where: {slug: $slug}) {
    id
    avatar {
      url
    }
    field
    name
    description {
      html
    }
  }
  posts {
    coverPhoto {
      url
    }
    id
    slug
    title
  }
}
      }
`
export {GET_BLOGS_INFO, GET_AUTHOR_INFO,GET_AUTHOR}
