import gql from "graphql-tag";

export const MOVIE_SEARCH_QUERY = gql`
    query MovieSearch($input: MovieSearchRequest!) {
        search(input: $input) {
            page
            totalCount
            totalPages
            results {
                id
                title
                posterUrl
                releaseDate
                genres {
                    name
                }
            }
        }
    }
`;
