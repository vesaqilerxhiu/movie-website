import { ADD_MOVIE, DELETE_MOVIE } from "./types";

export const addMovie = (id) => ({
    type: ADD_MOVIE,
    data: { id }
})

export const deleteMovie = (id) => ({
    type: DELETE_MOVIE,
    data: { id }
})
