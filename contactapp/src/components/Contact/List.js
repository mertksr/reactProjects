import { useState } from 'react'

function List({ contacts }) {
    const [filterText, setFilterText] = useState("");
    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) => item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
    });
    return (
        <div>
            <input placeholder="search" value={filterText} onChange={(e) => setFilterText(e.target.value)} />
            <ul>
                {filtered.map((contacts, i) => (
                    <li key={i}>{contacts.name}</li>
                ))}
            </ul>
            <span>Total ({filtered.length})</span>
        </div>
    )
}

export default List