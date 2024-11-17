


export default function Fragement(props) {
  let itemList = ["Dal", "Roti", "Salad", "Milk", "Fruit"];

  return (
    <>
      <h1>{props.title}</h1>
      {itemList.length === 0 && <h3>No Item in the list</h3>}
      <ul className="list-group" >
        {itemList.map(item => <li key={item} className="list-group-item">{item}</li>)}

      </ul>

    </>

  )
}
