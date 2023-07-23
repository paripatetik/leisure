import loading from '../assests/loading.gif';

export default function Loading() {
  return (
    <div className="loading__container">
      <img src={loading} alt="loading"/>
    </div>
  )
}