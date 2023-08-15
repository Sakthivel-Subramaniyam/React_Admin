import DataTable from "../../components/dataTable/DataTable"
import "./users.scss"
import Button from '@mui/material/Button';

const Users = () => {
  return (
    <div className="users">
      <div className="info">
        <h3>User Maintainence</h3>
        <Button className="app-btn" size="small" variant="contained" >Add New User</Button>
      </div>

      <DataTable/>
    </div>
  )
}

export default Users