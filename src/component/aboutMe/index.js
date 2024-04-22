
import './aboutMe.scss';
const AboutMe = () => {
  return (
    <div className="container">
      <div className="AboutMe  wow fadeInRight">
        <div className="AboutMe-content">
          <p className="wow fadeInUp" data-wow-duration="2s">Привет! Меня зовут <span>Гайдаренко Алексей</span> и я начинающий frontend-разработчик. Мой профиль – создание современных и удобных интерфейсов для веб-приложений.</p>
          <p className="wow fadeInUp" data-wow-duration="2s"> Я обладаю богатым опытом в разработке веб-сайтов, лендингови веб-приложений c использованием как ванильного javaScript, так и с использованием таких фреймворков как ReactJs, NextJS.</p>
          <p className="wow fadeInUp" data-wow-duration="2s"> Имеется опыт работы с AngualarJS.</p>
          <ul className="wow fadeInUp" data-wow-duration="2s">
            <p>Мои навыки включают в себя:</p>
            <li>HTML, CSS, Javascript, scss и jQuery, Typescript;</li>
            <li>Работу с фреймворками: Bootstrap, ant.design;</li>
            <li>Адаптивная верстка, оптимизация и кроссбраузерность;</li>
            <li>Frontend-фреймворки:  ReactJS ;</li>
            <li>имею опыт работы В команде;</li>
            <li>Знания таких технологий как: github ,npm , webpack, Docker;</li>
            <li>Опытна написания back-end на node js с использованием:  express, MongoDB(mongoose), express, socket.io и др;</li>
          </ul>
          <p className="wow fadeInUp" data-wow-duration="2s">Я открыт к новым вызовам и всегда стремлюсь улучшать свои навыки и знания. Я убежден, что взаимодействие, коммуникации и обучение - важные аспекты успешной работы в команде. Буду рад участвовать в интересных проектах, так что не стесняйтесь связаться со мной.</p>
        </div>
      </div>
    </div>
  )
}


export default AboutMe;