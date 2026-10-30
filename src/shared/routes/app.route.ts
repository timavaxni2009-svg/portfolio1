export const APP_ROUTES = {
    root: (path: string = '') => path,
    HOME: () => APP_ROUTES.root('/'),
} as const;