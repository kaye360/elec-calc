import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import MetricImperialConverter from './routes/metric-imperial-converter'
import ErrorPage from './routes/ErrorPage'
import Home from './routes/Home'
import Wire from './routes/wire'
import Ampacity from './routes/wire/ampacity'
import VoltageDrop from './routes/wire/voltage-drop'
import Conduit from './routes/conduit'
import BendCalculations from  './routes/conduit/bend-calculations'
import ConduitFill from './routes/conduit/fill'

export default function App() {
    return (
        <Layout>
        <Routes>

            <Route path="/" element={<Home />} />
                
            <Route path="/metric-imperial-converter" element={<MetricImperialConverter />} />

            <Route path="/wire">
                <Route index element={<Wire />} />
                <Route path='ampacity' element={<Ampacity />} />
                <Route path='voltage-drop' element={<VoltageDrop />} />
            </Route>

            <Route path="/conduit">
                <Route index element={<Conduit />} />
                <Route path="bend-calculations" element={<BendCalculations />} />
                <Route path="fill" element={<ConduitFill />} />
            </Route>

            <Route path="*" element={<ErrorPage />} />
        </Routes>
        </Layout>
    )
}
