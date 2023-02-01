import { useState } from 'react'
import '../Home.scss'
import {  Link } from 'react-router-dom'
import { Modal, Backdrop,TextField ,Button,Card,CardContent} from '@mui/material';
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
function Home() {
    
  const [open, setOpen] = useState(false);
  const [surveyName, setSurveyName] = useState('');
  const [cards, setCards] = useState([]);

  const handleAddCard = () => {
    setCards([...cards, surveyName]);
  }
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='main'>
      <div className='sol'>
        <div className='klasor'>
          <h1>Anketleri Klasörleme</h1>
        </div>
        <div className='anketler'>
          <button>Tüm Anketler</button>
        </div>
      </div>
      <div className='sag'>
        <div className='ust'>
          <h1 className='tum'>Tüm Anketlerim</h1>
        </div>
        <br />
        <div className='yeni'>
          
          <button className='yeni-anket' onClick={handleOpen}>Yeni Anket Oluştur</button>
        
              
         
        
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
            <TextField id="standard-basic" label="Lütfen Anketin Adını Giriniz" variant="standard" fullWidth value={surveyName}
        onChange={e => setSurveyName(e.target.value)} />
            <br />
            <br />
            <Button onClick={handleClose} style={{float:'right'}}>Kapat</Button>
           
              {/* <Link to='/dragdrop' style={{float:'right',marginRight:'10px',color:'white'}}>  */}
                  <Button  style={{float:'right',marginRight:'10px'}} variant="contained" onClick={handleAddCard}>Oluştur</Button>
              {/* </Link> */}
            
          </div>
        </Box>
        </Modal>
          </div>
          <div className='cards'>
          {cards.map((card, index) => (
            <div className='card'>
            <Card key={index}>
            <CardContent>
               {card}
            </CardContent>
            </Card>
            </div>
          ))}
          </div>
      </div>
    </div>
  )
}
export default Home;
