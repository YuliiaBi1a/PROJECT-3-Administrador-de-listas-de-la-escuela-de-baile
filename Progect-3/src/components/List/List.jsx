import './List.css'
import { useState } from "react";
import { UserService } from '../../userService';

function List() {

    const [user, setUser] = useState(
        {
            userName: '',
            userSurname: '',

        }
    );

    const [userList, setUserList] = useState([]);
    const [eventName, setEventName] = useState('');

    async function getData() {

        let users = await UserService.getAllUsers();
        setUserList(users);
    }

    getData();

    function handleNameChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    function handleEventNameChange(e) {
        setEventName(e.target.value);
    }

    async function sendData() {

        let newUsers = await UserService.submitUser(user);
        setUserList((prevUsers) => [...prevUsers, newUsers]);


        // Очистіть поля введення після додавання користувача
        setUser({ userName: '', userSurname: '' });
    }




    return (
        <div className='formTableHolder'>
            <form className="formulary">

                <div >
                    <label className='labelImputHolder'>Título de la lista:
                        <input className="input" id="list-title" type="text"
                            name="eventName" value={eventName} onChange={handleEventNameChange} />
                    </label>
                </div>

                <div>
                    <label className='labelImputHolder'>Nombre:
                        <input className="input" id="first-name" type="text"
                            name="userName" value={user.userName} onChange={handleNameChange} />
                    </label>
                </div>

                < div className="double-column">

                    <label className='labelImputHolder'>Primer apellido:
                        <input className="input" id="first-lastname" type="text" name="userSurname" value={user.userSurname} onChange={handleNameChange} />
                    </label>

                    <label className='labelImputHolder'>Segundo apellido:
                        <input className="input" id="second-lastname" />
                    </label>

                </div>

                <div>
                    <label className='labelImputHolder'>Rol:
                        <select className="input" id="rol" defaultValue={""}>
                            <option disabled hidden> </option>
                            <option value={"Estudiante"}>Estudiante</option>
                            <option value={"Docente"}>Docente</option>
                            <option value={"PAS"}>PAS</option>
                        </select>
                    </label>
                </div>

                <div>
                    <label className='labelImputHolder'>Curso:
                        <select className="input" id="level" defaultValue={""}>
                            <option disabled hidden> </option>
                            <option value={"Básico"}>Básico</option>
                            <option value={"Intermedio"}>Intermedio</option>
                            <option value={"Avanzado"}>Avanzado</option>
                            <option value="-">-</option>
                        </select>
                    </label>
                </div>

                <div>
                    <label className='labelImputHolder'>Clase:
                        <select className="input" id="danceClass" defaultValue={""}>
                            <option disabled hidden> </option>
                            <option value={"Flamenco"}>Flamenco</option>
                            <option value={"Hip Hop"}>Hip Hop</option>
                            <option value={"Ballet"}>Ballet</option>
                            <option value={"-"}>-</option>
                        </select>
                    </label>
                </div>

                <div>
                    <label className='labelImputHolder'>Email:
                        <input type="email" className="input" id="email" required />
                    </label>
                </div>

                <div id="send-button-container">
                    <button type="button" className="send-button" onClick={sendData}>Enviar</button>
                </div>

            </form>

            <section className="tableSection">

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
                            </tr>
                        </thead>

                        <tbody id="tableBody">
                            {userList.map((user, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{user.userName}</td>
                                    <td>{user.userSurname}</td>
                                </tr>
                            ))}
                        </tbody>

                    </table>

                </div>

            </section>


        </div>
    )
}

export default List
