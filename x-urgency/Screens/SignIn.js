import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, SafeAreaView} from 'react-native';

import { Card } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import SignUp from './SignUp'


export default function SignIn({navigation}) {


  return (
    
<View >


      <Card style={styles.card}>  

        <View style={styles.heartIcon}> 
          <FontAwesome name="heartbeat" size={76} color="#fff" /> 

          
        </View>
        <Text style={{color: '#fff', fontSize: 28, marginLeft: 15}}> X-urgency </Text>

      </Card>






      <View style= {styles.header}>
        <Text style= {{fontWeight: 'bold', fontSize: 18, paddingLeft: 10}}>LogIn</Text>
      </View>


      
      
      <View>
        

        
        <Card style={styles.txtCards}> 

        <View style={{flexDirection: 'row'}}> 
        
        <AntDesign name="user" size={22} color="black"  />
        
        <TextInput style={styles.txtUser} 
          name= 'username' placeholder= 'Username' 
        />
        </View>

        </Card>
        


        <Card style={styles.txtCards}> 

        
         <View style={{flexDirection: 'row'}}> 
           <EvilIcons name="lock" size={28} color="black" />
           
           <TextInput style={styles.txtPass} 
             name= 'password' placeholder= 'Password'          
           />   
        </View>

        </Card>



        <TouchableOpacity>
        <Text style= {{paddingLeft: 160, paddingBottom: 10, color: '#F47066'}}>Forgot Password? </Text>
        </TouchableOpacity>

        <TouchableOpacity style= {styles.signIn}>
          <Text style= {{color: '#fff'}}>LOGIN </Text>
        </TouchableOpacity>





        <Text style= {{paddingTop: 5, paddingLeft: 100}}> 
          New User? 
          
          <TouchableOpacity  onPress= {() => {navigation.navigate('Sign Up')}}>
          <Text style={{color: '#F47066'}}> Sign Up</Text>
          </TouchableOpacity>
        </Text>

      </View>


</View>
  )
}

const styles = StyleSheet.create({

  card: {
    backgroundColor: '#F47066',
    marginTop: 1,
    marginLeft: 38,
    width: 262,
    height: 150,
    borderRadius: 30,
    alignItems: 'center',
  },

  heartIcon: {
    marginTop: 15,
    marginLeft: 45,
  },

  header: {
    paddingTop: 10,
    paddingLeft: 135,
  },

  txtUser: {
    borderRadius: 30,
    outline: 'none',
    backgroundColor: 'lightgrey', 
    padding: 5,
  },

  txtPass: {
    marginBottom: 15, 
    borderRadius: 30,
    outline: 'none',
    backgroundColor: 'lightgrey', 
    padding: 2,
  },

  txtCards: {
    backgroundColor: 'lightgrey', 
    width: 250,
    height: 30, 
    borderRadius: 30, 
    marginLeft: 40,
    marginTop: 10
  },

  signIn: { 
    height: 30, 
    width: 150, 
    marginLeft: 90,
    borderRadius: 30,
    backgroundColor: '#F47066',
    alignItems: 'center',
    justifyContent: 'center',
  }
 
  
});
