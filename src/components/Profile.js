function Profile(props){
    return (<div>
        Name:{props.name}
    {props.lastname}
    {props.children}
    </div>);
}

export default Profile;