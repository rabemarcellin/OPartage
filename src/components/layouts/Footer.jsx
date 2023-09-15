import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Linebreak from "../Linebreak";

export default function Footer() {
    return (
        <div id="footer" className="bg-slate-100">
            <div className='px-4 py-8 md:p-20'>
                <div className="mb-10">
                    <p className="my-2">
                        <span className="font-title mr-1">Soyer à jour !</span>
                        Recevoir les nouveautés OPartage
                    </p>
                    <div className="flex flex-wrap gap-2 item-center">
                        <div>
                            <form>
                                <input placeholder="adresse email" className="border border-slate-800 p-2" />
                            </form>
                        </div>
                        <button className="max-w-max py-2 active:scale-95 bg-slate-800 text-white px-8 rounded-md">S'abonner</button>
                    </div>
                </div>
                <div className="md:grid grid-cols-2 gap-6">
                    <div className="md:mb-0">
                        <h1 className="font-title text-center md:text-start">Contact</h1>
                        <ul className="text-s">
                            <li className="my-2">
                                <span className="mr-2">
                                    <FontAwesomeIcon
                                        icon={["fas", "location-dot"]}
                                    />
                                </span>
                                <span>
                                    {" "}
                                    Amboditsiry, 101 Antananarivo Madagascar{" "}
                                </span>
                            </li>
                            <li className="my-2">
                                <span className="mr-2">
                                    <FontAwesomeIcon icon={["fas", "phone"]} />
                                </span>
                                <span> +261 38 77 051 95</span>
                            </li>
                            <li className="my-2">
                                <span className="mr-2">
                                    <FontAwesomeIcon icon={["fas", "envelope"]} />{" "}
                                </span>
                                <a
                                    className="underline text-blue-500"
                                    href="mailto:marcellinp20.aps1a@gmail.com"
                                >
                                    marcellinp20.aps1a@gmail.com
                                </a>
                            </li>

                            <li className="my-2">
                                <a href="https://www.facebook.com/rabemarcellin"
                                target="_blank">
                                    <span className="mr-2">
                                        <FontAwesomeIcon icon={["fab", "facebook"]} />{" "}
                                    </span>
                                    <span>RABE Marcellin</span>
                                </a>
                            </li>
                        </ul>
                        <div className="block md:hidden">
                            <Linebreak />
                        </div>
                    </div>
                    <div className="md:mb-0">
                        <h1 className="font-title text-center md:text-start">A propos</h1>
                        <ul className="">
                            <li className="my-2">
                                <span>Nous contacter</span>
                            </li>
                            <li className="my-2">
                                <span className="mr-2">
                                    Politique de confidentialité
                                </span>
                            </li>
                            <li className="my-2">
                                <span>À propos de l'application</span>
                            </li>
                            <li className="my-2">
                                <span> Besoin d'aide ?</span>
                            </li>
                        </ul>
                        <div className="block md:hidden">
                            <Linebreak />
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center pb-4 md:pb-10 text-slate-800 font-title">
                <span>Copyright (©) 2023 - RABE Marcellin</span>
            </div>
        </div>
    );
}
