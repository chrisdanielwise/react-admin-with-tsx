import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable"
import "./users.scss"
// import { userRows } from "../../data";
import Add from "../../components/add/Add";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const User = () => {

  //Fetch data and send to Single Component
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field:"img",headerName:"Avater",width:100,
        renderCell : (params)=>{
            return <img src={params.row.img || "assests/noavater.png"} alt="" />
        }
    },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
      field: 'phone',
      headerName: 'Phone',
      type: 'number',
      width: 130,
      editable: true,
    },
    {
      field: 'createdAt',
      headerName: 'Created At',
      type: 'boolean',
      width: 200,
    },
    {
      field: 'verified',
      headerName: 'Verified',
      type: 'boolean',
      width: 150
    },
  ];
  

  const [open,setOpen] = useState(false)

  const {isLoading,data} = useQuery({
    queryKey:["allusers"],
    queryFn: () =>fetch("http://localhost:8800/api/users").then(res=>res.json())
      // fetch("https://api.github.com/repos/tannerlinsley/react-query").then(res=> res.json())
  })
  
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={()=>setOpen(true)}>Add New User</button>
      </div>
      { isLoading ? ("loading...")
       : (<DataTable slug="users" columns={columns} rows={data}/>)
       }
      {open && <Add slug="user" columns={columns} setOpen={setOpen}/>}
    </div>
  )
}

export default User