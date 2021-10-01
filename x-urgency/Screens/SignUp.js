import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, SafeAreaView} from 'react-native';

import { Card } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

export default function Home() {


  return (
    <View >


      <Card style={styles.card}>  

        <View style={styles.heartIcon}> 
          <FontAwesome name="heartbeat" size={76} color="#fff" /> 

          
        </View>
        <Text style={{color: '#fff', fontSize: 28, marginLeft: 15}}> X-urgency </Text>

      </Card>






      <View style= {styles.header}>
        <Text style= {{fontWeight: 'bold', fontSize: 18, paddingLeft: 5}}>SignUp</Text>
      </View>


      
      
      <View>
        
        <Card style={styles.txtCards}>

        <View style={{ flexDirection: 'row'}}> 
        
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




<Card style={styles.txtCards}>
      <View style={{flexDirection: 'row'}}> 

        <EvilIcons name="lock" size={28} color="black" />
        <TextInput style={styles.txtRePass} 
          name= 'password' placeholder= 'Re-enter Password'          
        />
        
      </View>

      </Card>




        <TouchableOpacity style= {styles.signIn}>
          <Text style= {{color: '#fff'}}>SIGN_UP </Text>
        </TouchableOpacity>



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
    paddingLeft: 8,
    paddingTop: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },

  txtPass: {
    borderRadius: 30,
    outline: 'none',
    backgroundColor: 'lightgrey', 
    padding: 5,
  },

  txtRePass: {
    marginBottom: 15,
    borderRadius: 30,
    outline: 'none',
    backgroundColor: 'lightgrey',
    padding: 5,
    paddingLeft: 4
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
    marginTop: 30,
    borderRadius: 30,
    backgroundColor: '#F47066',
    alignItems: 'center',
    justifyContent: 'center'
  }
 
  
});

