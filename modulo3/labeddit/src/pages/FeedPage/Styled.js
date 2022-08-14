import Styled from 'styled-components'

export const ScreenContainer = Styled.main`
display: flex;
min-height: 100vh;
justify-content:center;
text-align:center;
/* position: relative; */
flex-direction: column;


`
export const PostButton = Styled.button`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 13px ;
background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
border-radius: 27px;
border:none;
max-width:90vw ;
min-width:80vw;
margin-top: 20em;
margin-left:2.5em;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 25px;
color:white;

`
export const UserName = Styled.p`
max-width: 50%;
height: 16px;
font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 16px;
text-align: center;
color: #6F6F6F;
`
export const PostCard = Styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: column;
align-items: flex-start;
padding: 9px 10px;
gap: 18px;
width: 364px;
height: 167px;
background: #FBFBFB;
border: 1px solid #E0E0E0;
border-radius: 12px;
margin-left:1.5em;
margin-top: 1em;
cursor: pointer;
overflow: hidden;
`
export const BodyText = Styled.p`
width: 335px;
height: 50px;
font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 23px;
color: #000000;
margin-top:1em;
overflow: hidden;

`
// export const TitleText = Styled.h4`
// width: 335px;
// height: 69px;
// font-family: 'IBM Plex Sans';
// font-style: bold;
// font-weight: 400;
// font-size: 22px;
// line-height: 23px;
// color: #000000;
// `
export const InputTitle = Styled.input`
position: absolute;
top:15vh;
left:1.5em;
display: block;
width: 364px;
background: #FBFBFB;
border: 1px solid #E0E0E0;
border-radius: 12px;
align-items: flex-start;
padding: 9px 10px;

`
export const InputBody = Styled.input`
position: absolute;
top:20vh;
left:1.5em;
display: block;
width: 364px;
height: 167px;
background: #FBFBFB;
border: 1px solid #E0E0E0;
border-radius: 12px;
align-items: flex-start;
padding: 9px 10px;
`
export const DivLike = Styled.div`
margin-left:0.5em;
border: 1px solid #E0E0E0;
border-radius: 12px;
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100px;


`
