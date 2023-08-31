import React  from "react";

export default function About(props) {
  let Mystyle ={
    color : props.mode === 'dark'?'white':'black',
    backgroundColor : props.mode === 'dark'?'grey':'white'
  }
  
  return (
    <div className="container" >
        <h1>About us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" >
            <button className="accordion-button" style={Mystyle}
              type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong> Analyze Your text</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={Mystyle}>
              <strong> Mr.word</strong> givs you a way to analyze your text 
              quickly and efficiently. Be it word count, characters or reading time. 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={Mystyle}  type="button"
              data-bs-toggle="collapse"data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong>Free to use</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body"style={Mystyle} >
            Its a free web application to use.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={Mystyle}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={Mystyle}
              type="button"data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong>Browser Compatible</strong>           
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse"data-bs-parent="#accordionExample">
            <div className="accordion-body">
             Its a browser Compatiable site can be opened anywhere though web
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
