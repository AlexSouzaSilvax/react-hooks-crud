import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', username: '' }
	const [user, setUser] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {					
				//Implementa metodo https salvar na base.
				alert(`Salvou Usuário. ${user.name} - ${user.username}`);
				event.preventDefault();
				if (!user.name || !user.username) return
				//adiciona o obj para lista de usuarios
				props.addUser(user)
				//limpa o form
				setUser(initialFormState)			
			}}
		>
			<label>Nome</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label>Sobrenome</label>
			<input type="text" name="username" value={user.username} onChange={handleInputChange} />
			<button>Adicionar</button>
		</form>
	)
}

export default AddUserForm
