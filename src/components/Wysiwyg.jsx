import React, { useEffect } from 'react'
import { GrBold, GrItalic, GrUnderline, GrStrikeThrough,
    GrTextAlignLeft,
    GrTextAlignRight,
    GrTextAlignCenter,
    GrTextAlignFull } from "react-icons/gr"
import {
    FaListOl,
    FaListUl, 
} from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation';



export default function Wysiwyg(demo) {
    const demoText = "OPartage utilise un éditeur de texte riche en fonctionnalité pour vous permettre de styliser le contenu de votre publication."

    const textOptions = [GrBold, GrItalic, GrUnderline, GrStrikeThrough]
    const alignmentOptions = [GrTextAlignLeft,
        GrTextAlignRight,
        GrTextAlignCenter,
        GrTextAlignFull]
    const listOptions = [FaListOl, FaListUl]

    const options = [
        textOptions, alignmentOptions, listOptions
    ]

  return (
    <div className="h-[300px] max-w-[500px] w-full">
        <div className="flex flex-col h-full p-2">
        <div classname="flex-none">
                <div className='flex flex-wrap bg-gradient border-2 border-slate-500 rounded'>
                    {
                        options.map(option => (
                            <div className="flex  flex-nowrap divide-x divide-black gap-2 border-black rounded-xl font-thin p-2">
                                {
                                    option.map((Icon, index) => (
                                        index !== 2 ? (
                                            <button className='active:scale-95 hover:text-gray-500 text-center'>
                                                <Icon key={index} className='ml-2' />
                                            </button>
                                        ):(
                                            <button className='hidden md:block active:scale-95 hover:text-gray-500 text-center'>
                                                <Icon key={index} className='ml-2' />
                                            </button>
                                        )
                                       
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            
            </div>
            <div className="flex-1 mt-8 border-2 border-black shadow-xl p-2">
                {(demo && demoText) && (
                    <TypeAnimation 
                        wrapper='div'
                            speed={50}
                            repeat={0}
                            sequence={[demoText, 1000]}
                    />
                )}
            </div>
            
        </div>
    </div>
  )
}
