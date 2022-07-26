import Styled from 'styled-components'

export const ScreenContainer = Styled.main`
display: flex;
min-height: 100vh;
justify-content:center;
text-align:center;
position: relative;
align-items: center;

`
export const LoginForm = Styled.form`
flex-direction: column;

`
export const NameInput = Styled.input`
display: block;
max-width:90vw ;
min-width:80vw;
border: 1px solid #D5D8DE;
border-radius: 4px;
padding:13px;
margin-bottom:1em;
position: absolute;
top: 220px;
`
export const EmailInput = Styled.input`
display: block;
max-width:90vw ;
min-width:80vw;
border: 1px solid #D5D8DE;
border-radius: 4px;
padding:13px;
position: absolute;
top: 280px;
`
export const PasswordInput = Styled.input`
display: block;
max-width:90vw ;
min-width:80vw;
border: 1px solid #D5D8DE;
border-radius: 4px;
padding:13px;
position: absolute;
top: 340px;
`
export const SignUpButton = Styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 13px ;
background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
border-radius: 27px;
border:none;
max-width:90vw ;
min-width:80vw;
margin-top: 3em;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 25px;
color:white;


`

export const Title = Styled.h1`
font-family: IBM Plex Sans;
font-size: 36px;
font-weight: 700;
line-height: 47px;
letter-spacing: 0em;
text-align: left;
color:#373737;
position: absolute;
width: 152px;
height: 47px;
left: 130px;
top: 100px;
`
export const Texto = Styled.p`
position: absolute;
width: 378px;
height: 21px;
left: 15px;
top: 155px;
font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 21px;
color:#000000;

`
