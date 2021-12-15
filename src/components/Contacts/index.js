import {useState,useEffect} from 'react'
import List from './List';
import Form from './List/Form';
import "./styles.css"

function Contacts() {
    // kayıtların eklenecegi state
    const [contacts,setContacts]= useState([{fullName:"Ayşe",phoneNumber:1234},{fullName:"Ali",phoneNumber:4565}]);
    useEffect(()=>{
        console.log(contacts)
    },[contacts])
    return (
        <div id="container">
            <h1>Contacts</h1>
            <List contacts={contacts}/>
            <Form addContact = {setContacts} contacts={contacts}/>
        </div>
    )
}

export default Contacts;
