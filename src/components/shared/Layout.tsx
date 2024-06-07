import styled from '@emotion/styled'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <LayoutStyle>{children}</LayoutStyle>
}

const LayoutStyle = styled.div`
  min-width: 480px;
`
export default Layout
