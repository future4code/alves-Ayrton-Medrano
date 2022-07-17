import styled from 'styled-components'

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2em;
`
export const Input = styled.input`
  display: block;
  width: 300px;
  margin: 0.5em;
  border: none;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #f2b705;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #f2b705;
  }
  :-ms-input-placeholder {
    color: #f2b705;
  }
`

export const Select = styled.select`
  display: block;
  padding: 10px;
  width: 320px;
  margin: 0.5em;
  border: none;
  background-color: rgba(0, 0, 0, 0.5);
  color: #f2b705;
`

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #092047;
  display: flex;
  flex-direction: column;
  gap: 1%;
  width: 30vw;
  align-items: center;
`
