
import PrimaryBox from "./Newcomponent/Box/PrimaryBox";
//import Parent from "./Newcomponent/ContextHook/Parent";
import React from "react";
//import UseEffectHook from "./Newcomponent/Hooks/EffectHook/UseEffectHook";
//import HookCounter from "./Newcomponent/Hooks/HookCounter";
import Header from "./Newcomponent/Header/Header";
//import User from "./Newcomponent/User/User";
//import Conditional from "./Newcomponent/Conditional/Conditional";
//import ContactUs from "./Newcomponent/ContactUs/ContactUs";
//import Counter from "./Newcomponent/Counter/Counter";
//import ClassComponent from "./Newcomponent/ClassComponent/ClassComponent";
//import Users from "./Newcomponent/MountingPhase/Users";
import  NewHeader from "./Newcomponent/NewHeader/NewHeader";
//import UserReduser from "./Newcomponent/UserReducer/UserReduser";
import Routing from "./Routing/Routing";
//import Pagination from "./Newcomponent/Pagination/Pagination";
//import UseStateHook from "./Newcomponent/StateHook/UseStateHook";
//import UpdatePagination from "./Newcomponent/UpdatePagination/UpdatePagination";
//import Person from "./Newcomponent/Person/Person";

//When you use context
//1.We need to create the context
//2.Provider provides the data
//3.consumer which consumes the data

//Default export-->only one time ina file and you need to use default beside export
//name export -->you export n of things
 export const UserContext = React.createContext();

const App = () => {
  const obj ={
    firstName:"Suresh",
  };
      return (
        <div>
            <div>
              <p>Welcome to App component</p>
                <div>
                  
                 <PrimaryBox text="Google Playstore" />
                 <PrimaryBox text="Twitter"/>
                 <PrimaryBox text="Download"/>
                 <PrimaryBox text= "Installing"/>
                 </div>
            </div><br/>
            <Header /><br/> 
            {/* <User />  */}
           {/* <Conditional /> */}
           {/* <ContactUs />  */}
           {/* <Counter/><br/> */}
            {/* <ClassComponent />  */}
           {/* <Users />   */}
           {/* <Pagination />  */}
            {/* <HookCounter />  */}
            {/* <Person />  */}
              {/* <UseStateHook /><br/ > */}
              {/* <UseEffectHook /> */}
              {/* <UpdatePagination /> */}
              {/* <UserContext.Provider value={{ name: "Suresh" }}>
             {/* <Parent />  */}
             {/* </UserContext.Provider>  */}
             <NewHeader />
             <Routing />
             {/* <UserReduser/> */}
                           

              


        </div> 
    );
    };
    export default App;
