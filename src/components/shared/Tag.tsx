import styled from '@emotion/styled'
import { Colors, colors } from '@styles/colorPalette'
import { TagSize, tagSizeMap } from '@styles/tag'
interface TagProps {
  color?: string
  backgroundColor?: string
  size?: TagSize
}

const Tag = styled.span<TagProps>(
  ({ color = colors.white, backgroundColor = colors.blue }) => ({
    fontWeight: 'bold',
    borderRadius: '4px',
    textAlign: 'center',
    color: color in colors ? colors[color as Colors] : color,
    backgroundColor:
      backgroundColor in colors
        ? colors[backgroundColor as Colors]
        : backgroundColor,
  }),
  ({ size = 'small' }) => tagSizeMap[size],
)

// 사이즈까지 만들어보기
export default Tag
