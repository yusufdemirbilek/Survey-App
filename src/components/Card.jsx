import React from 'react'

// Burada sürüklediğimiz Card lar var. Bu Card lari oluşturmak için Card componentini oluşturduk.


function Card(props) {
    const dragStart = e => {
        console.log(e)
        const target = e.target;
        e.dataTransfer.setData('card_id', target.id);
        console.log("target",target.id);
        // setTimeout(() => {
        //     target.style.display = 'none';
        // }, 0);
        
    }
    const dragOver = e => {
        e.stopPropagation();
    }
    return props.source.map((item, index) => (
        <div
           key={item.id}
           id={props.id}
           className={props.className}
           onDragStart={dragStart}
           onDragOver={dragOver}
           draggable={props.draggable}
           style={props.style}
           source={props.source}
         >
        {React.Children.map(props.children, (child) => {
        if (child.props.field) {
            console.log(item[child.props.field]);
        return item[child.props.field];
        }
        return child;
        })}
        </div>
        ));
        }
        
        export default Card;