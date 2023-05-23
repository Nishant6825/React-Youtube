import { useState } from 'react'
import React from 'react'
import PropTypes from 'prop-types'
import '../index.css'


export default function TextForm(props) {
    const [text, setText] = useState('')
    
    const toUp = () => {
        // console.log('Text converted to Upper case ')
        let newText = text.toUpperCase()
        console.log(newText)
        setText(newText)
        props.showAlert('Text converted to Upper Case', 'success')
    }
    const cap = () => {
        let capital = text.charAt(0).toUpperCase() + text.slice(1)
        // console.log(capital
        setText(capital)
        props.showAlert('Text converted to Capital', 'success')

    }
    const tolow = () => {
        let low = text.toLowerCase()
        console.log(low)
        setText(low)
        props.showAlert('Text converted to Lower Case', 'success')

    }
    const handleEvent = (event) => {
        // console.log('Key is Pressed')
        setText(event.target.value)
    }
    const cleartext = () => {
        let newtext = '';
        setText(newtext)
    }
    const alterCase = () => {
        let char = text.toLowerCase().split('')
        for (var i = 0; i < char.length; i += 3) {
            char[i] = char[i].toUpperCase()
        }
        let some = char.join('')
        setText(some)
        props.showAlert('Text converted to Alternate Case', 'success')

    }
    const handleCopy = () => {
        var text = document.getElementById('myBox')
        text.select();
        text.setSelectionRange(0, 9999)
        navigator.clipboard.writeText(text.value)
        props.showAlert('The text was copied to clipboard', 'success')
    }

    const tit = () => {
        let newT = text.toLowerCase().split(' ')
        let cc = newT.map(el => el.charAt(0).toUpperCase() + el.slice(1))
        let ss = cc.join(" ")
        console.log(ss)
        setText(ss)
        props.showAlert('Text converted to Title Case', 'success')

    }
    


    return (
        <>
            <div className='container' style={{ color:props.mode === 'light' ? 'black' : 'white', backgroundColor: props.mode === 'light' ? 'white' : 'grey' }}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">Text Area</label>
                    <textarea className="form-control" value={text} onChange={handleEvent} style={{ color:props.mode === 'light' ? 'black' : 'white' ,backgroundColor: props.mode === 'light' ? 'white' : 'grey' }} id="myBox" rows="7" placeholder='Chal maal daaal....'></textarea>
                </div>
                <div className='row'>
                <button className={props.mode === 'light'? "btn btn-info mx-1": "btn btn-dark" } onClick={toUp}>Convert to Upper Case</button>
                {/* <br /> */}
                <button className={props.mode === 'light'? "btn btn-info mx-1": "btn btn-dark"  }onClick={tolow}>Convert to Lower Case</button>
                {/* <br /> */}
                <button className={props.mode === 'light'? "btn btn-info mx-1": "btn btn-dark" }onClick={cap}>Capitalize</button>
                <button className={props.mode === 'light'? "btn btn-info mx-1": "btn btn-dark" }onClick={cleartext}>Clear Text</button>
                <button className={props.mode === 'light'? "btn btn-info mx-1": "btn btn-dark" }onClick={alterCase}>Alternate Caps</button>
                <button className={props.mode === 'light'? "btn btn-info mx-1": "btn btn-dark" }onClick={tit}>Title Case </button>
                <button className={props.mode === 'light'? "btn btn-info mx-1": "btn btn-dark" }onClick={handleCopy}>Copy Text </button>
                </div>
            </div>
            <div className="container"style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color:props.mode === 'light' ? 'black' : 'white' }}>
                <h1>This is a summary of text</h1>
                <p>This summary have {text.length === 0 ? '0' : text.split(' ').length} words and {text.replace(/\s/g, '').length} letters in it  </p>
                <h2>Preview <br /></h2>
                <p>{text.length > 0 ? text : 'Write Something in textbox.....'} </p>
              
            </div>
        </>

    )
}
TextForm.propTypes = {
    heading: PropTypes.string
}