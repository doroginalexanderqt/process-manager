import { createSelector } from 'reselect'
import { Store } from '../reducers'

export const getLoaders = createSelector(
    (state: Store) => state.loaders,
    loaders => loaders
)
export const getLoader = createSelector(
    (state: Store, loaderKey: string) => state.loaders[loaderKey],
    loader => loader
)
