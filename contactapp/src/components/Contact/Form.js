import { useEffect, useState } from 'react'

const initialFormValues = { name: "", phonenumber: "" }
function Form({ addContact, contacts }) {

    const [form, setForm] = useState({ name: "", phonenumber: "" })

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    };
    useEffect(() =>{
        setForm(initialFormValues)

    }, [contacts])
    const onSubmit = (e) => {

        e.preventDefault()
        if(form.name ==="" || form.phonenumber ===""){
           return false;
        }
        addContact([...contacts, form]);

        console.log(form)
    };

    return (
        <form onSubmit={onSubmit}>
            <input name="name" placeholder='Name' value={form.name} onChange={onChangeInput} />
            <input name="phonenumber" placeholder='Phone Number' value={form.phonenumber} onChange={onChangeInput} />
            <button>Submit</button>
        </form>
    )
}

export default Form