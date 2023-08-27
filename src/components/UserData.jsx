const UserData =({users}) =>{
    return(
        <>
        {
            users.map((curUser) =>{
                const{name, userid, phonenumber, status } = curUser;
                return(
                    <>
                    <tr>
                        <td>{name}</td>
                        <td>{userid}</td>
                        <td>{phonenumber}</td>
                        <td>{status}</td>
                    </tr>
                    </>
                )
            })
        }
        </>
    )
}