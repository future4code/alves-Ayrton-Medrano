export const goBack = navigate => {
  navigate(-1)
}
export const goToLoginPage = navigate => {
  navigate(`/login`)
}
export const goToFeedPage = navigate => {
  navigate(`/`)
}
export const goToPostPage = (navigate, id) => {
  navigate(`/post/${id}`)
}
export const goToRegistrationPage = navigate => {
  navigate(`/signup`)
}
