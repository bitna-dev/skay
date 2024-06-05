import {
  ButtonColor,
  buttonColorMap,
  ButtonSize,
  buttonSizeMap,
  buttonWeakMap,
} from '@styles/button'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Text from './Text'
import Flex from './Flex'
import Spacing from './Spacing'

interface ButtonProps {
  color?: ButtonColor
  size?: ButtonSize
  weak?: boolean
  full?: boolean
  disabled?: boolean
}

const BaseButton = styled.button<ButtonProps>(
  {
    cursor: 'pointer',
    fontWeight: 'bold',
    borderRadius: '6px',
  },
  ({ color = 'primary', weak }) =>
    weak ? buttonWeakMap[color] : buttonColorMap[color],
  ({ size = 'small' }) => buttonSizeMap[size],
  ({ full }) =>
    full
      ? css`
          display: block;
          width: 100%;
          border-radius: 0;
        `
      : undefined,
  ({ disabled }) =>
    disabled
      ? css`
          opacity: 0.26;
          cursor: initial;
        `
      : undefined,
)

export const ButtonGroup = ({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) => {
  return (
    <Flex direction="column">
      {title != null && (
        <>
          <Text typography="t6" bold>
            {title}
          </Text>{' '}
          <Spacing size={8} />
        </>
      )}
      <Flex css={ButtonGroupStyle}>{children}</Flex>
    </Flex>
  )
}

const ButtonGroupStyle = css`
  flex-wrap: wrap;
  gap: 10px;
  & button {
    flex: 1;
  }
`

const Button = BaseButton as typeof BaseButton & {
  Group: typeof ButtonGroup
}

Button.Group = ButtonGroup
export default Button