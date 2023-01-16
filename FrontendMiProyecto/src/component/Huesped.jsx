export const Huesped = (props) => {
    const { id_usuario, nombres, apellidoP, apellidoM, edad, pais, ciudad, num_contacto, num_referencia } = props.data
    return (
        <div className="card" style={{ width: '20rem' }}>
            <img className="card-img-top" src="https://via.placeholder.com/300x180?text=Huesped image" alt="Huesped image" />
            <div className="card-body">
                <h3 className="card-title">{nombres} {apellidoP} {apellidoM}</h3>
                <p className="card-text">Edad: {edad}</p>
                <p className="card-text">Pais: {pais}</p>
                <p className="card-text">Ciudad: {ciudad}</p>
                <p className="card-text">Celular: {num_contacto}</p>
                <p className="card-text">Referencia: {num_referencia}</p>
            </div>
        </div>
    )
} 