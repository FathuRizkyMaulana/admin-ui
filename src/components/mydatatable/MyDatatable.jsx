import "./mydatatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Rizky", firstName: "Fathu", age: 21 },
  { id: 2, lastName: "Safitro", firstName: "Ilham", age: 22 },
  { id: 3, lastName: "Gunanto", firstName: "Dani", age: 21 },
  { id: 4, lastName: "Salim", firstName: "Mirza", age: 22 },
  { id: 5, lastName: "Rivandi", firstName: "Septiyan", age: 21 },
  { id: 6, lastName: "Ramadhan", firstName: "Izzal", age: 22 },
  { id: 7, lastName: "Domani", firstName: "Megan", age: 21 },
  { id: 8, lastName: "Eva de Jongh", firstName: "Mawar", age: 22 },
  { id: 9, lastName: "Shafaa", firstName: "Azizi", age: 20 },
];

const actionColumn = [
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: () => {
      return (
        <div className="cellAction">
          <Link to="/users/test" style={{ textDecoration: "none" }}>
            <div className="viewButton">View</div>
          </Link>
        </div>
      );
    },
  },
];

const MyDatatable = () => {
  return (
    <div className="mydatatable">
      <div className="mydatatableTitle">
        Users
        <Link to="/users/new" style={{ textDecoration: "none" }}>
          Add New
        </Link>
      </div>
      <DataGrid
        rows={rows}
        columns={columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default MyDatatable;
