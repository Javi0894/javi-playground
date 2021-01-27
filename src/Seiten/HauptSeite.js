import React, {useState} from 'react';
import {Button, Menu, Typography, MenuItem, Card, CardHeader, Divider, CardContent} from '@material-ui/core'
import EbeneRaum from './Ebene/EbeneRaum';
import EbeneZaehler from './Ebene/EbeneZaehler';
import EbeneMieter from './Ebene/EbeneMieter';
import EbeneBKS from './Ebene/EbeneBKS'
import './SeitenLayout.css';
//rgb(133, 157, 195)
//rgb(204, 221, 239)
function HauptSeite() {
    const [displayDropdown, setDisplayDropdown] = useState(null)
    const [cardState, setCardState] = useState(0)
    const handleDropdown = (event) =>{
        setDisplayDropdown(event.currentTarget)
    }
    const handleClose = () => {
        setDisplayDropdown(null)
    }
    return (
        <div className="HauptSeite" 
            style={{
                display:'flex',
                flexDirection:'column',
                width:'100vw',
                height:'100vh', 
                backgroundColor:'rgb(241, 241, 241)', 
                alignItems:'center'
            }}>
        <header style={{
            display:'flex',
            height:"10%",
            width:'100%', 
            backgroundColor:"rgb(255, 255, 255)", 
            color:'#ffffff', 
            alignItems:'center'}}>
            <div style={{marginLeft:'3%', marginRight:'80%', color:'#000000', fontSize:18}}>
                MZK Management
            </div>
            <img src='Big_logo.png' alt='Big Logo' width={90} height={50}/>
        </header>
        <Card 
            elevation={5}
            style={{ 
                display:"flex", 
                justifyContent:"center", 
                alignItems:"center",
                width:'80%', 
                backgroundColor:'rgb(255, 255, 255)', 
                marginTop:'2%'}}
        >
            <Button 
                aria-controls="simple-menu" 
                aria-haspopup="true" 
                onClick={handleDropdown}
                style={{
                    textTransform: 'none',
                    marginLeft:'2%',
                    height:'80%',
                    border:'1px solid rgb(133, 157, 195)'}}
            > 
                <Typography>Druecken Sie um die Optionen zu erweitern </Typography>
                
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={displayDropdown}
                keepMounted
                open={Boolean(displayDropdown)}
                onClose={handleClose}
            >
                <MenuItem 
                    style={{backgroundColor:'rgb(222, 235, 244)'}}
                    onClick={()=>{
                    setCardState(1)
                    handleClose()}}
                >
                    Raeume
                </MenuItem>
                <MenuItem 
                    style={{backgroundColor:'rgb(222, 235, 244)'}}
                    onClick={()=>{
                    setCardState(2)
                    handleClose()}}
                >
                    Mieter
                </MenuItem>
                <MenuItem 
                    style={{backgroundColor:'rgb(222, 235, 244)'}}
                    onClick={()=>{
                    setCardState(3)
                    handleClose()}}
                >
                    Zaehler
                </MenuItem>
                <MenuItem 
                    style={{backgroundColor:'rgb(222, 235, 244)'}}
                    onClick={()=>{
                    setCardState(4)
                    handleClose()}}
                >
                    Anlagen
                </MenuItem>
                <MenuItem 
                    style={{backgroundColor:'rgb(222, 235, 244)'}}
                    onClick={()=>{
                    setCardState(5)
                    handleClose()}}
                >
                    BKS Code
                </MenuItem>
            </Menu>
        </Card>
        <div style={{width:'100%', display:'flex', justifyContent:"center", alignItems:"center", marginTop:'2%'}}>
        <Card style={{ backgroundColor:'rgb(255, 255, 255)', height:'70vh', width:'80%'}} elevation={5}>
            <CardContent style={{display:'flex', flexDirection:"column",justifyContent:"center", alignItems:"center"}}>
                {cardState===0 && <Typography> Unser Team bedankt sich fuer die Gelegenheit </Typography>}
                {cardState===1 && <EbeneRaum/>}
                {cardState===2 && <EbeneMieter/>}
                {cardState===3 && <EbeneZaehler/>}
                {cardState===5 && <EbeneBKS/>}
            </CardContent>
        </Card>
        </div>
        </div>
    );
}

export default HauptSeite;


  // let func;
  // const rotateLeft = async (event) => {
  //   event.preventDefault();
  //   clearTimeout(func);
  //   const boxArea = document.getElementsByClassName("box-area")[0];
  //   boxArea.classList.add('rotateLeft');
  // func = setTimeout(function(){
  //   boxArea.classList.remove('rotateLeft');
  // }, 3100)
  // };
  // const rotateRight = async (event) => {
  //   event.preventDefault();
  //   const boxArea = document.getElementsByClassName("box-area")[0];
  //   boxArea.classList.add('rotateRight');
  //   func = setTimeout(function(){
  //     boxArea.classList.remove('rotateRight');
  //   }, 3100)
  // };
  const [ toggle, setToggle ] = useState('rotatef1');
  const previousToggle = useRef('');
  const handleToggle = () => {
    setToggle(toggle==='rotatef1'?'rotatef2':'rotatef1');
  };
  const rotateRight = async () => {
    const boxArea = document.querySelector(".box-area");
    const rotateSideToRight = ()=> {
      // let {current} = previousToggle;
      console.log(previousToggle.current, toggle);
      if( previousToggle.current!=='' ){boxArea.classList.remove(previousToggle.current);};
      console.log(boxArea.classList)
      boxArea.classList.add( toggle );
      console.log(boxArea.classList)
      previousToggle.current = toggle;
    }
    rotateSideToRight();
    handleToggle();
  };
  // const handleCountIncrement = () => { 
  //   const countWithReset = count===6?0:count;
  //   setCount( countWithReset + 1);
  // };
  // const handleCountDecrement = () => { 
  //   const countWithReset = count===1?7:count;
  //   setCount( countWithReset - 1);
  // }
  // console.log(toggle)