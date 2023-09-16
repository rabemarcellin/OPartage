import React, { useCallback, useState } from 'react'
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
import { Transforms, Element, createEditor, Editor } from 'slate';
import { Slate, Editable, withReact } from "slate-react"

const CodeElement = props => {
    return (
        <div className='font-title text-sm bg-slate-100 p-2 rounded-md' {...props.attributes}>
            {props.children}
        </div>
    )
}

const DefaultElement = props => {
    return (
        <p {...props.attributes}>{props.children}</p>
    )
}

const Leaf = props => {
    return (
        <span {...props.attributes}
        class={`${props.leaf.bold ? 'font-semibold': ''}`}
        >
            {props.children}
        </span>
    )
}

const CustomEditor = {
    isBoldMarkActive(editor) {
        const marks  = Editor.marks(editor)
        return marks ? marks.bold === true : false
    },
    isCodeBlockActive(editor) {
        const [match] = Editor.nodes(editor, {
            match: n => {
                return n.type === "code"
            }
        })

        return !!match
    },
    toggleBoldMark(editor) {
        const isActive = CustomEditor.isBoldMarkActive(editor)
        if(isActive) {
            Editor.removeMark(editor, 'bold')
        } else {
            Editor.addMark(editor, 'bold', true)
        }
    },
    toggleCodeBlock(editor) {
        const isActive = CustomEditor.isCodeBlockActive(editor)
        const type = isActive ? null : 'code';
        Transforms.setNodes(
                editor,
                { type: type },
                { match: n => Element.isElement(n) && Editor.isBlock(editor, n) }
        )
    }
}

export const RichEditor = () => {
    const initialValue = [
        {
            type: 'paragraph',
            children: [{
                text: 'A line of text in the paragraph'
            }]
        }
    ]

    const renderElement = useCallback(props => {
        switch(props.element.type) {
            case 'code':
                return <CodeElement {...props} />
            default:
                return <DefaultElement {...props} />
        }
    }) 

    const renderLeaf = useCallback(props => {
        return (
            <Leaf {...props} />
        )
    })

    const [editor] = useState(withReact(createEditor()))

    return (
        <div className="flex flex-col my-8 w-full h-[250px] border rounded-md shadow">
            <div data-type="slate-editor" className='flex-1 p-4 overflow-x-hidden overflow-y-scroll'>
                <Slate editor={editor} initialValue={initialValue}>
                <Editable 
                    renderElement={renderElement}
                    renderLeaf={renderLeaf}
                    onKeyDown={event => {
                        if (!event.ctrlKey) {
                            return;
                        }
                        switch (event.key) {
                            case "c": {
                                event.preventDefault()
                                CustomEditor.toggleCodeBlock(editor)
                                break;
                            }
                            case "b": {
                                event.preventDefault()
                                CustomEditor.toggleBoldMark(editor)
                                break;
                            }
                        }
                    }}
                />
                </Slate>
            </div>
            <div className="flex-none z-10 bottom-5 w-full left-0 mb-4">
                <div className="w-11/12 mx-auto bg-slate-100 p-2 border flex gap-2 divide-x justify-center">
                    <GrBold />
                    <GrItalic />
                    <GrUnderline />
                </div>
            </div>
        </div>      

            
    )
}

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
                                        <button className='hidden md:block active:scale-95 hover:text-gray-500 text-center'>
                                            <Icon key={index} className='ml-2' />
                                        </button>
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
