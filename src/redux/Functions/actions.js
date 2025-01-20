import { ADD_MOVIE, DELETE_MOVIE } from "./types";

export const addMovie = (id) => ({
    type: ADD_MOVIE,
    data: { id }
})

export const deleteMovie = (id) => ({
    type: DELETE_MOVIE,
    data: { id }
})


// objektin { type, data } e shtijme ne kllapa() sepse nese nuk e bejme kete por vetem {}, javascript e merr kontentin brenda {} sikur trupin e funksionit, e jo si objekt.

// JavaScript interprets the curly braces as the start of a function body, not an object.

// const getUser = () => { name: 'Alice', age: 25 };
// This code will throw a syntax error because JavaScript thinks { name: 'Alice', age: 25 } is the function body, not an object being returned.

// The shorthand { id } is equivalent to:
// data: { id: id }

// Here's what the action objects would look like when the action creators (functions) are called:

// addMovie(42)

// {
//     type: ADD_MOVIE,
//     data: { id: 42 }
// }

// Actions are JavaScript objects that describe something that happened in the application. They must have a type property that indicates the type of action being performed. Actions may also have additional data necessary to describe that change.
// Ne kete rast, actionin (objektin) e kemi futur brenda ni funksioni - action creator mund ta quajme
// Action creators are functions that create and return action objects.