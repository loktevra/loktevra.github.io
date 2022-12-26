export const COLOR_MODE = {
    LIGHT: 'light',
    DARK: 'dark'
}

export const COLORS = {
    [COLOR_MODE.LIGHT]: {
        text: '#000',
        background: '#fff',
    },
    [COLOR_MODE.DARK]: {
        text: '#fff',
        background: '#000',
    }
}

export const MEDIA_QUERY = {
    PREFERS_COLOR_SCHEME: 'prefers-color-scheme',
}

export const LOCAL_STORAGE_ITEM = {
    COLOR_MODE: 'color-mode'
}
