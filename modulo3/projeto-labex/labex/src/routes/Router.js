import HomePage from '../pages/HomePage/HomePage'
import Trips from '../pages/ListTrips/ListTripsPage'
import AdminHomePage from '../pages/AdminHomePage/AdminHomePage'
import ApplicationFormPage from '../pages/Apply/ApplicationFormPage'
import CreateTripPage from '../pages/CreateTrip/CreateTripPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import TripDetailsPage from '../pages/TripDetailsPage/TripDetailsPage'
import ErrorPage from '../pages/ErrorPage'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/trips/list" element={<Trips />} />
        <Route
          path="/trips/application/:id"
          element={<ApplicationFormPage />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/trips/list" element={<AdminHomePage />} />
        <Route path="/admin/trips/create" element={<CreateTripPage />} />
        <Route path="/admin/trips/:id" element={<TripDetailsPage />} />
      </Routes>
    </BrowserRouter>
  )
}
