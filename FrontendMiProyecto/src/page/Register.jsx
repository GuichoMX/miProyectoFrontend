import { useState } from "react";
import { Link } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";

const signupMutationGQL = gql`
mutation signUp($name: String, $lastname: String, $email: String!, $password: String!) {
signUp(
input: {
name: $name
lastname: $lastname
email: $email
password: $password
}
) {
name
lastname
email
}
}
`;

export const Register = () => {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [mutateFunction, { data, loading, error }] = useMutation(signupMutationGQL, {
        onError: (err) => {
            console.log("API error", err)
            localStorage.removeItem("token");
        },
    });

    const handleSignup = async (e) => {
        e.preventDefault();
        mutateFunction({ variables: { name, lastname, email, password } });
    };

    return (
        <div>
            <form onSubmit={handleSignup}>
                <h3>Register</h3>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="lastname" placeholder="Lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                <input type="address" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Register</button>
            </form>

            {data &&
                <small>Usuario {data.signUp.email} registrado con éxito <Link to={"/login"}>Ingresar</Link></small>
            }

            {error &&
                <small>error al tratar de registrar a {email}</small>
            }
        </div>
    )
} 