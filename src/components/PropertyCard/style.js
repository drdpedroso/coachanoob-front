import styled from "styled-components";

const COLORS = {
    GREEN: '#36b67e'
}

const PriceText = styled.div`
    color: ${COLORS.GREEN};
    margin-top: 10px;
    font-size: 1.18em;
    font-weight: bold;
`

const InformationRow = styled.div`
    display: flex;
    flex-direction: row;
    div {
      margin: 5px 10px 5px 2px;
      color: rgba(0,0,0,.54);
      font-weight: 400;
      font-size: 0.96em;
    }
`

const AddressRow = styled.div`
    margin: 5px 0px;
    span {
        font-weight: 550
    }
`

const ArrowContainer = styled.div`
    width: 44px;
    display: flex !important;
    text-align: center;
    margin: auto;
    height: 100%;
    border-top-left-radius: 1px;
    border-top-right-radius: 2px;
    
    z-index: 2;
    ${(props) => props.right ? 'right: 0;' : 'left: 0;'} 
    cursor: pointer;
    &:hover {
        background-color: rgba(0,0,0,0.24);
        visibility: visible;
    }
    &::before {
        margin: auto;
    }
    
`


export {ArrowContainer, AddressRow, InformationRow, PriceText}
