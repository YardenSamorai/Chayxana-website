import firebase from "firebase/compat";

export const api_shipodim = firebase.firestore().collection("שיפודים");
export const api_hotmeal = firebase.firestore().collection("מסורתי");
export const api_desert = firebase.firestore().collection("קינוחים");
export const api_drinks = firebase.firestore().collection("שתייה");
export const api_soup = firebase.firestore().collection("מרקים");
export const api_steaks = firebase.firestore().collection("סטייקים");
export const api_kidsMeal = firebase.firestore().collection("ארוחות ילדים");
export const api_extras = firebase.firestore().collection("תוספות");
export const api_salads = firebase.firestore().collection("סלטים");

export const ListApi = {
    "shipodim": api_shipodim,
    "hotmeal": api_hotmeal,
    "desert": api_desert,
    "drinks": api_drinks,
    "soup": api_soup,
    "steaks": api_steaks,
    "kidsMeal": api_kidsMeal,
    "extras": api_extras,
    "salads": api_salads,
}