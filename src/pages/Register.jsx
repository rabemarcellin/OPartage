import { Form, Link } from "react-router-dom";
import { useEffect } from "react";
import LogoImg from  "../assets/img/logo.png";



export default function Register() {

    useEffect(() => {
        document.title = "OPartage - Inscription";
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
                                <div className="grid grid-cols-2 gap-4">
                                <div className="my-4">
                                    <div className="mb-1">
                                        <label>Nom complet</label>
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            className="w-full border rounded-md p-2"
                                            placeholder="RAKOTO Rabe"
                                        />
                                    </div>
                                </div>
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
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center my-2">
                                        <span className="mr-4">
                                            <input
                                                id="accept-condition"
                                                type="checkbox"
                                            />
                                        </span>
                                        <label htmlFor="accept-condition">
                                            J'accepte les conditions d'utilisation
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        className="bg-slate-700 text-white w-full 
                                border rounded-md p-2"
                                        type="submit"
                                    >
                                        Envoyer
                                    </button>
                                </div>
                                <div>
                                    <div className="p-4 text-center">
                                        <span>J'ai déjà un compte | </span>

                                        <span className="underline text-blue-400 whitespace-nowrap">
                                            <Link to="/login">Se connecter</Link>
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
