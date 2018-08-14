import { swiss as theme } from 'mdx-deck/themes'

const COLORS = {
  purple: '#563263',
  pink: '#EF435D',
  yellow: '#FCBF32',
  white: '#F3FCF0',
  black: '#1F271B'
}

const h1ShadowDistance = 3

export default {
  ...theme,
  colors: {
    background: COLORS.purple,
    link: COLORS.yellow,
    text: COLORS.white
  },
  font: 'Open Sans, sans-serif',
  weights: [300],
  h1: {
    fontFamily: 'Bungee Inline',
    fontSize: '4.5em',
    lineHeight: 1,
    color: COLORS.pink,
    textShadow: `
      ${h1ShadowDistance}px ${h1ShadowDistance}px ${COLORS.yellow},
      ${h1ShadowDistance * 2}px ${h1ShadowDistance * 2}px ${COLORS.black}
    `
  }
}
