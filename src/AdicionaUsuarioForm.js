import React, { useState } from 'react'

const AdicionaUsuarioForm = props => {
  const initialFormState = { id: null, nome: '', apelido: '' }
  const [usuario, setUsuario] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.target

    setUsuario({ ...usuario, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (!usuario.nome || !usuario.apelido) return

        props.adicionaUsuario(usuario)
        setUsuario(initialFormState)
      }}
    >
      <label>Nome</label>
      <input type="text" name="nome" value={usuario.nome} onChange={handleInputChange} />
      <label>Apelido</label>
      <input type="text" name="apelido" value={usuario.apelido} onChange={handleInputChange} />
      <button>Adicionar novo usuário</button>
    </form>
  )
}

export default AdicionaUsuarioForm