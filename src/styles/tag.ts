import { css } from '@emotion/react'

export const tagSizeMap = {
  small: css`
    font-size: 10px;
    padding: 4px 10px;
  `,
  medium: css`
    font-size: 12px;
    padding: 10px 16px;
  `,
  large: css`
    font-size: 14px;
    padding: 14px 18px;
  `,
}

export type TagSize = keyof typeof tagSizeMap
