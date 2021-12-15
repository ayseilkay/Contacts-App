import {useState} from 'react'

function List({contacts}) {
    const [filterText,setfilterText]= useState('');
    const onChangeFilterText = (e)=>{
        setfilterText(e.target.value)
    }
    //  contacts de filtreleme yapmak için  bu asağıdaki yapıyı yazdık
    const filtered = contacts.filter((item)=>{
        return Object.keys(item).some((key)=>
            item[key]
            .toString()
            .toLowerCase()
            .includes(filterText.toLocaleLowerCase())
        )
    })
    //some herhangi biri sarta uyuyorsa demektir.
    //object keys ise contacts ın bize keylerini verir.(fullName,phoneNumber)
    console.log("Filtered Text",filtered);
    return (
        <div>
            <input name="filter" placeholder='Filter Contacts' value={filterText} onChange={onChangeFilterText}/>
            <ul className='list'>
                {
                    filtered.map((item,index)=>
                        <li key={index}>
                            <span>{item.fullName}</span> 
                            <span>{item.phoneNumber}</span>
                            </li>
                    )
                }
            </ul>
            <p> Total contacts ({filtered.length}) </p>
        </div>
    )
}

export default List
