import {useState} from 'react'
import Board from './Board'
import Card from './Card'
import '../DragDrop.scss'
import NavigationBar from './NavigationBar'
import { Modal, Backdrop,TextField ,Button} from '@mui/material';
import { Box } from '@mui/system';
// import ModalTur from './ModalTur';
import { Link } from 'react-router-dom'
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

function DragDrop(props) {
  const data = {items:[{
    "userId": 1,
    "id": 4,
    "title": "delectus aut autem 1",
    "completed": false
  },
  {
    "userId": 2,
    "id": 5,
    "title": "delectus aut autem 2",
    "completed": false
  },
  {
    "userId": 3,
    "id": 6,
    "title": "delectus aut autem 3",
    "completed": false
  }]}

  const [open, setOpen] = useState(false);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };
  
  return (
    <div className='drag-drop'>
      <NavigationBar/>
         <main className='flexbox'>
          
         {/* Burada Board componenti nin içinde Card componentleri var. Card componentleri sürükleyip bırakılabilir.         */}
      <Board id="board-1" className="board-1" source={data.items}>
        
        
        {props.item.map(
          (item,index) => {
            return (
             item[index]==="1" && <Card id='hosgeldiniz' className='card' draggable="true" source={data.items}>
                <div field="userId"></div>
              </Card>
            )
          }
        )}
        {/* {props.item.filter((item, index) => item.includes("2")).map((item, index) => ( */}
          <Card id="kisa-metin" className="card" draggable="true" style={{background: "yellow",borderRadius:"100px"}} source={data.items}>
                <div field="id"></div>
          </Card>
        {/* // ))} */}
        {props.item.map(
          (item,index) => {
            return (
              item.includes("3") && <Card id='coktan-secmeli' className='card' draggable="true" source={data.items}>
                <div field="title"></div>
              </Card>
            )
          }
        )}
        {props.item.map(
          (item,index) => {
            return (
              item.includes("4") && <Card id='uzun-metin' className='card' draggable="true">
                <p>Uzun Metin</p>
              </Card>
            )
          }
        )}
        {props.item.map(
          (item,index) => {
            return (
              item.includes("5") && <Card id='resimli-coktan-secmeli' className='card' draggable="true">
                <p>Resimli Çoktan Seçmeli</p>
              </Card>
            )
          }
        )}
        {props.item.map(
          (item,index) => {
            return (
              item.includes("6") && <Card id='soru-grubu' className='card' draggable="true">
                <p>Soru Grubu</p>
              </Card>
            )
          }
        )}
        {props.item.map(
          (item,index) => {
            return (
              item.includes("7") && <Card id='acilan-liste' className='card' draggable="true">
                <p>Açılan Liste</p>
              </Card>
            )
          }
        )}
        {props.item.map(
          (item,index) => {
            return (
              item.includes("8") && <Card id='sayisal-cevap' className='card' draggable="true">
                <p>Sayısal Cevap</p>
              </Card>
            )
          }
        )}
        {props.item.map(
          (item,index) => {
            return (
              item.includes("9") && <Card id='degerlendirme-olcegi' className='card' draggable="true">
                <p>Degerlendirme Ölçeği</p>
              </Card>
            )
          }
        )}
        {props.item.map(
          (item,index) => {
            return (
              item.includes("10") && <Card id='e-posta' className='card' draggable="true">
                <p>E-Posta</p>
              </Card>
            )
          }
        )}
        {props.item.map(
          (item,index) => {
            return (
              item.includes("11") && <Card id='derecelendirme' className='card' draggable="true">
                <p>Derecelendirme</p>
              </Card>
            )
          }
        )}
        {props.item.map(
          (item,index) => {
            return (
              item.includes("12") && <Card id='site-adresi' className='card' draggable="true">
                <p>Bağlantı/Site Adresi</p>
              </Card>
            )
          }
        )}
        {props.item.map(
          (item,index) => {
            return (
              item.includes("13") && <Card id='siralama' className='card' draggable="true">
                <p>Siralama</p>
              </Card>
            )
          }
        )}
        {props.item.map(
          (item,index) => {
            return (
              item.includes("14") && <Card id='aciklama' className='card' draggable="true">
                <p>Açiklama</p>
              </Card>
            )
          }
        )}
        {props.item.map(
          (item,index) => {
            return (
              item.includes("15") && <Card id='dosya-yukleme' className='card' draggable="true">
                <p>Dosya Yukleme</p>
              </Card>
            )
          }
        )}
      </Board>
       
{/*            
            <Board id="board-hosgeldiniz" className="board-hosgeldiniz">
            <p>Hoşgeldiniz Sayfası</p>
            </Board> */}
          
          <Board id="board-sag" className="board-sag" source={data.items}>
           
          </Board>
                  <Link to="/createsurvey" >
                      <button className='btn btn-primary' style={{margin:'1rem'}}>Anket Önizleme</button>
                  </Link>

          
      
      </main>
      {/* {isAuthe && <modal/>} */}
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

export default DragDrop

