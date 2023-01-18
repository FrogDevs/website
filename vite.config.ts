import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Unocss from 'unocss/vite';
import presetUno from '@unocss/preset-uno'
import presetMini from 'unocss/preset-mini'
import presetWebFonts from '@unocss/preset-web-fonts'
import presetAttributify from '@unocss/preset-attributify'
import { presetTypography } from 'unocss'

export default defineConfig({
  plugins: [vue({ reactivityTransform: true }), Unocss({
      theme: {
        colors: {
          'light': '#FFF7F8',
          'green': '#00FF87',
          'blue': '#60EFFF',
          'gray': '#404545',
          'graySd': '#19201F',
          'dark': '#000807',
          'darkGray': '#BFBABA',
          'darkGraySd': '#E6DFE0',
        },
      },
      presets: [
        presetUno(),
        presetMini(),
        presetTypography({
          selectorName: 'markdown'
        }),
        presetWebFonts({
          provider: 'google',
          fonts: {
            poppins: 'Poppins',
            ptserif: 'PT Serif'
          }
        }),
        presetAttributify()
      ]
    }),
  ],
});