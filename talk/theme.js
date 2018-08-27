import React from 'react'
import { swiss as theme } from 'mdx-deck/themes'
import { COLORS } from './constants'
import Provider from './Provider'
import tomorrow from 'react-syntax-highlighter/styles/prism/tomorrow'

const h1ShadowDistance = 4
const h2ShadowDistance = 2

export default {
  ...theme,
  prism: {
    style: tomorrow
  },
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
      ${h1ShadowDistance}px ${h1ShadowDistance}px ${COLORS.purple},
      ${h1ShadowDistance * 2}px ${h1ShadowDistance * 2}px ${COLORS.yellow}
    `
  },
  h2: {
    fontFamily: 'Bungee Inline',
    fontSize: '2.35em',
    lineHeight: 1,
    textShadow: `
      ${h2ShadowDistance}px ${h2ShadowDistance}px ${COLORS.purple},
      ${h2ShadowDistance * 2}px ${h2ShadowDistance * 2}px ${COLORS.pink}
    `
  },
  Provider
}
