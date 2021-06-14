import cuid from 'cuid';

export default function manageRestaurants(state = {
    restaurants: []
}, action) {
    switch (action.type) {
        case 'ADD_RESTAURANT':

        const restaurant = {
            id: cuid(),
            text: action.text
        }

        console.log(action)

        return { ...state, restaurants: [...state.restaurants, restaurant] }

        case 'DELETE_RESTAURANT': 
            const restaurants = state.restaurants.filter(r => r.id !== action.id)
            return {restaurants};

            case 'ADD_REVIEW':
                const review = {
                    id: cuid(),
                    restaurantId: action.review.restaurantId,
                    text: action.review.text
                }
                return {...state, reviews: [...state.reviews, review]}

                case 'DELETE_REVIEW':
                    const reviews = state.reviews.filter(r => r.id !== action.id)
                    return {reviews}

        default:
            return state;
    }
}
