/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as AuthenticatedLayoutImport } from './routes/_authenticated/_layout'
import { Route as authLoginImport } from './routes/(auth)/login'
import { Route as AuthenticatedLayoutProfileImport } from './routes/_authenticated/_layout/profile'
import { Route as AuthenticatedLayoutProductsImport } from './routes/_authenticated/_layout/products'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedLayoutRoute = AuthenticatedLayoutImport.update({
  id: '/_authenticated/_layout',
  getParentRoute: () => rootRoute,
} as any)

const authLoginRoute = authLoginImport.update({
  id: '/(auth)/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedLayoutProfileRoute = AuthenticatedLayoutProfileImport.update(
  {
    id: '/profile',
    path: '/profile',
    getParentRoute: () => AuthenticatedLayoutRoute,
  } as any,
)

const AuthenticatedLayoutProductsRoute =
  AuthenticatedLayoutProductsImport.update({
    id: '/products',
    path: '/products',
    getParentRoute: () => AuthenticatedLayoutRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/login': {
      id: '/(auth)/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof authLoginImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated/_layout': {
      id: '/_authenticated/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthenticatedLayoutImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated/_layout/products': {
      id: '/_authenticated/_layout/products'
      path: '/products'
      fullPath: '/products'
      preLoaderRoute: typeof AuthenticatedLayoutProductsImport
      parentRoute: typeof AuthenticatedLayoutImport
    }
    '/_authenticated/_layout/profile': {
      id: '/_authenticated/_layout/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof AuthenticatedLayoutProfileImport
      parentRoute: typeof AuthenticatedLayoutImport
    }
  }
}

// Create and export the route tree

interface AuthenticatedLayoutRouteChildren {
  AuthenticatedLayoutProductsRoute: typeof AuthenticatedLayoutProductsRoute
  AuthenticatedLayoutProfileRoute: typeof AuthenticatedLayoutProfileRoute
}

const AuthenticatedLayoutRouteChildren: AuthenticatedLayoutRouteChildren = {
  AuthenticatedLayoutProductsRoute: AuthenticatedLayoutProductsRoute,
  AuthenticatedLayoutProfileRoute: AuthenticatedLayoutProfileRoute,
}

const AuthenticatedLayoutRouteWithChildren =
  AuthenticatedLayoutRoute._addFileChildren(AuthenticatedLayoutRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/login': typeof authLoginRoute
  '': typeof AuthenticatedLayoutRouteWithChildren
  '/products': typeof AuthenticatedLayoutProductsRoute
  '/profile': typeof AuthenticatedLayoutProfileRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/login': typeof authLoginRoute
  '': typeof AuthenticatedLayoutRouteWithChildren
  '/products': typeof AuthenticatedLayoutProductsRoute
  '/profile': typeof AuthenticatedLayoutProfileRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/(auth)/login': typeof authLoginRoute
  '/_authenticated/_layout': typeof AuthenticatedLayoutRouteWithChildren
  '/_authenticated/_layout/products': typeof AuthenticatedLayoutProductsRoute
  '/_authenticated/_layout/profile': typeof AuthenticatedLayoutProfileRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/login' | '' | '/products' | '/profile'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/login' | '' | '/products' | '/profile'
  id:
    | '__root__'
    | '/'
    | '/(auth)/login'
    | '/_authenticated/_layout'
    | '/_authenticated/_layout/products'
    | '/_authenticated/_layout/profile'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  authLoginRoute: typeof authLoginRoute
  AuthenticatedLayoutRoute: typeof AuthenticatedLayoutRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  authLoginRoute: authLoginRoute,
  AuthenticatedLayoutRoute: AuthenticatedLayoutRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/(auth)/login",
        "/_authenticated/_layout"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/(auth)/login": {
      "filePath": "(auth)/login.tsx"
    },
    "/_authenticated/_layout": {
      "filePath": "_authenticated/_layout.tsx",
      "children": [
        "/_authenticated/_layout/products",
        "/_authenticated/_layout/profile"
      ]
    },
    "/_authenticated/_layout/products": {
      "filePath": "_authenticated/_layout/products.tsx",
      "parent": "/_authenticated/_layout"
    },
    "/_authenticated/_layout/profile": {
      "filePath": "_authenticated/_layout/profile.tsx",
      "parent": "/_authenticated/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
