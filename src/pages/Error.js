import img from '../assests/philosopher.jpg';

export default function Error() {
  return (
    <div className='error-body'>
        <h1 className="title">Error 404: this page has not been found</h1>
        <img className='error-img' src={img} alt="error"/>
    </div>
  )
}