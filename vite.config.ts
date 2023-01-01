import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Unocss from 'unocss/vite';
import { presetUno, presetTypography, presetWebFonts, presetAttributify  } from 'unocss'

export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    Unocss({
      presets: [
        presetUno(),
        presetTypography({
          selectorName: 'markdown'
        }),
        presetWebFonts({
          provider: 'google',
          fonts: {
            sans: 'Lexend Deca'
          }
        }),
        presetAttributify()
      ],
      theme: {
        colors: {
          'light': '#FFF7F8',
          'dark': '#000807',
          'green': '#00FF87',
          'blue': '#60EFFF',
          'gray': {
            'light1': '#404545',
            'light2': '#19201F',
            'dark1': '#BFBABA',
            'dark2': '#E6DFE0',
          }
        },
      }
    }),
  ],
});