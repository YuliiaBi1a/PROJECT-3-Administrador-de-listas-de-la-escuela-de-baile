import './List.css'
function List() {

    return (
        <>
            <form className="formulary">

                <div >
                    <label className='labelImputHolder'>Título de la lista:
                        <input className="input" id="list-title" />
                    </label>
                </div>

                <div>
                    <label className='labelImputHolder'>Nombre:
                        <input className="input" id="first-name" />
                    </label>
                </div>

                < div className="double-column">
                    
                        <label className='labelImputHolder'>Primer apellido:
                        <input className="input" id="first-lastname" />
                        </label>

                        <label className='labelImputHolder'>Segundo apellido:
                        <input className="input" id="second-lastname" />
                        </label>
                    
                </div>

                <div>
                    <label className='labelImputHolder'>Rol:
                        <select className="input" id="rol">
                            <option value="" selected disabled hidden> </option>
                            <option value="Estudiante">Estudiante</option>
                            <option value="Docente">Docente</option>
                            <option value="PAS">PAS</option>
                        </select>
                    </label>
                </div>

                <div>
                    <label className='labelImputHolder'>Curso:
                        <select className="input" id="level">
                            <option value="empty" selected disabled hidden> </option>
                            <option value="Básico">Básico</option>
                            <option value="Intermedio">Intermedio</option>
                            <option value="Avanzado">Avanzado</option>
                            <option value="-">-</option>
                        </select>
                    </label>
                </div>

                <div>
                    <label className='labelImputHolder'>Clase:
                        <select className="input" id="danceClass">
                            <option value="empty" selected disabled hidden> </option>
                            <option value="Flamenco">Flamenco</option>
                            <option value="Hip Hop">Hip Hop</option>
                            <option value="Ballet">Ballet</option>
                            <option value="-">-</option>
                        </select>
                    </label>
                </div>

                <div>
                    <label className='labelImputHolder'>Email:
                        <input type="email" className="input" id="email" required />
                    </label>
                </div>

                <div id="send-button-container">
                    <button type="button" className="send-button" onclick="addToTable()">Enviar</button>
                </div>

            </form>

            <section className="tableSection">

                <div className="list">

                    <h1 id="table-title">
                        Listado
                    </h1>

                    <table id="myTable">

                        <tr>
                            <th>
                                Nombre:
                            </th>
                            <th>
                                Primer Apellido:
                            </th>
                            <th>
                                Segundo Apellido:
                            </th>
                            <th>
                                Rol:
                            </th>
                            <th>
                                Curso:
                            </th>
                            <th>
                                Clase:
                            </th>
                            <th>
                                Email:
                            </th>
                        </tr>

                        <tbody id="tableBody">

                        </tbody>

                    </table>

                </div>

            </section>


        </>
    )
}

export default List
