import './List.css'
import { useState } from "react";
import { UserService } from '../../userService';


function List() {

    const [user, setUser] = useState(
        {
            userName: '',
            userSurname: '',
            userSecondSurname: '',
            userRol: '',
            userCourse: '',
            userClass: '',
            userEmail: '',
        }
    );

    const [userList, setUserList] = useState([]);
    const [eventName, setEventName] = useState('');
    const [editingUser, setEditingUser] = useState(null);

    async function getData() {

        try {
            let users = await UserService.getAllUsers();
            setUserList(users);
        } catch (error) {
            console.error("Error fetching users:", error);
            alert ("Error al recibir usuarios. Por favor, inténtelo de nuevo.");
            return;
        }
    }

    getData();

    function handleNameChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    function handleEventNameChange(e) {
        setEventName(e.target.value);
    }

    async function sendData() {

        if (!user.userName ||
            !user.userSurname ||
            !user.userSecondSurname ||
            !user.userRol ||
            !user.userCourse ||
            !user.userClass ||
            !user.userEmail) {
            alert('Rellene todos los campos obligatorios');
            return;
        }
        try {

            if (editingUser) {

                await UserService.editUser(editingUser.id, user);
                setEditingUser(null);
            } else {

                let newUsers = await UserService.submitUser({ ...user });
                setUserList((prevUsers) => [...prevUsers, newUsers]);

            }
            setUser({
                userName: '',
                userSurname: '',
                userSecondSurname: '',
                userRol: '',
                userCourse: '',
                userClass: '',
                userEmail: '',
            });

        } catch (error) {
            console.error("Error submitting/editing user:", error);
           alert("Se ha producido un error al enviar/editar un usuario. Es posible que haya dejado campos en blanco o que los datos introducidos no coincidan con el formato esperado. Por favor, compruébalo e inténtalo de nuevo.");
            return;
        }

    }

    function editUser(selectedUser) {
        setUser({
            userName: selectedUser.userName,
            userSurname: selectedUser.userSurname,
            userSecondSurname: selectedUser.userSecondSurname,
            userRol: selectedUser.userRol,
            userCourse: selectedUser.userCourse,
            userClass: selectedUser.userClass,
            userEmail: selectedUser.userEmail,
        });
        setEditingUser(selectedUser);
    }

    
    async function deleteUser(id) {
        
        try {
            await UserService.deleteUser(id);
        getData();

        } catch (error) {
            console.error("Error fetching users:", error);
            alert ("Error al eliminar usuarios. Por favor, inténtelo de nuevo.");
        }
    }



    return (
        <div className='formTableHolder'>

            <form className="formulary">

                <label className='labelImputHolder'>Título de la lista:
                    <input className="input" id="list-title" type="text"
                        name="eventName" value={eventName} onChange={handleEventNameChange} />
                </label>

                <label className='labelImputHolder'>*Nombre:
                    <input className="input" id="first-name" type="text"
                        name="userName" value={user.userName} onChange={handleNameChange} required />
                </label>


                < div className="double-column">

                    <label className='labelImputHolder'>*Primer apellido:
                        <input className="input" id="first-lastname" type="text"
                            name="userSurname" value={user.userSurname} onChange={handleNameChange} required />
                    </label>

                    <label className='labelImputHolder'>*Segundo apellido:
                        <input className="input" id="second-lastname" type="text"
                            name="userSecondSurname" value={user.userSecondSurname} onChange={handleNameChange} required />
                    </label>
                </div>


                <label className='labelImputHolder'>*Rol:
                    <select className="input" id="rol"
                        name="userRol" value={user.userRol} onChange={handleNameChange} required>
                        <option disabled hidden> </option>
                        <option value={"Estudiante"}>Estudiante</option>
                        <option value={"Docente"}>Docente</option>
                        <option value={"PAS"}>PAS</option>
                    </select>
                </label>

                <label className='labelImputHolder'>*Curso:
                    <select className="input" id="level"
                        name="userCourse" value={user.userCourse} onChange={handleNameChange} required>
                        <option disabled hidden> </option>
                        <option value={"Básico"}>Básico</option>
                        <option value={"Intermedio"}>Intermedio</option>
                        <option value={"Avanzado"}>Avanzado</option>
                        <option value="-">-</option>
                    </select>
                </label>

                <label className='labelImputHolder'>*Clase:
                    <select className="input" id="danceClass"
                        name="userClass" value={user.userClass} onChange={handleNameChange} required>
                        <option disabled hidden> </option>
                        <option value={"Flamenco"}>Flamenco</option>
                        <option value={"Hip Hop"}>Hip Hop</option>
                        <option value={"Ballet"}>Ballet</option>
                        <option value={"-"}>-</option>
                    </select>
                </label>



                <label className='labelImputHolder'>*Email:
                    <input type="email" className="input" id="email"
                        name="userEmail" value={user.userEmail} onChange={handleNameChange} placeholder='example@mail.com' required />
                </label>
                <p>El símbolo (*) indica los campos que deben rellenarse obligatoriamente</p>


                <div id="send-button-container">
                    <button type="button" className="btn send-button" onClick={sendData}>Enviar</button>
                </div>

            </form>



            <div className="list">

                <h2 id="table-title">{eventName !== '' ? `Participantes para ${eventName}` : "Nuevo nombre del evento"}</h2>

                <table id="myTable">

                    <thead>
                        <tr>
                            <th>№</th>
                            <th>Nombre</th>
                            <th>Primer Apellido</th>
                            <th>Segundo Apellido</th>
                            <th>Rol</th>
                            <th>Curso</th>
                            <th>Clase</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody id="tableBody">
                        {userList.map((user, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{user.userName}</td>
                                <td>{user.userSurname}</td>
                                <td>{user.userSecondSurname}</td>
                                <td>{user.userRol}</td>
                                <td>{user.userCourse}</td>
                                <td>{user.userClass}</td>
                                <td>{user.userEmail}</td>
                                <td>
                                    <button className='edDelBtn' id='editBtn' onClick={() => editUser(user)}></button>
                                    <button className='edDelBtn' id='deleteBtn' onClick={() => deleteUser(user.id)}></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>

        </div>
    )




}

export default List
