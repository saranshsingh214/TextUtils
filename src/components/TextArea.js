import React,{useState} from 'react'

export default function TextArea(props) {
  const [text, setText] = useState("Enter the text here");
  const handleUpClick=()=>{
    // console.log("Uppercase was clicked"+text);
    let newText=text.toUpperCase(); 
    props.showAlert('Converted to Uppercase','success');

    setText(newText);
  }
  const handleLoClick=()=>{
    // console.log("Uppercase was clicked"+text);
    let newText=text.toLowerCase(); 
    props.showAlert('Converted to Lowercase','success');

    setText(newText);
  }
  const handleOnChange=(event)=>{
    // console.log("On Change");
    setText(event.target.value);
  }
  const handleClear=()=>{
    setText('');
    props.showAlert('All text Cleared','success');
  }
  const handleCopy=()=>{
    var txt=document.getElementById('exampleFormControlTextarea1');
    txt.select();
    navigator.clipboard.writeText(txt.value);
    props.showAlert('All text Copied','success');
  }
  const handleExtraSpaces=()=>{
    let newTxt = text.split(/[ ]+/);
    setText(newTxt.join(" "));
    props.showAlert('Extra Spaces Removed','success');
  }
  return (
    <>
      <div className='Container' style={{color: props.mode==='dark'?'white':'black'}}>
          <h1>{props.heading}</h1>
          <div className="mb-3" >
              <textarea className="form-control my-3" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="6" style={{backgroundColor: props.mode==='dark'?'grey':'white',
            color: props.mode==='dark'?'white':'black'}} ></textarea>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
          <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lower Case</button>
          <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
          <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
          <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
          </div>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
          <h3>Your Text Summary</h3>
          <summary className={`btn btn-${props.mode==='dark'?'secondary':'info'}`}>
            {text.split(" ").length} words and {text.length} characters
          </summary>
          {/* <h2>Preview</h2>
          {text} */}
      </div>
    </>
  )
}

 