import { Form, Link } from "react-router-dom";
import { useEffect } from "react";
import LogoImg from  "../assets/img/logo.png";


export default function Login() {

    useEffect(() => {
        document.title = "OPartage - Connexion";
    }, [])

    return (
        <div className="h-screen flex flex-col p-10">
            <div className="max-w-[500px] mx-auto">
                <div className="pb-8 underline">
                    <Link to="/">Retour à l'acceuil</Link>
                </div>
                <h1 className="my-4 font-title font-2xl text-center">OPartage</h1>
                <div>
                    <div className="flex items-center">
                        <div className="w-full">
                            <Form>
                                <div className="my-4">
                                    <div className="mb-1">
                                        <label>Adresse email</label>
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            className="w-full border rounded-md p-2"
                                            placeholder="rakoto.rabe@gmail.com"
                                        />
                                    </div>
                                </div>
                                <div className="my-4">
                                    <div className="mb-1">
                                        <label>Mot de passe</label>
                                    </div>
                                    <div>
                                        <input
                                            type="password"
                                            className="w-full border rounded-md p-2"
                                            placeholder="****"
                                            autocomplete="current-password"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <button
                                        className="bg-slate-700 text-white w-full 
                                border h-10 rounded-md"
                                        type="submit"
                                    >
                                        Envoyer
                                    </button>
                                </div>
                                <div>
                                    <div className="p-4 text-center">
                                        <span>Vous n'avez pas de compte ? </span>
                                        <span className="underline text-blue-400">
                                            <Link to="/register">S'inscrire</Link>
                                        </span>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
