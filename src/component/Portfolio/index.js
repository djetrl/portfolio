import './Portfolio.scss';
import github from '../../assets/img/iconProfile/github.png'
import site from '../../assets/img/iconProfile/site.png'
const Portfolio = ({ items, setStatusInfo, statusInfo, Data }) => {
  const renderInfo = (status)=>{
    if(status){
      return(
        <>
            <img src={Data[status - 1].img} alt={`image ${Data[status - 1].img}`} />
            <h3>{Data[status - 1].name}</h3>
            <b></b> 
            <p>{Data[status - 1].text}</p>
            <div className="social">
              <button style={{display:Data[status - 1].site === '' && "none"}}>
                <a href={Data[status - 1].site}>
                  <img src={site} alt="site" />
                </a>
              </button>
              <button>
                <a href={Data[status - 1].github}>
                  <img src={github} alt="git" />
                </a>
              </button>
            </div>
        </>
      )
    }else{
      return(
        <div className="skeleton">
          <div className="skeleton-img"></div>
          <div className="skeleton-name"></div>
          <div className="skeleton-line"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-social">
            <b className="skeleton-social-icon"></b>
            <b className="skeleton-social-icon"></b>
          </div>
      </div>
      )
    }
  }
  return (
    <div className="Portfolio">
      <h2 className="title-page">Portfolio</h2>
      <div className="Portfolio-content">
        <div className="Portfolio-list">
          {
            Data &&
              Data.map((item, index)=>{
                return(
                  <div className="Portfolio-item"  key={item.name} onClick={()=>setStatusInfo(index + 1)}>
                  <p  className={index < 2 && "darkenedTitle"}  >{item.name}</p>
                  <img src={item.img} alt={`image ${item.name}`}/>
                </div>
                )
              }
              )
            }

        </div>
        <div className="Portfolio-info">
          {
            renderInfo(statusInfo)
          }
        </div>
      </div>
    </div>
  )
}

export default Portfolio;