import styled from 'styled-components'
import { Card } from './style-loginRegister'

export const ContainInfo = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    width:100%;
    height:100vh;
    @media (min-width: 768px) {
        align-items:center;
    }
`

export const List = styled.ul`
    padding:0 25px;
    padding-left:0;
    list-style-type: none;
`

export const CardInfo = styled(Card)`
    max-width:100%;
    width:700px !important;
    padding:0 !important;
    margin:0;
    @media(max-width:768px) {
        border:none;
    }
`

export const ElementInfo = styled.li`
    border-bottom:1px solid #dbdbdb;
    &:nth-child(6){
        border-bottom:0;
        padding-bottom:0;
    }
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:15px 10px;
    width:100%;
    p,b{
        font-size:16px;
    }
    p{
        color:gray;
    }
    img{
        border-radius:10px;
        object-fit:cover;
    }
    @media (min-width: 768px) {
        p{
            margin-left:40px;
            width:250px;
        }
        justify-content:flex-start;
    }
`

export const ContainEditButton = styled.div`
    padding:15px;
    align-items:center;
    border-bottom:1px solid #dbdbdb;
    div{
        width:200px;
    }
    h2,p{
        margin:0;
    }
    @media(min-width: 768px){
        padding:15px 45px;
    }
`

export const ContainTitle = styled.div`
    text-align:center;
`

export const Edit = styled.button`
    border:none;
    width:100px;
    height:40px;
    background:none;
    color:gray;
    border:1px solid gray;
    border-radius:15px;
    font-size:18px;
    cursor:pointer;
    transition:all 0.1s linear;
    &:hover{
        background:gray;
        color:#fff;
    }
`