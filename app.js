const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const http = require('http');
const path = require("path");
const fs = require('fs');

const app = express();
var server = http.createServer(app);

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'./public')));
app.use(helmet());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'./public/index.html'));
});

app.post('/mensagem', (req, res) => {
  let msg = req.body.mensagem.replace(/(\r\n|\n|\r)/gm, " ");
  
  let arquivo = req.body.nome + ";"
  + req.body.email + ";"
  + msg + "\n"

  fs.appendFileSync('./file/mensagem.csv', arquivo);
  
  let emailDestinatario = {
    from: 'Natália e Gustavo<nataliaegustavo2021@outlook.com>',
    to: req.body.email,
    subject: 'Mensagem aos noivos Natália e Gustavo',
    text: 'Mensagem aos noivos',
    html: "<h1>Prezado(a) "
      + req.body.nome +",</h1><p>Agradecemos a sua mensagem:</p><p>" 
      + req.body.mensagem + "</p>"
  }
  
  let emailNoivos = {
    from: 'Site Natália e Gustavo<nataliaegustavo2021@outlook.com>',
    to: 'nataliaegustavo2021@outlook.com',
    subject: 'Mensagem recebida',
    text: 'Mensagem aos noivos',
    html: "<h1>Nova mensagem recebida</h1><p>Mensagem:</p><p>" 
      + req.body.mensagem + "</p><p>Mensagem de: "
      + req.body.nome + "</p><p>Contato: "
      + req.body.email + "</p>",
    attachments: [{
      path: './file/mensagem.csv'
    }]
  }
  
  transporter.sendMail(emailDestinatario, (err, result)=>{
    if(err) console.log("Erro ao enviar email ao destinatário");
    console.log("Email enviado ao destinatário")
  })

  transporter.sendMail(emailNoivos, (err, result)=>{
    if(err) res.sendFile(path.join(__dirname,'./public/error.html'));
    res.sendFile(path.join(__dirname,'./public/success.html'));
  })
})

app.post('/rsvp', (req, res) => {
  let msg = req.body.mensagem.replace(/(\r\n|\n|\r)/gm, " ");

  let cer;
  if(!!req.body.cerimonia) cer = "Sim"
  else cer = "Não" 
  /*let rec;
  if(!!req.body.recepcao) rec = "Sim"
  else rec = "Não" */
  

  let arquivo = req.body.nome + ";"
  + req.body.sobrenome + ";"
  + req.body.email + ";"
  + req.body.telefone + ";"
  + req.body.quantidade + ";"
  + cer + ";"
  //+ rec + ";"
  + msg + "\n"

  fs.appendFileSync('./file/rsvp.csv', arquivo);

  let emailDestinatario = {
    from: 'Natália e Gustavo<nataliaegustavo2021@outlook.com>',
    to: req.body.email,
    subject: 'RSVP casamento Natália e Gustavo',
    text: 'RSVP',
    html: "<h1>Prezado(a) "
      + req.body.nome +",</h1><p>Agradecemos a sua confirmação no nosso casamento.</p><p>Número de pessas confirmadas: " 
      + req.body.quantidade + "</p><p>Pessoas confirmadas: "
      + req.body.mensagem + "</p>"
  }
  
  let emailNoivos = {
    from: 'Site Natália e Gustavo<nataliaegustavo2021@outlook.com>',
    to: 'nataliaegustavo2021@outlook.com',
    subject: 'Confirmação de convidados',
    text: 'RSVP',
    html: "<h1>Confirmação de convidados</h1><p>Nome: " 
      + req.body.nome + " " + req.body.sobrenome + "</p><p>E-mail: "
      + req.body.email + "</p>Telefone: "
      + req.body.telefone + "</p><p>Número de pessoas confirmadas: "
      + req.body.quantidade + "</p><p>Cerimônia: "
      + cer + /*"</p><p>Recepção: "
      + rec +*/ "</p><p>Pessoas confirmadas: "
      + req.body.mensagem + "</p>",
      attachments: [{
        path: './file/rsvp.csv'
      }]
  }

  transporter.sendMail(emailDestinatario, (err, result)=>{
    if(err) console.log("Erro ao enviar email ao destinatário");
    console.log("Email enviado ao destinatário")
  })

  transporter.sendMail(emailNoivos, (err, result)=>{
    if(err) res.sendFile(path.join(__dirname,'./public/error.html'));
    res.sendFile(path.join(__dirname,'./public/success.html'));
  })

})

const transporter = nodemailer.createTransport({
    service: 'Hotmail',
    auth:{
        user: 'nataliaegustavo2021@outlook.com',
        pass: 'NateGu2021*' 
    }
});

server.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});