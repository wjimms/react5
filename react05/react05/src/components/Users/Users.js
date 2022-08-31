function Users (props)  {
    console.log(props.users);
    return(
        <div>
            <ul>
            {
                props.users.map((user, key) =>{
                return(
                    <li>
                        <div>
                            {user.one}
                        </div>
                        <div>
                            {user.two}
                        </div>
                    </li>
            )
            })
            }
            </ul>
        </div>
    )
}

export default Users;