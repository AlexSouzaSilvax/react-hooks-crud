import React from 'react';

const Tabela = props => (
    <table>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Apelido</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
      {props.usuario.length > 0 ? (
        props.usuario.map(usuario => (
          <tr key={usuario.id}>
            <td>{usuario.nome}</td>
            <td>{usuario.apelido}</td>
            <td>
              <button className="button muted-button">Editar</button>
              <button className="button muted-button">Deletar</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>Lista vazia.</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default Tabela;