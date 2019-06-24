import styled from 'styled-components'
import {Form} from "semantic-ui-react"

export const FiltersContainer = styled.div`
  height: 45px;
  width: 100%; 
  box-shadow: 0 1px 5px 0 rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12);
  margin-bottom: 32px;
  position: fixed;
    top: 51px;
    z-index: 3;
    background-color: white;
`

export const Label = styled.label`
  color: white !important;
`

export const FormContainer = styled(Form)`
    max-width: 620px;
    @media (min-width: 720px) {
       min-width: 450px;
    }
    margin: auto;
`

export const FiltersInnerContainer = styled.div`
  background-color: #1b1c1d;
  padding: 20px;
  display: flex; 
  flex-direction: column
`
