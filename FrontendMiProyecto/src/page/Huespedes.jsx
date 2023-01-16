import { gql, useQuery } from '@apollo/client'
import { useNavigate } from 'react-router-dom'
import { AuthService } from '../auth'
import { Huesped } from '../component/Huesped'

const GET_HUESPEDES = gql`
query GetHuespedes {
getAllHuespedes {
id_usuario
nombres
apellidoP
apellidoM
edad
pais
ciudad
num_contacto
num_referencia
}
}
`;


export const Huespedes = () => {

    const navigate = useNavigate()

    const { loading, error, data } = useQuery(GET_HUESPEDES, {
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
                {data.getAllHuespedes.map((huesped) => <Huesped key={huesped.id_usuario} data={huesped} />)}
            </div>
        </div>
    )
} 