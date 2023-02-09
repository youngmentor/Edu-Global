import "./Loading.css"
const Loading = ({color}) => {
  return (
    <div className='loader'>
        <img src="/Loading"/>
        {/* <h1 style={{color: state? 'white': undefined}} >Loading...</h1> */}
    </div>
  )
}

export default Loading