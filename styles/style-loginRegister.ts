import styled from 'styled-components'


export const ContainCardForm = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    b{
        margin:0;
        display:block;
        font-size:18px;
    }
    p{
        font-size:14px;
    }

    #containText {
        margin-top:25px;
        margin-bottom:15px;
    }
    img{
        width:100px;
    }
`

export const Card = styled.div`
    border-radius:10px;
    border:1px solid #dbdbdb;
    display: flex;
    flex-direction: column;
    padding:15px 30px;
    #link{
        margin:0;
        margin-top:50px;
        text-align: center;
        font-size:14px;
    }
`

export const InputStyle:any = styled.input`
    width: calc(100% - 35px);
    height: 30px;
    margin:5px 0;
    border-radius:5px;
    outline: none;
    border:1px solid ${({ validate }: any) =>
			validate === null ? '#dbdbdb' : (validate === true ? '#2ecc71' : 'rgb(235,87,87)')};
    padding-left:30px;

`

export const ButtonForm = styled.button`
    border:none;
    outline: none;
    width: 100%;
    height: 30px;
    margin-top:15px;
    border-radius:5px;
    cursor:pointer;
    background-color:rgb(47,128,237);
    color:#fff;
`