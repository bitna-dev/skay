import { Hotel } from '@components/models/hotel'
import Flex from '@components/shared/Flex'
import Spacing from '@components/shared/Spacing'
import Text from '@components/shared/Text'
import { css } from '@emotion/react'
import useShare from '@hooks/useShare'

const ActionButtons = ({ hotel }: { hotel: Hotel }) => {
  const share = useShare()
  const { name, comment, mainImageUrl } = hotel
  return (
    <Flex css={ContainerStyles}>
      <Button
        label="찜하기"
        iconUrl="https://cdn4.iconfinder.com/data/icons/twitter-29/512/166_Heart_Love_Like_Twitter-512.png"
        onClick={() => {}}
      />
      <Button
        label="공유하기"
        //iconUrl={}
        onClick={() => {
          share({
            title: name,
            description: comment,
            imageUrl: mainImageUrl,
            buttonLabel: 'Skay에서 보기',
          })
        }}
        iconUrl="https://cdn1.iconfinder.com/data/icons/rounded-social-media/512/kakao-512.png"
      />
      <Button
        label="링크복사"
        iconUrl="https://cdn3.iconfinder.com/data/icons/business-912/24/copy-512.png"
        onClick={() => {}}
      />
    </Flex>
  )
}

const Button = ({
  label,
  iconUrl,
  onClick,
}: {
  label: string
  iconUrl?: string
  onClick: () => void
}) => {
  return (
    <Flex direction="column" align="center" onClick={onClick}>
      <img src={iconUrl} alt={label} width={30} height={30} />
      <Spacing size={6} />
      <Text typography="t7">{label}</Text>
    </Flex>
  )
}

const ContainerStyles = css`
  padding: 24px;
  cursor: pointer;
  & * {
    flex: 1;
  }
`
export default ActionButtons
