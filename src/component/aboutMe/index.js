
import './aboutMe.scss';
const AboutMe = () => {
  return (
    <div className="AboutMe">
      <h2 className="title-page">About me</h2>
      <div className="AboutMe-content">
        <p>Привет! Меня зовут <span>Гайдаренко Алексей</span> и я начинающий frontend-разработчик. Мой профиль – создание современных и удобных интерфейсов для веб-приложений.</p>
        <p> Я обладаю богатым опытом в разработке веб-сайтов, лендингов, онлайн-магазинов и веб-приложений.</p>
        <ul>
          <p>Мои навыки включают в себя:</p>
          <li>HTML, CSS, Javascript, scss и jQuery, Typescript;</li>
          <li>Работу с фреймворками: Bootstrap,ant.design;</li>
          <li>Адаптивная верстка, оптимизация и кроссбраузерность;</li>
          <li>Frontend-фреймворки:  ReactJS ;</li>
          <li>имею опыт работы В команде;</li>
          <li>Знания таких технологий как: github ,npm , webpack, Docker;</li>
          <li>Опытна написания back-end на node js с использованием:  express,MongoDB(mongoose), express, socket.io и др;</li>
        </ul>
        <p>Я открыт к новым вызовам и всегда стремлюсь улучшать свои навыки и знания. Я убежден, что взаимодействие, коммуникации и обучение - важные аспекты успешной работы в команде. Буду рад участвовать в интересных проектах, так что не стесняйтесь связаться со мной.</p>
      </div>
    </div>
  )
}


export default AboutMe;