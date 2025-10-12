
const User = (props) => {
    console.log(props);
    
  return (
    <div style={{color:'white'}}>
        Neha, {props.name}
    </div>
  )
}

export default User