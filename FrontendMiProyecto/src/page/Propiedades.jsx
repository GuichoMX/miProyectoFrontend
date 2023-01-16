import { gql, useQuery } from '@apollo/client'
import { useNavigate } from 'react-router-dom'
import { AuthService } from '../auth'
import { Propiedad } from '../component/Propiedad'

const GET_PROPIEDADES = gql`
query GetPropiedades {
getAllPropiedades {
id_propiedad
nombre
direccion
fecha_inicio
fecha_final
max_personas
id_usuario
}
}
`;


export const Propiedades = () => {

    const navigate = useNavigate()

    const { loading, error, data } = useQuery(GET_PROPIEDADES, {
        onError: (err) => {
            switch (err.message) {
                case 'jwt expired':
                    AuthService.logout()
                    navigate('/login')
                    window.location.reload()
                    break;
                // TODO: resolver otros casos de error
                default:
                    break;
            }
        }
    })

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    return (
        <div className="container">
            <div className="row">
                {data.getAllPropiedades.map((propiedad) => <Propiedad key={propiedad.id_propiedad} data={propiedad} />)}
            </div>
        </div>
    )
} 