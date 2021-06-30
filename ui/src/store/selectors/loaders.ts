import { createSelector } from 'reselect'
import { Store } from '../reducers'

export const getLoaders = createSelector(
    (state: Store) => state.loaders,
    loaders => loaders
)
