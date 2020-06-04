import { createTheme, getFontSizing } from 'newskit';

export default createTheme('page7-theme', {
  // Overriding at this first stage means these colour
  // values will be used in all style presets, instead of the
  // NewsKit Light defaults.
  colorOverrides: {
    inkBrand010: '#006699',
    inkContrast: '#1d1d1b',
    inkSubtle: '#696969',
    interactive030: '#006699',
  },
  // Overriding at this first stage means these font family
  // values will be used in all type presets, instead of the
  // NewsKit Light defaults.
  fontOverrides: {
    fontFamily1: {
      fontFamily: 'TimesDigitalRegular',
    },
    fontFamily2: {
      fontFamily: 'TimesModernBold',
    },
    fontFamily3: {
      fontFamily: 'GillSansMTStdMedium',
    },
  },
  // Overriding at this end stage will only affect these specific presets.
  themeOverrider: ({ fonts, colors, borderRadius, borders }) => ({
    typePresets: {
      heading050: {
        ...fonts.fontFamily2,
        letterSpacing: fonts.fontLetterSpacing030,
        fontSize: fonts.fontSize080,
        lineHeight: fonts.fontLineHeight010,
      },
      label030: {
        ...fonts.fontFamily3,
      },
      buttonMedium: {
        ...fonts.fontFamily3,
        textTransform: 'uppercase',
      },
    },
    stylePresets: {
      buttonOutlinedPrimary: {
        base: {
          borderRadius: borderRadius.borderRadiusSharp,
          borderWidth: borders.borderWidth020,
        },
      },
      buttonMinimalPrimary: {
        base: {
          borderRadius: borderRadius.borderRadiusSharp,
        },
      },
      contrastText: {
        base: { color: colors.inkContrast },
      },
      subtleText: {
        base: { color: colors.inkSubtle },
      },
    },
  }),
});
