import {useState,useEffect} from 'react'

function Form({addContact,contacts}) {
    const initialFormValues = {fullName:'',phoneNumber:''}
    const [form,setForm]=useState(initialFormValues);
    //contacts degismisse inputun icini bosalt diyecegiz.
    useEffect(()=>{
        setForm(initialFormValues);
    },[contacts])
    const onChangeInput = (e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    const onSubmit = (e)=>{
        e.preventDefault();
        if(form.fullName === '' || form.phoneNumber ==='') {
            return false;
        }
        addContact([...contacts,form])
        console.log(form)
        
    }
    return (
        // formun varsayılan davranısını durdurmamız gerekiyor.Çünkü add butonuna basıldıgında bilgileri alıp sayfayı refresh ediyor.
        <form onSubmit={onSubmit}>
        <div>
          <input name="fullName" placeholder='Full Name' onChange={onChangeInput} value={form.fullName}/>
        </div>
        <div>
          <input name="phoneNumber" placeholder='Phone Number' onChange={onChangeInput} value={form.phoneNumber}/>
          </div>
        <div className='btn'>
            <button>Add</button>
        </div>
        </form>
    )
}

export default Form
