import { Link } from "react-router-dom";
import { useEffect } from "react";

// assets
import { PreviewDesktopImg, PreviewMobileImg, StarImg } from "../assets";

// Components
import Footer from "../components/layouts/Footer";
import Linebreak from "../components/Linebreak";
import Wysiwyg, { RichEditor } from "../components/Wysiwyg";
import { TypeAnimation } from "react-type-animation";

export default function Landing() {
    const demoText = "OPartage utilise un éditeur de texte riche en fonctionnalité pour vous permettre de styliser le contenu de votre publication."

    useEffect(() => {
        document.title = "OPartage - Acceuil";
    }, [])

    return (
        <div className="">
            <div className="mt-8 px-4 md:px-0">
                <h1 className="text-4xl lg:text-5xl font-title text-slate-800 text-center">
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
            <div className="px-4 lg:px-20 grid lg:grid-cols-2 lg:gap-20 my-10">
                <div className="order-2 lg:order-1">
                    <RichEditor />
                </div>
                <div className="order-1 lg:mb-0">
                    <div className="flex flex-col items-center">
                        <h1 className="font-title text-3xl lg:text-4xl mb-6">Appyue sur tes mots</h1>
                            <TypeAnimation 
                            wrapper='div'
                                speed={50}
                                repeat={0}
                                sequence={[demoText, 1000]}
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative mb-8 md:mb-0 text-center">
                    <h1 className="text-3xl lg:text-4xl font-title">
                        Balance tout d'une seule fois
                    </h1>
                    <p className="my-6">
                        Un utilisateur n'est autorisé qu'à un
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
