export const Users =(props)=>{
    return (
        <div>
       {props.sex === "female" &&  <h3 key={props.index}>{props.name},{props.age}</h3>}
        </div>
    )
}