import * as con from '../../constants/actionTypes'

export default (posts = [], action) => {
    switch (action.type) {
        case con.FETCH_ALL:
            return action.payload;
        case con.CREATE:
            return [...posts, action.payload];
        case con.UPDATE:
        case con.LIKE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);

        case con.DELETE:
            return posts.filter((post) => post._id !== action.payload);
        default:
            return posts;
    }
}