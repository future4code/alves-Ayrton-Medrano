import React from 'react'
import Styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { goToListTrip, goToLogin } from '../routes/Coordinator'
import { StyledButton } from '../components/StyledButton'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div>
      <ButtonTrip onClick={() => goToListTrip(navigate)}>Viagens</ButtonTrip>
      <ButtonLogin onClick={() => goToLogin(navigate)}>Login</ButtonLogin>
    </div>
  )
}

const ButtonTrip = Styled.button`
position: absolute;
left: 40%;
top: 50%;
background: #F2B705;
   background-image: -webkit-linear-gradient(top, #F2B705, #E7E5DF);
   background-image: -moz-linear-gradient(top, #F2B705, #E7E5DF);
   background-image: -ms-linear-gradient(top, #F2B705, #E7E5DF);
   background-image: -o-linear-gradient(top, #F2B705, #E7E5DF);
   background-image: -webkit-gradient(to bottom, #F2B705, #E7E5DF);
   -webkit-border-radius: 10px;
   -moz-border-radius: 10px;
   border-radius: 10px;
   color: #092047;
   font-family: Georgia;
   font-size: 20px;
   font-weight: 20px;
   /* padding: px; */
   -webkit-box-shadow: 1px 1px 20px 0 #000000;
   -moz-box-shadow: 1px 1px 20px 0 #000000;
   box-shadow: 1px 1px 20px 0 #000000;
   text-shadow: 1px 1px 20px #000000;
   border: solid #337FED 1px;
   text-decoration: none;
   display: inline-block;
   cursor: pointer;
   text-align: center;

:hover {
   border: solid #337FED 1px;
   background: #F2B705;
   background-image: -webkit-linear-gradient(top, #F2B705, #3D94F6);
   background-image: -moz-linear-gradient(top, #F2B705, #3D94F6);
   background-image: -ms-linear-gradient(top, #F2B705, #3D94F6);
   background-image: -o-linear-gradient(top, #F2B705, #3D94F6);
   background-image: -webkit-gradient(to bottom, #F2B705, #3D94F6);
   -webkit-border-radius: 10px;
   -moz-border-radius: 10px;
   border-radius: 10px;
   text-decoration: none;
}


`

const ButtonLogin = Styled.button`
position: absolute;
left: 60%;
top: 50%;
background: #F2B705;
   background-image: -webkit-linear-gradient(top, #F2B705, #E7E5DF);
   background-image: -moz-linear-gradient(top, #F2B705, #E7E5DF);
   background-image: -ms-linear-gradient(top, #F2B705, #E7E5DF);
   background-image: -o-linear-gradient(top, #F2B705, #E7E5DF);
   background-image: -webkit-gradient(to bottom, #F2B705, #E7E5DF);
   -webkit-border-radius: 10px;
   -moz-border-radius: 10px;
   border-radius: 10px;
   color: #092047;
   font-family: Georgia;
   font-size: 20px;
   font-weight: 20px;
   /* padding: px; */
   -webkit-box-shadow: 1px 1px 20px 0 #000000;
   -moz-box-shadow: 1px 1px 20px 0 #000000;
   box-shadow: 1px 1px 20px 0 #000000;
   text-shadow: 1px 1px 20px #000000;
   border: solid #337FED 1px;
   text-decoration: none;
   display: inline-block;
   cursor: pointer;
   text-align: center;

:hover {
   border: solid #337FED 1px;
   background: #F2B705;
   background-image: -webkit-linear-gradient(top, #F2B705, #3D94F6);
   background-image: -moz-linear-gradient(top, #F2B705, #3D94F6);
   background-image: -ms-linear-gradient(top, #F2B705, #3D94F6);
   background-image: -o-linear-gradient(top, #F2B705, #3D94F6);
   background-image: -webkit-gradient(to bottom, #F2B705, #3D94F6);
   -webkit-border-radius: 10px;
   -moz-border-radius: 10px;
   border-radius: 10px;
   text-decoration: none;
}
`
