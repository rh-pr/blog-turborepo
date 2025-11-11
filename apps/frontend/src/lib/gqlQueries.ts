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

export const POST_LIKES_COUNT = gql`
    query postLikeData($postId: Int!) {
        postLikesCount(postId: $postId)
    }
`

export const USER_LIKED_POST = gql`
    query postLikeData($postId: Int!) {
        userLikedPost(postId: $postId)
    }
`

export const LIKE_POST = gql`
    mutation likePost($postId: Int!) {
        likePost(postId: $postId)
    }
`

export const UNLIKE_POST = gql`
    mutation unlikePost($postId: Int!) {
        unlikePost(postId: $postId) 
    }   
`

export const GET_USER_POSTS = gql`
    query getUserPosts($skip: Float, $take: Float) {
        getUserPosts(skip: $skip, take: $take) {
            id
            title
            content
            slug
            thumbnail
            createdAt
            published
            _count {
                comments
                likes
            }
        }

        userPostsCount
    }
`

export const CREATE_POST_MUTATION = gql`
    mutation createPostMutation($input: CreatePostInput!) {
        createPost(createPostInput: $input) {
            id
        }
    }
`
