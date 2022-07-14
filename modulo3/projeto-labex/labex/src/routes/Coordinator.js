export const goToHome = navigate => {
  navigate(`/`)
}
export const goBack = navigate => {
  navigate(-1)
}
export const goToListTrip = navigate => {
  navigate(`/trips/list`)
}
export const goToLogin = navigate => {
  navigate(`/login`)
}
export const goToAdmin = navigate => {
  navigate(`/admin/trips/list`)
}
export const goToForm = navigate => {
  navigate(`/trips/application`)
}
export const goToCreateTrip = navigate => {
  navigate(`/admin/trips/create`)
}
export const goToTripDetails = (navigate, id) => {
  navigate(`/admin/trips/${id}`)
}
