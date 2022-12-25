import {COLOR_MODE, COLORS, MEDIA_QUERY, LOCAL_STORAGE_ITEM} from '../../constants';

const codeToRunOnClient = `
  (function () {
    if (typeof window === 'object') {
      const COLOR_MODE = ${JSON.stringify(COLOR_MODE)}
      const COLORS = ${JSON.stringify(COLORS)}
      const MEDIA_QUERY = ${JSON.stringify(MEDIA_QUERY)}
      const LOCAL_STORAGE_ITEM = ${JSON.stringify(LOCAL_STORAGE_ITEM)}

      function getInitialColorMode() {
        const persistedColorPreference = window.localStorage.getItem(LOCAL_STORAGE_ITEM.COLOR_MODE);
        const hasPersistedPreference = typeof persistedColorPreference === 'string';
        if (hasPersistedPreference) {
          return persistedColorPreference === COLOR_MODE.DARK ? COLOR_MODE.DARK : COLOR_MODE.LIGHT;
        }
        const mql = window.matchMedia(\`(\${MEDIA_QUERY.PREFERS_COLOR_SCHEME}: \${COLOR_MODE.DARK})\`);
        const hasMediaQueryPreference = typeof mql.matches === 'boolean';
        if (hasMediaQueryPreference) {
          return mql.matches ? COLOR_MODE.DARK : COLOR_MODE.LIGHT;
        }
        return COLOR_MODE.LIGHT;
      }

      const colorMode = getInitialColorMode();
      const root = document.documentElement;
      const colors = COLORS[colorMode];
      Object.entries(colors).forEach(([name, value]) => {
        root.style.setProperty(\`--color-\${name}\`, value);
      });
      root.style.setProperty('--initial-color-mode', colorMode);
    }
  })()
`;

export const ColorModeScript = () => {
    return <>
        <style>
            {`
                html {
                    ${Object.entries(COLORS[COLOR_MODE.LIGHT]).map(([name, value]) => `--color-${name}: ${value};`).join('')}
                }
            `}
        </style>
        <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
    </>
}