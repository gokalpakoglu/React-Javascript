 import React, {Component} from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

 class Guess extends Component{
     constructor(props)
     {
        super(props);
        this.state={
            guessNumber:"",
            result:"",
            a:0,
            ranNumber:this.randomNumber()
            
        }
        this.guess = this.guess.bind(this);

     }

    randomNumber() {
        while(true){
            var ranNumber=(Math.floor(Math.random()*8999)+1000).toString();
            var bir=ranNumber.substring(0,1);
            var iki=ranNumber.substring(1,2);
            var uc=ranNumber.substring(2,3);
            var dort=ranNumber.substring(3,4);
            if(bir != iki && bir != uc && bir != dort && iki != uc && iki != dort && uc != dort){
                return ranNumber
            }
        }  
    }

    control(){
        var g=this.state.guessNumber.toString();
        var a=this.state.ranNumber;
        var plus=0;
        var minus=0

        for(let i=0;i<4;i++){
            if(this.state.guessNumber==""){
                continue
            }
            if(a.indexOf(g.charAt(i))!=-1){
            if(a.indexOf(g.charAt(i))==g.indexOf(g.charAt(i))){
                plus+=1
            }
            else{
                minus+=1
            }
            }
        this.setState({result:"+"+plus+" "+"-"+minus})    
        }
        if(plus==0 && minus!=0){
            this.setState({result:"-"+minus})
        }
        if(minus==0 && plus!=0){
            this.setState({result:"+"+plus})
        }
        
        if(plus==0 && minus==0){
            this.setState({result:"0"})
        }
        if(plus==+4){
            alert("Congratulations! The answer is "+this.state.ranNumber+"."+"\n"+"You found the answer "+(this.state.a+1)+"."+" attempt.")
        }
        for(a=1;a<2;a++){
            if(plus==+4){
                this.setState({a:this.state.a+=1})   
                break
            }
            else{
                this.setState({a:this.state.a+=1})
            }
        }
    }


    guess(x){
        this.setState({guessNumber:Number(x.target.value)})
    }

    render(){
        return(
            <div>
                <html>
                    <body id="body" style={{textAlign:"center",backgroundColor:"#222831"}}>
                        <div style={{textAlign:"center",marginLeft:"50px"}}>
                            <table id="tablo" style={{textAlign:"center",paddingTop:"20px",margin:"auto",backgroundColor:"#222831"}}>
                            <tr><td><h1 id="sayitahmin" style={{margin:"5px"}}>Sayıyla Tahmin Oyunu</h1></td></tr>
                            <br></br>
                            <tr><td><input type="text" id="tahminSayisi" placeholder="Rakamları farklı 4 basamaklı bir sayı giriniz" onChange={this.guess} maxLength="4" minLength="4" autoFocus></input></td><td><button id="tahminet" onClick={this.control.bind(this)}>Tahmin Et</button></td></tr>
                            <br></br>
                            <input type="text" id="sonuc" value={this.state.result} disabled></input>
                            <br></br>
                            <br></br>
                            <text type="text" id="sayac"  disabled>Tahmin Sayısı: {this.state.a}</text>
                            <br></br>
                            <br></br>
                            <div id="toggleanswer">
                            <Accordion>
                            <Card>
                                <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    Cevabı Göster
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                <Card.Body>{this.state.ranNumber}</Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            </Accordion>
                            </div>
                            </table>
                        </div>
                    </body>
                </html>
            </div>
            
        )
     }
 }
 export default Guess;