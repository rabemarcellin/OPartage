import { Link } from "react-router-dom";
import { useEffect } from "react";

// assets
import { PreviewDesktopImg, PreviewMobileImg, StarImg } from "../assets";

// Components
import Footer from "../components/layouts/Footer";
import Linebreak from "../components/Linebreak";
import Wysiwyg from "../components/Wysiwyg";
    

export default function Landing() {

    useEffect(() => {
        document.title = "OPartage - Acceuil";
    }, [])

    return (
        <div className="">
            <div className="mt-8 px-4 md:px-0">
                <h1 className=" text-5xl font-title text-slate-800 text-center">
                    Discuter, pas disputer
                </h1>
                <div className="m-6">
                    <p>
                        <span className="text-slate-500 mr-1">C'est ça l'idée !</span>
                        Un réseau social pour partager des idées
                        et cultures, non pas pour se battre à convaincre les autres
                        que la sienne est la bonne
                    </p>
                </div>
            </div>
            <Linebreak />
            <div className="px-4 lg:px-20 lg:grid grid-cols-2 gap-20 my-10">
                <div className="mb-8 lg:mb-0">
                    <div className="flex flex-col items-center">
                        <h1 className="font-title text-4xl mb-6">Appyue sur tes mots</h1>
                        <Wysiwyg demo />
                    </div>
                    
                </div>
                <div className="relative mb-8 md:mb-0 text-center lg:text-start">
                        <h1 className="text-4xl font-title">
                            Balance tout d'une seule fois
                        </h1>
                        <p className="my-6">
                            Un utilisateur n'est autorise à ne faire qu'une
                            commentaire sur une publication. Adieu l'occasion
                            des petites querelles
                        </p>
                        <div className="absolute right-0 -translate-x-16">
                            <div className="w-10 h-100">
                                <img src={StarImg} alt="etoile" />
                            </div>
                        </div>
                    </div>
            </div>
            <div className="flex justify-center items-center my-10 ">
                <div className="border-2 border-slate-800">
                    <div className="border-2 border-white hover:bg-white hover:text-black transition duration-500 bg-slate-800 text-white">
                       <button className="p-2">
                            Tester l'application
                        </button>  
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}
