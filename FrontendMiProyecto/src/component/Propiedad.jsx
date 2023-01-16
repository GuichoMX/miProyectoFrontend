export const Propiedad = (props) => {
    const { id_propiedad, nombre, direccion, fecha_inicio, fecha_final, max_personas, id_usuario } = props.data
    return (
        <div className="card" style={{ width: '20rem' }}>
            <img className="card-img-top" src="https://via.placeholder.com/300x180?text=Propiedad image" alt="Propiedad image" />
            <div className="card-body">
                <h3 className="card-title">{nombre}</h3>
                <p className="card-text">Direccion: {direccion}</p>
                <p className="card-text">Entrada: {fecha_inicio}</p>
                <p className="card-text">Salida: {fecha_final}</p>
                <p className="card-text">Máximo de personas: {max_personas}</p>
                <p className="card-text">Usuario: {id_usuario}</p>
            </div>
        </div>
    )
} 