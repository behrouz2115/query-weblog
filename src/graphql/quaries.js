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
      query getAuthorInfo($slug:String!) {
     
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
const POST_INFO =gql`
    query getBlogInfo($slug:String!){
      post(where: {slug: $slug}) {
    author {
      ... on Author {
        name
        avatar {
          url
        }
        field
      }
    }
    content {
      html
    }
    title
    coverPhoto {
      url
    }
  }
    }
`

const GET_POST_COMMENT = gql `
        query getPostComment ($slug:String!) {
  comments(where: {post: {slug: $slug}}){
    id
    name
    text
  }
}
`

export {GET_BLOGS_INFO, GET_AUTHOR_INFO, GET_AUTHOR, POST_INFO, GET_POST_COMMENT}
