import styled from 'styled-components'
import {Form} from "semantic-ui-react"

export const FiltersContainer = styled.div`
  height: 40px;
  width: 100%; 
  box-shadow: 0 1px 5px 0 rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12);
  margin-bottom: 32px;
`

export const Label = styled.label`
  color: white !important;
`

export const FormContainer = styled(Form)`
    max-width: 600px;
     margin: auto;
`
export const FiltersInnerContainer = styled.div`
  background-color: #5063F0;
  padding: 20px;
  display: flex; 
  flex-direction: column
`
