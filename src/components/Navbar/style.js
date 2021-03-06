import styled from 'styled-components'
import {Segment} from "semantic-ui-react"

export const DesktopSegment = styled(Segment)`
    minHeight: 700;
    padding: 1em 0em
`

export const MobileSegment = styled(Segment)`
    height: 56px;
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    position: fixed !important;
    width: 100%;
    z-index: 2;
`
