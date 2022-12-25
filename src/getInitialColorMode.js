import {COLOR_MODE, MEDIA_QUERY, LOCAL_STORAGE_ITEM} from './constants';

export function getInitialColorMode() {
  const persistedColorPreference = window.localStorage.getItem(LOCAL_STORAGE_ITEM.COLOR_MODE);
  const hasPersistedPreference = typeof persistedColorPreference === 'string';
  if (hasPersistedPreference) {
    return persistedColorPreference === COLOR_MODE.DARK ? COLOR_MODE.DARK : COLOR_MODE.LIGHT;
  }
  const mql = window.matchMedia(`(${MEDIA_QUERY.PREFERS_COLOR_SCHEME}: ${COLOR_MODE.DARK})`);
  const hasMediaQueryPreference = typeof mql.matches === 'boolean';
  if (hasMediaQueryPreference) {
    return mql.matches ? COLOR_MODE.DARK : COLOR_MODE.LIGHT;
  }
  return COLOR_MODE.LIGHT;
}