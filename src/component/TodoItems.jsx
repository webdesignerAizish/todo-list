import ItemList from './ItemList';
const TodoItems = ({ todoItems }) => {

    return (
        <div className="container">
            {todoItems.map(item => <ItemList todoName={item.name} todoDate={item.date} />)}


        </div>
    );
}
export default TodoItems