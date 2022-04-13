import Heading from "./HeadingInfo";
import { InputInfo } from "./InputInfo";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { NavLink } from "react-router-dom";
import {useHistory} from 'react-router-dom';
import axios from 'axios';
const styles = {
    box:{
        width:350,
        height:545,
        margin:"-1% 70% 0% 38%",

    },
    headin:{
        fontFamily: "Poppins",
        fontSize: "35px",
        fontStyle: "normal",
        fontWeight: 600,
        textAlign: "center",
    },
    textFlex:{
        display:"flex",
        justifyContent:"space-between",
        marginBottom:5
    },
    button2:{
        cursor:"pointer",
        width:"352px",
        height:"40px",
        fontFamily: "Poppins",
        fontSize: 17,
        fontStyle: "normal",
        fontWeight: 500,
        marginBottom:5,
        color:"white",
        border:"none",
        outline:"none",
        backgroundColor:"#AD3648",
    },
    input:{
        width:"343px",
        height:"40px",
        fontFamily: "Poppins",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: 500,
        color: "#6C7592",
        
    },
    padding:{
        marginBottom:15
    },
    button:{
        cursor:"pointer",
        width:"352px",
        height:"40px",
        fontFamily: "Poppins",
        fontSize: 17,
        fontStyle: "normal",
        fontWeight: 500,
        marginBottom:5,
        marginTop:22,
        color:"white",
        border:"none",
        outline:"none",
        backgroundColor:"#FF546D"
    },
}
export default function LoginForm() {

    const history = useHistory();
    function handleSubmit(event){
        let email = event.target.email.value;
        let password = event.target.password.value;
        let firstName=null;
        let lastName=null;
        let role=null;
       
        event.preventDefault()
       if(email.trim().length <= 6){
            alert("please provide valid email address...")
            
            return;
        }
        if(!email.includes(".com")){
           alert(".com is missing in email address...") 
           return;
        }
        
        if(password.trim().length <= 6){
            alert("please enter more than six digits of password...")
            return;
        } 
        
        let passwordCheck = password;
        
        let passpattern = /[0-9]/g;
        let result3 = passwordCheck.match(passpattern);
        if(result3=== null){
            alert("password must include alphabets and digits both...");
            
            return;
        }
        const user = {
            email,
            password,
            firstName,
            lastName,
            role
        }
        
        axios.get('http://localhost:8080/login',{
            auth: {
                username:user.email,
                password:user.password
              }

        })
        .then((res)=>{
            
            let retUser = res.data;
            
            
            return retUser
           
        }).then((retUser)=>{

           
            
               
                if(retUser.email==user.email){
                    
                    user.firstName=retUser.firstName;
                    user.lastName=retUser.lastName;
                    user.role=retUser.roles[0].role;
                    localStorage.setItem('activeUser',JSON.stringify(user));
                    
                
                    if(retUser.roles[0].role=="ADMIN"){
                    alert("Admin Login Successfull !!!");
                    history.push("/");
                    }

                    else {
                    alert("Customer Login Successfull !!!");   
                    history.push("/");
                    }
                   
                }

            
            
        }).catch(err=>{ alert("No User Found Please Create an Account...")
        history.push("/signup")})
        event.target.email.value = null;
        event.target.password.value = null;
    }
  return (
      <>
        <Navbar/>
            <form style={styles.box} onSubmit = {handleSubmit}>
                <Heading heading=" Already Registered?" subheading = "Login"/>
                <div style={styles.padding}>
                    <InputInfo data1 = "Email" data2="* Required Field"/>
                    <input style={styles.input} 
                        type="email" 
                        name = "email"
                        required = "true"
                        placeholder = "Enter Email"/>
                </div>
                <div style={styles.padding}>
                    <InputInfo data1 = "Password" data2="* Required Field"/>
                    <input style={styles.input} 
                        type="password"
                        name="password" 
                        required = "true"
                        placeholder = "Enter Password"/>
                </div>
                <button style = {
                        styles.button
                    }>LOGIN</button>
               
                    <br/>
                    <h1 style={styles.headin}>
                         New User
                    </h1>
                <NavLink to='/signup'><button type="submit" style = {
                    styles.button2
                }>CREATE AN ACCOUNT</button></NavLink>
            </form>
        <Footer/>
    </>
  )
}
