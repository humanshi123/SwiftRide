import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layouts from "../Layout/Layouts";
import Investor from "../Pages/Investor";
import VehicleStatus from "../Pages/VehicleStatus";
import ServiceAlerts from "../Pages/ServiceAlerts";
import RatesHistory from "../Pages/RatesHistory";
import VehicleMaintenance from "../Pages/VehicleMaintenance";
import PendingVehicles from "../Pages/PendingVehicles";
import Expences from "../Pages/Expences";
import Utilities from "../Pages/Utilities";
import Support from "../Pages/Support";
import Operations from "../Pages/Operations";
import Reports from "../Pages/Reports";
import Login from "../Pages/Login";
import SignUps from "../Pages/SignUps";
import Bookings from "../Pages/Bookings";
import ActiveDrivers from "../Pages/ActiveDrivers";
import InvestorDetails from "../Pages/InvestorDetails";
import { PageNameProvider, usePageName } from "../Contexts/PageNameContext";

const PageWrapper = ({ children, name }) => {
  const { setPageName } = usePageName();
  React.useEffect(() => {
    setPageName(name);
  }, [name, setPageName]);
  return children;
};

export default function AllRoutes() {
  return (
    <PageNameProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/" element={<Layouts />}>
            <Route
              path="/investors"
              element={
                <PageWrapper name="Investors">
                  <Investor />
                </PageWrapper>
              }
            />
            <Route
              path="/VehicleStatus"
              element={
                <PageWrapper name="Vehicle Status">
                  <VehicleStatus />
                </PageWrapper>
              }
            />
            <Route
              path="/ServiceAlerts"
              element={
                <PageWrapper name="Service Alerts">
                  <ServiceAlerts />
                </PageWrapper>
              }
            />
            <Route
              path="/RatesHistory"
              element={
                <PageWrapper name="Rates History">
                  <RatesHistory />
                </PageWrapper>
              }
            />
            <Route
              path="/VehicleMaintenance"
              element={
                <PageWrapper name="Vehicle Maintenance">
                  <VehicleMaintenance />
                </PageWrapper>
              }
            />
            <Route
              path="/PendingVehicles"
              element={
                <PageWrapper name="Pending Vehicles">
                  <PendingVehicles />
                </PageWrapper>
              }
            />
            <Route
              path="/Expences"
              element={
                <PageWrapper name="Expences">
                  <Expences />
                </PageWrapper>
              }
            />
            <Route
              path="/Utilities"
              element={
                <PageWrapper name="Utilities">
                  <Utilities />
                </PageWrapper>
              }
            />
            <Route
              path="/Support"
              element={
                <PageWrapper name="Support">
                  <Support />
                </PageWrapper>
              }
            />
            <Route
              path="/Operations"
              element={
                <PageWrapper name="Operations">
                  <Operations />
                </PageWrapper>
              }
            />
            <Route
              path="/Reports"
              element={
                <PageWrapper name="Reports">
                  <Reports />
                </PageWrapper>
              }
            />
            <Route
              path="/SignUps"
              element={
                <PageWrapper name="Sign Ups">
                  <SignUps />
                </PageWrapper>
              }
            />
            <Route
              path="/bookings"
              element={
                <PageWrapper name="Bookings">
                  <Bookings />
                </PageWrapper>
              }
            />
            <Route
              path="/investor-details"
              element={
                <PageWrapper>
                  <InvestorDetails />{" "}
                </PageWrapper>
              }
            />
            <Route
              path="/Activedrivers"
              element={
                <PageWrapper name="Active Drivers">
                  <ActiveDrivers />
                </PageWrapper>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </PageNameProvider>
  );
}
