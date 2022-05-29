import  ReactDOM  from  "react-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from "react-router-dom";
//const displayText = <h1>Hello World!</h1>

// Never touch the DOM
// There is two ways of creating component
// 1:class based components(ES6)
// 2:functional components 

// JSX-->Javascript and XML
// XML-->we should have wrap all the elements in parent tag
// Every tag should have a closing tag 

const index = () => {
return (
    <div>
       <div>
           <div>
              <p>Welcome to App component</p> 
           </div>
       </div>
    </div>
);
};
ReactDOM.render(<BrowserRouter> <App /> </BrowserRouter>,document.getElementById("root")); 