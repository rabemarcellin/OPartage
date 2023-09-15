import { Link } from "react-router-dom";
import LogoImg from  "../../assets/img/logo.png";

export default function Navbar() {
    return (
        <div className="py-6">
            <div className="border-2 border-slate-800 rounded-full md:w-3/4 md:m-auto">
            <div className="shadow-lg border-2 border- bg-slate-800 text-white rounded-full p-2">
                <nav className="flex justify-between items-center p-2">
                    <div className="text-lg">
                        <Link to="/" className="text-xl">OPartage</Link>
                    </div>
                    <ul className="list-none flex">
                        <Link className="mx-2" to="/login">
                            Connexion
                        </Link>
                        <Link className="mx-2" to="/register">
                            S'inscrire
                        </Link>
                    </ul>
                </nav>
            </div>
            </div>
        </div>
    );
}
