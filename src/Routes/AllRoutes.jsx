import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layouts from "../Layout/Layouts"
import Investor from "../Pages/Investor"
import VehicleStatus from "../Pages/VehicleStatus"
import ServiceAlerts from "../Pages/ServiceAlerts"
import RatesHistory from "../Pages/RatesHistory"
import VehicleMaintenance from "../Pages/VehicleMaintenance"
import PendingVehicles from "../Pages/PendingVehicles"
import Expences from "../Pages/Expences"
import Utilities from "../Pages/Utilities"
import Support from "../Pages/Support"
import Operations from "../Pages/Operations"
import Reports from "../Pages/Reports"
import Login from "../Pages/Login"
import SignUps from "../Pages/SignUps"
import Bookings from "../Pages/Bookings"
import ActiveDrivers from "../Pages/ActiveDrivers"
export default function AllRoutes() {

  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Login />} />
      <Route path="/" element={<Layouts />}>
        <Route path="/investors" element={<Investor />} />
        <Route path="/VehicleStatus" element={<VehicleStatus />} />
        <Route path="/ServiceAlerts" element={<ServiceAlerts />} />
        <Route path="/RatesHistory" element={<RatesHistory />} />
        <Route path="/VehicleMaintenance" element={<VehicleMaintenance />} />
        <Route path="/PendingVehicles" element={<PendingVehicles />} />
        <Route path="/Expences" element={<Expences />} />
        <Route path="/Utilities" element={<Utilities />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Operations" element ={ <Operations />} />
        <Route path="/Reports" element ={ <Reports />} />
        <Route path="/SignUps" element ={ <SignUps />} />
        <Route path="/bookings" element ={ <Bookings />} />
        <Route path="/Activedrivers" element ={ <ActiveDrivers />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}
