import React from 'react';
import {TextField, Typography, Button} from '@material-ui/core'
import {IoMdArrowForward} from 'react-icons/io'

export default function EbeneMieter(){
    return (
        <div style={{
            width:'95%',
            height:'55vh' 
        }}>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>    
                <div style={{display:'flex', justifyContent:'center', alignItems:'flex-end'}}>
                <TextField style={{margin:'1%'}} label ='Mieter'/>
                    <Button style={{margin:'1%', marginLeft:0}} startIcon={<IoMdArrowForward/>}/>
                </div>
                <div id='RaumContent'
                    style={{
                        marginTop:'2%',
                        width:'95%',
                        height:'25vh', 
                        backgroundColor:'#ffffff',
                        border:'1px solid rgb(133, 157, 195)'}}/>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%'}}>
                    <Button style={{backgroundColor:'rgb(133, 157, 195)', width:'15%', height:'8vh', margin:'2%', color:'white'}}>
                        Abrechnung
                    </Button>
                    <Button style={{backgroundColor:'rgb(133, 157, 195)', width:'15%', height:'8vh', margin:'2%', color:'white'}}>
                        Technik
                    </Button>
                    <Button style={{backgroundColor:'rgb(133, 157, 195)', width:'15%', height:'8vh', margin:'2%', color:'white'}}>
                        Begehung
                    </Button>
                </div>
            </div>


        </div>
    );
}