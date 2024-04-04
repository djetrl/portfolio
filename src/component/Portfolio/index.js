import './Portfolio.scss';
import github from '../../assets/img/iconProfile/github.png'
import site from '../../assets/img/iconProfile/site.png'
const Portfolio = ({ items, setStatusInfo, statusInfo, Data }) => {

  return (
    <div className="container">
      <div className="Portfolio" id='portfolio'>
        <div className="Portfolio-content">
            <div className="Portfolio-item">
              <div className="Portfolio-item-text">
                  <h1>PROJECT name</h1>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia ipsum dignissimos porro harum quis. Vero consequuntur, optio culpa laudantium commodi, maiores alias hic tenetur voluptates perferendis maxime impedit. Ratione, deleniti.
                  Eius odit placeat ipsa soluta nostrum, ut a cumque officia rerum, maiores perspiciatis cum commodi consectetur nulla. Sunt, aliquid sit quis explicabo nemo adipisci. Dolor neque soluta aperiam ea sint.
                  Omnis laudantium molestiae dicta tempore dolor voluptates veritatis officiis temporibus sit sequi libero nulla harum, accusantium necessitatibus tenetur doloribus culpa explicabo amet consequuntur deleniti. Voluptates veritatis inventore fuga in aut?
                  Dolore quo aliquam excepturi. Provident eos veritatis placeat quidem maxime earum itaque odit error. Maxime voluptates nemo ipsum, impedit porro, architecto ad quia voluptatum nam expedita numquam distinctio, tenetur quisquam.</p>
              </div>
              <div className='Portfolio-item-imgContainer'>
                  <div className='Portfolio-imgContainer one'>
                    <img src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg" alt="" />
                  </div>
                  <div className='Portfolio-imgContainer two'>
                    <img src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg" alt="" />
                  </div>
                  <div className='Portfolio-imgContainer three'>
                    <img src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg" alt="" />
                  </div>
              </div>
            </div>
            <div className="Portfolio-item">
              <div className="Portfolio-item-text">
                  <h1>PROJECT name</h1>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia ipsum dignissimos porro harum quis. Vero consequuntur, optio culpa laudantium commodi, maiores alias hic tenetur voluptates perferendis maxime impedit. Ratione, deleniti.
                  Eius odit placeat ipsa soluta nostrum, ut a cumque officia rerum, maiores perspiciatis cum commodi consectetur nulla. Sunt, aliquid sit quis explicabo nemo adipisci. Dolor neque soluta aperiam ea sint.
                  Omnis laudantium molestiae dicta tempore dolor voluptates veritatis officiis temporibus sit sequi libero nulla harum, accusantium necessitatibus tenetur doloribus culpa explicabo amet consequuntur deleniti. Voluptates veritatis inventore fuga in aut?
                  Dolore quo aliquam excepturi. Provident eos veritatis placeat quidem maxime earum itaque odit error. Maxime voluptates nemo ipsum, impedit porro, architecto ad quia voluptatum nam expedita numquam distinctio, tenetur quisquam.</p>
                  <ul className="Portfolio_links">
                    <li className='Portfolio_link'><a href=''><img src={github} alt="github" /></a></li>
                    <li className='Portfolio_link'><img src={site} alt="site" /></li>
                  </ul>
              </div>
              <div className='Portfolio-item-imgContainer'>
                  <div className='Portfolio-imgContainer one'>
                    <img src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg" alt="" />
                  </div>
                  <div className='Portfolio-imgContainer two'>
                    <img src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg" alt="" />
                  </div>
                  <div className='Portfolio-imgContainer three'>
                    <img src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg" alt="" />
                  </div>
              </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;