import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ActionFunction, LoaderFunction, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./layout/ErrorPage";
import Layout from './layout/Layout'


/**
 * 
 * Repurposed file-base routing system base on this article:
 * https://dev.to/franciscomendes10866/file-based-routing-using-vite-and-react-router-3fdo
 * 
 */



interface BaseRoute {
    loader?: LoaderFunction;
    action?: ActionFunction;
}

interface Route extends BaseRoute {
    path: string;
    Element: React.ComponentType<any>;
}

interface Pages {
    [key: string]: {
        default: React.ComponentType<any>;
    } & BaseRoute
}

// @ts-ignore
const pages: Pages = import.meta.glob("./routes/**/*.tsx", { eager: true })

const routes: Route[] = [];
for (const path of Object.keys(pages)) {

    if(!pages[path].default) continue

    const fileName = path.match(/\.\/routes\/(.*)\.tsx$/)?.[1]
    if (!fileName) continue

    const normalizedPathName = fileName.includes("$")
        ? fileName.replace("$", ":")
        : fileName.replace(/\/index/, "")

    routes.push({
        path: fileName === "index" ? "/" : `/${normalizedPathName.toLowerCase()}`,
        Element: pages[path].default,
        loader: pages[path]?.loader as LoaderFunction | undefined,
        action: pages[path]?.action as ActionFunction | undefined,
    })
}

const routerRoutes = routes.map(({ Element, ...rest }) => ({
    ...rest,
    element: <ErrorBoundary fallback={<ErrorPage />}><Element /></ErrorBoundary>
}))

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Layout />,
        children : [...routerRoutes, { path : '*', element : <ErrorPage /> }]
    }
])
