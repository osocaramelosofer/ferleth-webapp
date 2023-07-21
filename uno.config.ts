// uno.config.ts
import {
  defineConfig, presetAttributify, presetIcons,
  presetTypography, presetUno, presetWebFonts,
  transformerDirectives, transformerVariantGroup
} from 'unocss'

export default defineConfig({
  shortcuts: [
    // ...
  ],
  theme: {
    colors: {
      'veryCool': '#0bd8a2', // class="text-very-cool"
      'valiente': '#EBEDD8',
      'valiente-second': '#FFB41D',
      // 'b': '#1e1e20',original black
      // 'b': '#010d1a', first one blue dark
      'b': 'rgba(1, 31, 61, 1)',
      'w': 'rgba(255,255,245,0.86)',

    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
