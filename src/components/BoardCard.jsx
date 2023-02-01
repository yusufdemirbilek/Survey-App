import React from 'react'

function BoardCard() {

    const drop = e => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');
        //console.log(card_id);
        const card = document.getElementById(card_id);
         card.style.display = 'block';
        // const cardClone = card.cloneNode(true);
        // e.target.insertAdjacentElement('beforeend', cardClone);
        // handleOpen();
        // handleCreate(card_id);
        e.target.appendChild(card);
    }
    const dragOverBoard = e => {
        e.preventDefault();
        
    }
    const dragStart = e => {
        const target = e.target;
        e.dataTransfer.setData('card_id', target.id);
        // setTimeout(() => {
        //     target.style.display = 'none';
        // }, 0);
        
    }
    const dragOverCard = e => {
        e.stopPropagation();
    }
  return (
    <div>
       
    </div>
  )
}

export default BoardCard
