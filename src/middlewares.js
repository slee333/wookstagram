export const isAuthenticated = ( request ) => {
    if (!request.user) {
        throw Error("YOU need to login to perform this action")
    }
}