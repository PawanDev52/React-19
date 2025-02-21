function College({ name }) {
  return (
    <div>
      <h1>College</h1>
      <h1>{name}</h1>
    </div>
  );
}

export function Student({name}){
  return(
    <div>
      <h1>Studen Name: {name}</h1>
    </div>
  )
}

export default College;