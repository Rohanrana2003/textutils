import React,{useState} from   'react'

export default function TextForms(props) {
    const HandleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText );
        props.showAlert("Converted to UpperCase", "success");
    }
    const HandleLoClick = () =>{
      let newText = text.toLowerCase();
      setText(newText );
      props.showAlert("Converted to LowerCase", "success");

  }
    const HandleClClick = () =>{
      let newText = "";
      setText(newText );
      props.showAlert("Text Cleared", "success");

  }

  const HandleCopy = () =>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied", "success");

  }
  
    const HandleReverse = () => {
      //  Convert string to array
      let strArr = text.split("");

      // Reverse the array
      strArr = strArr.reverse();

      // Converting array to string 
      let newText = strArr.join("");
      setText(newText);
      props.showAlert("Text Reversed", "success");


  };

  const HandleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Spaces Handeled", "success");

  }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const[text,setText] = useState("Enter text here")

    const countWords = (str) =>{
      let count=0;
      if(text ===""){
        count = 0;
      }
      else{
        count = str.trim().split(/\s+/).length;
      }
      return count;
    }

  return (
    <>
    <div className='container' style={{color: props.mode==='light' ? '#041010':'white'}}>
        <h1>{props.heading}</h1>
        <div className= "mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light' ? 'white':'grey', color: props.mode==='light' ? '#041010':'white'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-success mx-1" onClick={HandleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-success mx-1" onClick={HandleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-success mx-1" onClick={HandleReverse}>Reverse</button>
        <button className="btn btn-success mx-1" onClick={HandleCopy}>Copy Text</button>
        <button className="btn btn-success mx-1" onClick={HandleExtraSpaces}>Remove Extra Spaces</button>


        <button className="btn btn-dark mx-1" onClick={HandleClClick}>Clear</button>


    </div>
    <div className="container my-2" style={{color: props.mode==='light' ? '#041010':'white'}}>
      <h2>Text summary</h2>
      <p>{countWords(text)} words and {text.length} characters.</p>
      <p>{.008 * (text.split(" ").length-1)} minutes to read.</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Enter something above in textbox to preview it here."}</p>
    </div>
    
    </>
      
  )
}
