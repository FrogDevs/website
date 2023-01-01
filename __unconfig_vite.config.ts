
let __unconfig_data;
let __unconfig_stub = function (data = {}) { __unconfig_data = data };
__unconfig_stub.default = (data = {}) => { __unconfig_data = data };
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const Unocss = __unconfig_stub;;
import { presetUno, presetTypography, presetWebFonts, presetAttributify  } from 'unocss'

const __unconfig_default =  defineConfig({
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
if (typeof __unconfig_default === "function") __unconfig_default(...[{"command":"serve","mode":"development"}]);export default __unconfig_data;