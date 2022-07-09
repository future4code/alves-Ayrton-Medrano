import React, { useState } from 'react'

function Post(props) {
  // Passo5
  // Crie a lógica de estados funcionais aqui.
  const [curtido, setCurtido] = useState(false)
  const [numeroCurtidas, setNumeroCurtidas] = useState(0)
  const [comentando, setComentando] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  const [comentarios, setComentarios] = useState([])
  const [inputValue, setInputValue] = useState('')

  // Passo7
  const onClickCurtida = () => {
    if (curtido) {
      setCurtido(!curtido)
      setNumeroCurtidas(numeroCurtidas - 1)
    } else {
      setCurtido(!curtido)
      setNumeroCurtidas(numeroCurtidas + 1)
    }
  }

  // Passo7
  const onClickComentario = () => {
    if (comentando) {
      setComentando(!comentando)
      setNumeroComentarios(numeroComentarios - 1)
    } else {
      setComentando(!comentando)
      setNumeroComentarios(numeroComentarios + 1)
    }
  }

  // Passo7
  const onChangeComentario = event => {
    setInputValue(event.target.value)
    // Crie a lógica de onChangeComentario aqui.
  }

  // Passo7
  const enviarComentario = comentario => {
    const spreadComentarios = [...comentarios, comentario]
    setComentarios(spreadComentarios, comentario)
    console.log(spreadComentarios)
    // Crie a lógica de enviarComentario aqui.
  }

  {
    /* Passo6 */
  }
  const caixaDeComentario = comentando ? (
    <>
      <label htmlFor={'comentario'}>Comente: </label>
      {/* Passo4 */}
      <input
        id={'comentario'}
        value={inputValue}
        onChange={onChangeComentario}
      />
      {/* Passo4 */}
      <button
        onClick={() => {
          enviarComentario(inputValue)
        }}
      >
        Enviar
      </button>
    </>
  ) : (
    // Passo8
    // <>Lógica de exibir lista de comentarios</>
    comentarios.map((comentario, index) => {
      return (
        <div key={index}>
          <p>{comentario}</p>
        </div>
      )
    })
  )

  return (
    <main>
      <header>
        <figure>
          {/* Passo3 */}
          <img src={props.fotoUsuario} alt={'Imagem do usuario'} />
          <span>{props.nomeUsuario}</span>
        </figure>
      </header>
      <hr />
      <main>
        <figure>
          {/* Passo3 */}
          <p>{`"Acordar para quem você é requer desapego de quem você imagina ser" (Alan Watts)`}</p>
          <img src={props.fotoPost} alt={'Imagem do post'} />
        </figure>
      </main>
      <hr />
      <footer>
        <section>
          {/* Passo6 */}
          <span>Número de curtidas: {numeroCurtidas}</span>
          {/* Passo4 */}
          <button onClick={onClickCurtida}>
            {/* Passo6 */}
            {numeroCurtidas === 0 ? 'Like' : 'Dislike'}
          </button>
        </section>
        <section>
          {/* Passo6 */}
          <span>Número de comentários: {numeroComentarios}</span>
          {/* Passo4 */}
          <button onClick={onClickComentario}>
            {/* Passo6 */}
            {comentando === true ? 'Fechar comentário' : 'Adicionar comentário'}
          </button>
          <h4>Comentários</h4>
          {caixaDeComentario}
        </section>
      </footer>
    </main>
  )
}

export default Post
