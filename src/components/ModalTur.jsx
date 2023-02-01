import {useState} from 'react'
import { Modal, Backdrop,TextField ,Button} from '@mui/material';
import { Box } from '@mui/system';


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
function ModalTur() {
  const [open, setOpen] = useState(false);
  
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
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
            <TextField id="standard-basic" label="Lütfen Anketin Adını Giriniz" variant="standard" fullWidth/>
            <br />
            <br />
            <Button onClick={handleClose} style={{float:'right'}}>Kapat</Button>
          </div>
        </Box>
        </Modal>
    </div>
  )
}

export default ModalTur
