import Styled from 'styled-components'

export const Container = Styled.div`
display:flex;
flex-direction:column;
align-items:center;`
export const Form = Styled.form`
text-align:center;
`
export const Input = Styled.input`
display:block;
width:300px;
margin:0.5em;
border:none;
padding:10px;
background-color: rgba(0,0,0,0.5);
color:#F2B705;
::placeholder,
  ::-webkit-input-placeholder {
    color: #F2B705;
  }
  :-ms-input-placeholder {
     color: #F2B705;
  }


`
