import React from "react";
import { Link } from "react-router-dom";
import './buttonGroup.scss'

export const ContactButton = (props) => {
    return(
        <button 
            className="contact-button"
            type={props.type}
            onClick={props.onClick}
        >
            {props.label}
        </button>
    )
}

export const LinkButton = (props) => {
    return(
        <Link 
            className="link-button" 
            to={props.to}
            onClick={props.onClick} //nuk na vyn kjo tek Homepage
        >
            {props.label}
        </Link>
    )
}

export const GenreButton = (props) => {
    return(
        <button 
            className={props.className} 
            onClick={props.onClick}
        >
            {props.label}
        </button>
    )
}


export const AddWishlistButton = (props) => {
    return(
        <button 
            className="add-wishlist-button" 
            onClick={props.onClick}
        >
            {props.label}
        </button>
    )
}

export const WishlistButton = (props) => {
    return(
        <Link 
            className="wishlist-button" 
            to={props.to}
            onClick={props.onClick}
        >
            {props.label}
        </Link>
    )
}