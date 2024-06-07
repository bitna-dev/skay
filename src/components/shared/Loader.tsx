import { css } from '@emotion/react'
import { colors } from '@styles/colorPalette'
import { SyncLoader } from 'react-spinners'
import Flex from './Flex'
interface LoaderProps {
  size?: number
  full?: boolean
}

const Loader = ({ size = 11, full }: LoaderProps) => {
  if (full) {
    return <SyncLoader css={LoaderStyles} color={colors.gray} size={size} />
  }

  return (
    <Flex justify="center">
      <SyncLoader color={colors.gray} size={size} />
    </Flex>
  )
}
const LoaderStyles = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export default Loader
