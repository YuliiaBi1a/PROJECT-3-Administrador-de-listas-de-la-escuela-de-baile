import './ButtonForList.css'

function ButtonForList() {

    function listAlert() {
        alert("Lista guardada correctamente");
    };

    return (
        <section className="listButton">
            <section>
                <button type="button" className="btn saveListButton" id="saveListButton" onClick={listAlert}>Guardar</button>
            </section>

            <section>

                <form action="#" id="loadlistbutton">

                    <select className='btn selectButtonList' id="selectButtonList" name="listas">

                        <option defaultValue=""  id='loardListsText'>Cargar Listas</option>

                        <optgroup label="Rol">
                            <option value="estudiante">Estudiante</option>
                            <option value="docente">Docente</option>
                            <option value="pas">PAS</option>
                            <option value="otros">-</option>
                        </optgroup>

                        <optgroup label="Estilo">
                            <option value="flamenco">Flamenco</option>
                            <option value="hiphop">Hip Hop</option>
                            <option value="Ballet">Ballet</option>
                        </optgroup>

                        <optgroup label="Curso">
                            <option value="basico">Básico</option>
                            <option value="intermedio">Intermedio</option>
                            <option value="superior">Superior</option>
                        </optgroup>

                        <optgroup label="Clase">
                            <option value="primero">Primero</option>
                            <option value="segundo">Segundo</option>
                            <option value="tercero">Tercero</option>
                        </optgroup>

                    </select>

                </form>

            </section>
        </section>
    )
}

export default ButtonForList 