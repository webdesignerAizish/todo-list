import React from 'react'

function ItemList({ todoName, todoDate }) {
    const handleButton = (todoName, event) => {
        console.log(event);
        console.log(`${todoName} has been delete`);
    };
    return (
        <div>
            <div className="container text-center">

                <div className="row">
                    <div className="col-4" style={{ 'textAlign': 'left' }}>
                        {todoName}
                    </div>
                    <div className="col-4">
                        {todoDate}
                    </div>
                    <div className="col-2">
                        <button className='btn btn-danger m-2' onClick={(event) => handleButton(todoName, event)}>Delete</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemList
