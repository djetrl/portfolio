
import {connect} from 'react-redux';
import { Contact as BaseContactPage } from "../component";
import { useState } from 'react';
import emailjs from '@emailjs/browser';
const ContactPage = ({pageNumber})=>{
  const [copiedModal, setCopiedModal] = useState(false);
  const [sendMailModal, setSendMailModal] = useState(false);
  const onAppearanceModalCopied = (event, text)=>{
    event.preventDefault()
    window.navigator.clipboard.writeText(text).then((data)=>{
      setCopiedModal(true);
      setTimeout(()=>{
        setCopiedModal(false);
      }, 1000);
    })
  }
  const sendMail = value=>{
    emailjs.send('service_pofldjet', 'template_akbtpnd', value, 'ZeuxMoL7oP8N-HPde')      
      .then((result) => {
        setSendMailModal('ok');
        setTimeout(()=>{
          setSendMailModal(false);
        }, 1000);
      }, (error) => {
        setSendMailModal('error');
        setTimeout(()=>{
          setSendMailModal(false);
        }, 1000);
      });
  }
  return(
    <BaseContactPage pageNumber={pageNumber}  copiedModal={copiedModal} onAppearanceModalCopied={onAppearanceModalCopied} sendMail={sendMail} sendMailModal={sendMailModal}  />
  )
}


export default connect(({ page })=>({pageNumber:page.count}))(ContactPage); 