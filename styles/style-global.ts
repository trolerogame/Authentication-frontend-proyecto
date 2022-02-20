import styled,{createGlobalStyle} from 'styled-components';


export const StyleGlobal = createGlobalStyle`
    body{
        margin:0;
        padding:0;
        box-sizing: border-box;
        height:100vh;
        font-family: 'Lato', sans-serif;
        font-family: 'Poppins', sans-serif;
        font-family: 'Rubik', sans-serif;
        font-family: 'Source Sans Pro', sans-serif;
        position: relative;
    }

    .flex{
        display: flex;
    }
    .flex-column{
        flex-direction: column;
    }
    .align-center{
        align-items: center;
    }
    .justify-between{
        justify-content: space-between;
    }
    .error{
        font-size:18px;
        color:red;
    }
`

export const HeaderStyle:any = styled.header`
    align-items: center;
    position: relative;
    left:0;
    top:0;
    width:100%;
    height:100px;
    padding:0;
    #img{
        margin-left:10px;
    }
    .angle{
        transition:all .1s linear;
        transform: ${({rotate}:any) => rotate ? 'rotate(180deg)' : 'rotate(0deg)'}
    }
    button{
        margin-right:10px;
    }
    
    button{
        width:200px;
        position:relative;
        height:50px;
        border:none;
        outline:none;
        background-color: transparent;
        align-items: center;
        gap:10px;
        cursor:pointer;
    }
    button img{
        border-radius:10px;
    }
    @media (min-width: 768px){
        position: fixed;
        padding:0;
        #img{
            margin-left:50px;
        }
        button{
            margin-right:50px;
        }
    }

`


export const DropDown = styled.div`
    width:160px;
    justify-content:start;
    margin:0;
    padding:15px 10px 0 10px;
    background:#fff;
    gap:10px;
    border-radius:15px;
    border:1px solid #dbdbdb;
    position:absolute;
    bottom:-170px;
    button{
        margin:0;
        width:100%;
        padding:10px;
        border-top:1px solid #dbdbdb;
        color:rgb(235,87,87);
    }
    a,button{
        font-size:15px;
        text-align:start;
    }
    a{
        text-decoration:none;
        color:#333;
        padding:10px;
        border-radius:7px;
        transition:all .1s linear;
    }
    a:hover{
        background:#eee;
    }
`