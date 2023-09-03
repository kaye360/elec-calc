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
 * Set the routes directory in the files const and filename regex
 * Any file starting with _ will be ignored
 * Any file without a default export will be ignored
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

interface Files {
    [key: string]: {
        default: React.ComponentType<any>;
    } & BaseRoute
}

// @ts-ignore
const files: Files = import.meta.glob(["./routes/**/*.tsx", '!./routes/**/_*.tsx'], { eager: true })

const routes: Route[] = [];

for (const path of Object.keys(files)) {

    if(!files[path].default) continue

    const fileName = path.match(/\.\/routes\/(.*)\.tsx$/)?.[1]
    if (!fileName) continue

    const normalizedPathName = fileName.includes("$")
        ? fileName.replace("$", ":")
        : fileName.replace(/\/index/, "")

    routes.push({
        path: fileName === "index" ? "/" : `/${normalizedPathName.toLowerCase()}`,
        Element: files[path].default,
        loader: files[path]?.loader as LoaderFunction | undefined,
        action: files[path]?.action as ActionFunction | undefined,
    })
}

const routerRoutes = routes.map(({ Element, ...rest }) => ({
    ...rest,
    element: <ErrorBoundary fallback={<ErrorPage />}><Element /></ErrorBoundary>
}))

export const router = createBrowserRouter([{
    path : '/',
    element : <Layout />,
    children : [...routerRoutes, { path : '*', element : <ErrorPage /> }]
}])
