import { fetchGraphQL } from "../fetchGraphQL"
import { GET_POSTS } from "../gqlQueries";
import {print} from "graphql";

export const fetchPosts = async () => {
    const data = await fetchGraphQL(print(GET_POSTS));
    //todo: delete console log
    console.log('Fetched posts: ', data);
    return data.post;
}