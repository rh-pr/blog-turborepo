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

export const GET_POST_BY_ID = gql`
    query getPostById($id: Int!) {
        getPostById(id: $id) {
            id
            title
            content
            thumbnail
            createdAt
            author {
                name
            }
            tags {
                id
                name
            }
        }
    }
`

export const CREATE_USER_MUTATION = gql`
    mutation createUser($input: CreateUserInput!){
        createUser(createUserInput: $input) {
            id
        }
    }
`

export const SIGN_IN_MUTATION = gql`
    mutation sigIn($input: SignInInput!) {
        sigIn(signInInput: $input) {
            id
            name
            avatar
            accessToken
        }
    }
`

export const GET_POST_COMMENTS = gql`
    query getPostComments($postId: Int!, $take: Float, $skip: Float) {
        getPostComments(postId: $postId, take: $take, skip: $skip) {
            id
            content
            createdAt
            author {
                name
                avatar
            }
        }
        postCommentsCount(postId: $postId)
    }
`

export const CREATE_COMMENT_MUTATION = gql`
    mutation createComment($input: CreateCommentInput!) {
        createComment(createCommentInput: $input) {
            id
        }
    }
`

