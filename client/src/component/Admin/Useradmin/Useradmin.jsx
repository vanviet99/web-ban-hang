import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './useradmin.css'
import axios from 'axios';
import { useState ,useEffect} from 'react';
import { Pagination } from 'antd';
function Useradmin(props) {
  let Adatausser = props.userdata
  const [datauser,setDatauser] = useState([])
  const [dai,setDai]= useState()
  const [filter ,setFilter] =useState()
  const [page, setPage] = useState(1)
  useEffect(() => {
    axios.get('http://localhost:8000/v1/user')
    .then(data =>{
        setDai(data.data.length)
    })
    .catch(err =>{
        console.log(err)
    })
    axios.get(`http://localhost:8000/v1/user/paginiuser?page=${page} limit=5`)
    .then(data =>{
      setDatauser(data.data)
        console.log(data.data)
    })
    .catch(err =>{
        console.log(err)
    })
}, [Adatausser])
function onkeypagi(a,b,c){
  setPage(a)
  axios.get(`http://localhost:8000/v1/user/paginiuser?page=${a} limit=${b}`)
  .then(data =>{
    setDatauser(data.data)
      console.log(data.data)
  })
  .catch(err =>{
      console.log(err)
  })
}

axios.get('http://localhost:8000/v1/user')
.then(data =>{
    setDai(data.data.length)
})
.catch(err =>{
    console.log(err)
})


function handeld_searchadmin(){
  let search_useradmin = document.querySelector('.search_useradmin').value
  axios.get(`http://localhost:8000/v1/user/getbyname?searchbyname=${search_useradmin}`)
  .then((data)=>{
    setDatauser(data.data)
    setFilter(data.data.length)
  })
  .catch((err)=>{
    console.log(err)
  })
 
}
  return (
   <div className="useradmin_table">
    <div class="box">
  <div class="container-4">
      <input type="search" id="search" placeholder="Search by name" className='search_useradmin'/>
    	<button className="icon" onClick={()=>handeld_searchadmin()}><i class="fa fa-search"></i></button>
  </div>
  </div>
     <Table striped bordered hover size="sm" className='useradmin-table'>
      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th className='text-center'>Acction</th>
        </tr>
      </thead>
      <tbody>
        {Adatausser.length >0 ? Adatausser: datauser.map(function(value,index){
          return(
            <tr key={value._id}>
          <td>{index+1}</td>
          <td>{value.username}</td>
          <td className='table_td-acction'> <Button variant="warning">Edit</Button>
          <Button variant="dark">Delete</Button>
          </td>
        </tr>
          )
        })}
      </tbody>
    </Table>
    <Pagination defaultCurrent={1} total={filter ? filter*2 : dai*2} className='pagini_admin'  onChange={onkeypagi}/>
   </div>
  );
}

export default Useradmin;