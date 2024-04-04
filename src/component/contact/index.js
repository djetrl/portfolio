
import './contact.scss';
import { ReactSVG } from 'react-svg';
import mail from '../../assets/img/contact/mail.svg';
import git from '../../assets/img/contact/git.svg';
import phone from '../../assets/img/contact/phone.svg';
import tg from '../../assets/img/contact/tg.svg';
import { Formik} from 'formik';
import * as Yup from 'yup';
const SingupSchema = Yup.object().shape({
  name:Yup.string()
          .min(2, 'To Short!')
          .max(50, 'To Long!')
          .required('Requred'),
  phone:Yup.number()
           .typeError("That doesn't look like a phone number")
           .positive("A phone number can't start with a minus")
           .integer("A phone number can't include a decimal point")
           .min(8)
           .required('required'),
  email: Yup.string().email('Invalid email').required('Required'),
  message:Yup.string()
             .min(2, 'To Short!')
             .max(120, 'To Long!')
             .required("Requred")

})
const Contact = ({copiedModal, onAppearanceModalCopied, sendMailModal, sendMail})=>{
  return(
    <div className="container">
      <div className="contact" id='contact'>
          {copiedModal ? (
                <div className="modal-clipboard">
                    copied
                </div>
          ):null}
          {sendMailModal === "ok" ?(
                <div className="modal-clipboard">
                  Успешно отправлено
              </div>
          ):sendMailModal === 'error'?(
            <div className="modal-clipboard">
              Ошибка
            </div>
          ) : null}
          <div className="contact-inner">
            <Formik
              initialValues={{
                name:'',
                phone:'',
                email:'',
                message:''
              }}
              validationSchema={SingupSchema}
              onSubmit={value=>{
                sendMail(value)
              }}
            >
              {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
              })=>(
                  <form className="contact-form" onSubmit={handleSubmit} >
                      <div className="contact-form-item">
                        <input type="text" name='name' placeholder='your name' onChange={handleChange} onBlur={handleBlur} value={values.name}/>
                        {errors.name && touched.name && (<div className='validation-error'>{errors.name}</div>)}
                      </div>
                    <div className="contact-form-item">
                      <input type="text" name='phone' placeholder='your phone' onChange={handleChange} onBlur={handleBlur} value={values.phone}  />
                      {errors.phone && touched.phone && (<div className='validation-error'>{errors.phone}</div>)}
                    </div>
                    <div className="contact-form-item">
                      <input type="email" name='email' placeholder='your e-mail' onChange={handleChange} onBlur={handleBlur} value={values.email} />
                      {errors.email && touched.email && (<div className='validation-error'>{errors.email}</div>)}
                    </div>

                      <div className='contact-form-item'>
                        <input type="text" name='message' placeholder='Message' onChange={handleChange} onBlur={handleBlur} value={values.message} />
                        {errors.message && touched.message && (<div className='validation-error'>{errors.message}</div>)}
                      </div>

                      <input type="submit" value="SEND MESSAGE" disabled={isSubmitting} />
                  </form>
                )}
            </Formik>
            <div className="contact-social">
                <div className="contact-social-inner">
                  <a href='*' className="contact-social-link" onClick={(event)=>{onAppearanceModalCopied(event, 'leshadjet@Mail.ru')}}>
                    <ReactSVG src={mail} className='contact-social-svg'/>
                  </a>
                  <a href='*s' className="contact-social-link" onClick={(event)=>{onAppearanceModalCopied(event, '+79237400996')}}>
                    <ReactSVG src={phone} className='contact-social-svg'/>
                  </a>
                  <a href='https://t.me/djetrl' className="contact-social-link">
                    <ReactSVG src={tg} className='contact-social-svg'/>
                  </a>
                  <a href='https://github.com/djetrl?tab=repositories' className="contact-social-link">
                    <ReactSVG src={git} className='contact-social-svg'/>
                  </a>
                </div>

            </div>
          </div>
      </div>
    </div>
  )
}


export default Contact;