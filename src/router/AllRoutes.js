import React from "react"
import HomeMain from "../views/HomeMain"
import HomeLight from "../views/all-home-version/HomeLight"
import NotFound from "../views/NotFound"
import { Routes, Route } from "react-router-dom"

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/home-light" element={<HomeLight />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default AllRoutes
