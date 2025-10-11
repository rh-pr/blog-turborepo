import gql from 'graphql-tag';

export const GET_POSTS = gql`
    query  post($skip: Float, $take: Float) {
        post(skip: $skip, take: $take) {
            id
            title
            content
            thumbnail
            createdAt
            slug
        }

        postCount
    }`