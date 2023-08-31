import React, { ReactNode } from 'react'
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
import { ErrorBoundary } from 'react-error-boundary'
import WirePricing from './routes/wire/pricing'

export default function App() {
    return (
        <Layout>
            <Routes>

                <Route path="/" element={<Er><Home /></Er>}/>
                    
                <Route path="/metric-imperial-converter" element={<Er><MetricImperialConverter /></Er>} />

                <Route path="/wire">
                    <Route index element={<Er><Wire /></Er>} />
                    <Route path='ampacity' element={<Er><Ampacity /></Er>} />
                    <Route path='voltage-drop' element={<Er><VoltageDrop /></Er>} />
                    <Route path='pricing' element={<Er><WirePricing /></Er>} />
                </Route>

                <Route path="/conduit">
                    <Route index element={<Er><Conduit /></Er>} />
                    <Route path="bend-calculations" element={<Er><BendCalculations /></Er>} />
                    <Route path="fill" element={<Er><ConduitFill /></Er>} />
                </Route>

                <Route path="*" element={<ErrorPage />} />

            </Routes>
        </Layout>
    )
}


function Er({children} : {children : ReactNode}) {
    return (
        <ErrorBoundary fallback={<ErrorPage />}>
            {children}
        </ErrorBoundary>
    )
}