export default function Btns({pages, onClick}) {
    
   
      
    return (
      <div className="books__pages pagination">
          {[...Array(pages),].map((e, i) => (
              <button key={i} className="btn-pagination" onClick={(e) =>onClick(e, i)}>{i+1}</button>
          ))}
      </div>
    )
}