import gql from 'graphql-tag';

export const GET_POSTS = gql`
    query {
        post {
            id
            title
            content
            thumbnail
            createdAt
            slug
        }
    }`