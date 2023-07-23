import Select from "react-select";


export default function BooksSelect({setFilter, setSize, type}) {
  const filters = [
    { value: '', label: 'All' },
    { value: 'free-ebooks', label: 'Free Google eBooks' },
    { value: 'paid-ebooks', label: 'Paid Google eBooks' }
  ];
  const optionsNums = [
    { value: '10', label: '10' },
    { value: '20', label: '20' },
    { value: '30', label: '30' },
    { value: '40', label: '40' }
  ];
  
  const typeMovie = [
    { value: 'Movies', label: 'Movies' },
    { value: 'Series', label: 'Series' }
  ];
  
  if(type==='books') return (
    <div className="books__select">
    <Select
    styles={{ control: (baseStyles, state) => ({...baseStyles, borderColor: state.isFocused ? 'black' : 'white', backgroundColor: state.isFocused ? '#406E3A' : 'rgb(154, 197, 143)',}),}}
    defaultValue={filters[0]} options={filters} onChange={(filter) => setFilter(filter.value)}/>
    <Select
    styles={{ control: (baseStyles, state) => ({...baseStyles, borderColor: state.isFocused ? 'black' : 'white', backgroundColor: state.isFocused ? '#406E3A' : 'rgb(154, 197, 143)',}),}}
    defaultValue={optionsNums[0]} options={optionsNums}  onChange={(size) => setSize(size.value)}/>
  </div>
  )
}