import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  
} from "react-native";
import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Modal } from "react-native";
import { Button } from "react-native";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
 const [showLoginSuccess,setShowLoginSuccess]=React.useState(false);
 const[signupSuccess,setSignupsuccess]=React.useState(false);
 const[registrationModal,setRegistrationModal]=React.useState(false);
 const[signupModal,setSignupModal]=React.useState(false);
    const ValidateEmail=(email)=>{
      return email.match(
    
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      );
    };
  const Login=()=>{
      if(!ValidateEmail(email)){
      alert("Please enter valid email id");
      return;
    }
    if (password=="" || password.length<8){
      alert("Please enter valid password");
      return;
    }
    else{
      alert("Login succes");
      return;
    }
 
   
  setShowLoginSuccess(false);
  };
  const Signup=()=>{
    if(!ValidateEmail(email)){
    alert("Please enter valid email id");
    return;
  }
  if (password=="" || password.length<8){
    alert("Please enter valid password");
    return;
  }
  if(name==""){
    alert("please enter valid name");
    return;
  }
  };
  return (
    <View style={{
      flex:1,
      backgroundColor:"white",
    }}>
  
    
    
      <View
        style={{
          flex: 1,
         // backgroundColor: "#ffff",
          //justifyContent: "center",
          marginTop: 200,
         // alignContent: "center",
          marginLeft: 20,
        }}
      >
        <Text
          style={{
            fontSize: 27,
            fontWeight: "bold",
            color: "black",
            //marginTop: 60,
          }}
        >
          Login
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "black",
            marginTop: 5,
          }}
        >
          Please sign in to continue
        </Text>
        <TextInput
          onChangeText={(text) => {
            setEmail(text);
          }}
          value={email}
          inputMode={"email"}
          
          style={{
            backgroundColor: "#e9e9e9",
            height: 40,
            width: "80%",

            borderWidth: 1,
            borderColor: "white",
            // alignSelf:"center",
            marginTop: 20,
          }}
          placeholder="   Email "
          
        />

        <TextInput
         
          onChangeText={(text) => {
            setPassword(text);
          }}
          value={password}
          secureTextEntry={true}

          style={{
            backgroundColor: "#e9e9e9",
            height: 40,
            width: "80%",

            borderWidth: 1,
            borderColor: "white",
            // alignSelf:"center",
            marginTop: 20,
          }}
          placeholder="  password"
        />
     
        <TouchableOpacity
        onPress={()=>{
          Login();
         }}
        
          style={{
            height: 40,
            width: 140,
            borderRadius: 20,
            backgroundColor: "#ffaa55",
            justifyContent: "center",

            marginTop: 40,
            marginLeft: 180,
          }}
        >
          <Text
            style={{
              color: "#ffff",
              fontSize: 15,

              alignSelf: "center",
              //alignItems:"center",
              //alignContent:"center",
        
          
        
          }}>LOGIN
           
          </Text>
         
        </TouchableOpacity>
       </View>
      <View style={{
        flex:2,
        flexDirection:"row",
        marginTop:300,
        justifyContent:"center",
        
      }}>
  
      
        <Text
          style={{
            color: "grey",
          paddingRight:10,
          }}>
      Don't have an account?
        </Text>
        <TouchableOpacity
       
        onPress={()=>{
          setRegistrationModal(true)
        }}>
        
         <Text style={{
              color: "#ffaa55",
            
            }}>
          
            sign up
          </Text>
         
        </TouchableOpacity>
        <Modal
visible={registrationModal}

>
 <View style={{
  flex:1,
  justifyContent:"center",
  //marginBottom:40,
 }}>
  <Text style={{
    color:"black",
    fontSize:30,
    fontWeight:"bold",
    paddingRight:5,
    marginLeft:20,
  }

  }>Create Account</Text>
  <TextInput
          onChangeText={(text) => {
            setEmail(text);
          }}
          value={email}
          inputMode={"email"}
          
          style={{
            backgroundColor: "#e9e9e9",
            height: 40,
            width: "80%",

            borderWidth: 1,
            borderColor: "white",
            // alignSelf:"center",
            marginTop: 20,
            paddingHorizontal:10,
            marginLeft:20,
          }}
          placeholder="   Email "
          
        />
  
        <TextInput
         onChangeText={(text) => {
            setName(text);
          }}
          value={name}
          secureTextEntry={true}

          style={{
            backgroundColor: "#e9e9e9",
            height: 40,
            width: "80%",

            borderWidth: 1,
            borderColor: "white",
            // alignSelf:"center",
            marginTop: 20,
            paddingHorizontal:10,
            marginLeft:20,
          }}
          placeholder="name"
        />
        <TextInput
         
         onChangeText={(text) => {
           setPassword(text);
         }}
         value={password}
         secureTextEntry={true}

         style={{
           backgroundColor: "#e9e9e9",
           height: 40,
           width: "80%",

           borderWidth: 1,
           borderColor: "white",
           // alignSelf:"center",
           marginTop: 20, paddingHorizontal:10,
           marginLeft:20,
         }}
         placeholder="  password"
       />
       <TextInput
         
         onChangeText={(text) => {
           setConfirmPassword(text);
         }}
         value={password}
         secureTextEntry={true}

         style={{
           backgroundColor: "#e9e9e9",
           height: 40,
           width: "80%",

           borderWidth: 1,
           borderColor: "white",
           // alignSelf:"center",
           marginTop: 20,
           paddingHorizontal:10,
           marginLeft:20,
         }}
         placeholder=" confirm password"
       />
       <TouchableOpacity 
        
         onPress={()=>{
          setSignupModal(true)
        }}
        
         style={{
        height:35,
        width:100,
        borderRadius:20,
        backgroundColor:"#ffaa55",
        justifyContent:"center",
        alignSelf:"center",
        marginLeft:100,
        marginTop:20,
       }}>
       <Text style={{
        color:"white",
        fontSize:14,
//justifyContent:"center",
//alignContent:"center",
alignSelf:"center",
       }}>SIGN UP</Text>

       </TouchableOpacity>
 </View>
 <View style={{
        //flex:2,
        flexDirection:"row",
       marginTop:30,
        justifyContent:"center",
        
      }}>
  
      
        <Text
          style={{
            color: "grey",
          paddingRight:10,
          marginBottom:30,
          }}>
      Don't have an account?
        </Text>
        <TouchableOpacity>
       
        
         <Text style={{
              color: "#ffaa55",
            //paddingHorizontal:10,
            }}>
          
            sign in
          </Text>
         
        </TouchableOpacity>
  
       </View>
       
  </Modal>
  <Modal
        visible={signupModal}
        animationType="slide"
        transparent={true}
        onRequestClose={
          () => {
            setSignupModal(false);
          } // when user press back button
        }
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View
            style={{
              height: 200,
              width: "70%",
              backgroundColor: "#fff",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Registration Success
            </Text>
            <Text>
              name: {name} {"\n"}
            email:{email}{"\n"}
              
              password: {password}
              
            </Text>
            
            </View>
            </View>
          </Modal>  
  </View>
  
</View>
        
      
        
    
  );
};

export default App;

const styles = StyleSheet.create({});
