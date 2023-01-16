//Informaciòn para login
// Usuario: escobedotrenado@hotmail.com
// Contraseña: 123

import { useNavigate } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import { useState } from "react";

const loginMutationGQL = gql`
mutation signIn($email: String!, $password: String!) {
signIn(email: $email, password: $password)
}
`;

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const [mutateFunction, { data, loading, error }] = useMutation(loginMutationGQL, {
        onCompleted: (data) => {
            localStorage.setItem("token", data.signIn);
            navigate("/propiedades")
            window.location.reload()
        },
        onError: (err) => console.log("API error", err),
    });

    const handleLogin = async (e) => {
        e.preventDefault();
        mutateFunction({ variables: { email, password } });
    };

    if (loading) return 'Submitting...';

    return (
        <section className="title">
            Login page
            <form style={{ display: "grid" }} onSubmit={handleLogin}>
                <label>
                    Email:
                    <input type="text" name="name" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <label>
                    Contraseña:
                    <input type="text" name="name" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <input style={{ width: "230px" }} type="submit" value="Submit" />
            </form>

            {error && `Error: ${error.message}`}
        </section>
    )
} 