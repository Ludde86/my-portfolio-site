import React, { useEffect } from "react"
import { useState } from "react";

export default function ListUser() {

    const [users, setUsers] = useState([]);
    const [otherUsers, setOtherUsers] = useState([
        { id: 1, username: "Ludde", online: false },
        { id: 2, username: "Carl", online: true },
        { id: 3, username: "Max", online: true }
    ]);

    const [searchTerm, setSearchTerm] = useState('');

    // fetch the user's details from the open source rest endpoint
    const fetchUsersUrl = 'https://jsonplaceholder.typicode.com/users';

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        fetch(fetchUsersUrl)
            .then(result => result.json())
            .then(data => {
                console.log('data: ', data)
                setUsers(data)
            })
            .catch(error => console.error('Error fetching data', error))
    }, []);

    const onSortAZ = () => {
        const sortAZ = [...otherUsers].sort((a, b) =>
            a.username.localeCompare(b.username)
        );
        setOtherUsers(sortAZ);
    };

    const onSortZA = () => {
        const sortZA = [...otherUsers].sort((a, b) => b.username.localeCompare(a.username));
        setOtherUsers(sortZA)
    }

    const onSortOnline = () => {

        const sortStatusOn = [...otherUsers].sort((x, y) => (x.online === y.online) ? 0 : x.online ? -1 : 1);
        setOtherUsers(sortStatusOn)
    }

    const onSortOffline = () => {

        const sortStatusOf = [...otherUsers].sort((x, y) => (x.online === y.online) ? 0 : y.online ? -1 : 1);
        setOtherUsers(sortStatusOf)
    }

    const fetchUsers = users.map(user =>
        <tbody >
            <tr key={user.id} style={{
                textAlign: 'center'
            }}>
                <td>
                    {user.id}
                </td>
                <td>
                    {user.name}
                </td>
                <td>
                    {user.username}
                </td>
            </tr>
        </tbody>
    )

    return (
        <>
            <ul>
                {otherUsers.map(user =>
                    <div>
                        <li style={{ color: user.online ? "green" : "red" }} key={user.id}>
                            {user.username}
                        </li>

                    </div>
                )}
            </ul>
            <button onClick={onSortAZ}>Sortera efter användarnamn, A-Z</button>
            <button onClick={onSortZA}>Sortera efter användarnamn, Z-A</button>
            <button onClick={onSortOnline}>Soortera efter online</button>
            <button onClick={onSortOffline}>Soortera efter offline</button>
            <table>
                <thead>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Username
                        </th>
                    </tr>
                </thead>
                {fetchUsers}
            </table>

            <input
                type="text"
                placeholder="Sortera efter bokstav..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <ul>
                {filteredUsers.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>

        </>
    );
}