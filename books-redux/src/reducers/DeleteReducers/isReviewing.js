const isReviewing = (state = false, action) => {
    switch (action.type) {
        case ('SHOW_REVIEW_FORM'):
            return true

        case ('HIDE_REVIEW_FORM'):
            return false

        default:
            return state
    }
}

export default isReviewing;