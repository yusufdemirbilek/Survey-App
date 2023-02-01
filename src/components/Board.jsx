import {useState} from 'react'
import { Modal, Backdrop,TextField ,Button} from '@mui/material';
import { Box } from '@mui/system';
import { useAuth } from '../Context/AuthContext';

// Burada Card lari sürükleyip bıraktığımız alan var. Bu alanı oluşturmak için Board componentini oluşturduk.

const style = {
    position: 'absolute',
    border: 'none',
    borderRadius: 3,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    tranparent: false,
    bgcolor: 'background.paper',
  
    backgroundColor: 'white',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
function Board(props) {
  const {textArray,setTextArray} = useAuth();
  const [textValue, setTextValue] = useState("");
  //const [textArray, setTextArray] = useState([{card_id:'',question:''}]);
  const [open, setOpen] = useState(false);
  
  const handleOpen = () => {
    setOpen(true);
  };
  console.log("board" , textArray);
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event) => {
    setTextValue(event.target.value);

  }
  
  const handleCreate = (card_id) => {
    const newCard = { card_id: card_id, question: textValue };
    if(textArray.question !== ""){
    setTextArray([...textArray, newCard]);}
  }

    const drop = e => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');
        console.log(card_id.field);
        //console.log(card_id);
        const card = document.getElementById(card_id);
        // card.style.display = 'block';
        const cardClone = card.cloneNode(true);
        e.target.insertAdjacentElement('beforeend', cardClone);
        handleOpen();
        handleCreate(card_id);
    }
    const dragOver = e => {
        e.preventDefault();
        
    }
  return (
    <div 
        id={props.id}
        className={props.className}
        onDrop={drop}
        onDragOver={dragOver}
        style={props.style}
        source={props.source}
    >
        {props.children}

        <Modal 
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        > 
        <Box sx={{ ...style, width:500  }}>
          <div>
            <h2 className='modal-baslik'>Yeni Anket Oluştur</h2>
            <TextField id="standard-multiline-static"
         
          multiline
          rows={4}
          placeholder="Soruyu buraya yazınız"
          variant="filled"
          onChange={handleChange}/>
          <p>{textValue}</p>
            <br />
            <br />
            <Button onClick={handleClose} style={{float:'right'}}>Kapat</Button>
            <Button onClick={handleCreate} style={{float:'right'}}>Oluştur</Button>
          </div>
        </Box>
        </Modal>
    </div>
  )
}

export default Board
