


const ParentComponent = (props) => {
    return (
        <div>
            <ChildComponent firstName={"Shafkat"} lastName={"Ali"} />
        </div>
    )
}


const ChildComponent = (props){
    return (
        <p>
            Hello! My name is   {props.firstName} {props.lastName}
        </p>
    )
}

props = {

}