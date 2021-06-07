import React, { useState } from 'react';
import './productList.css'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { productsRows } from '../../data.js';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [data, setData] = useState(productsRows);

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    } 

    const columns = [
        { field: 'id', headerName: 'ID', width: 120 },
        { field: 'products', headerName: 'Products', width: 300, renderCell: (params) => {
            return (
                <div className="productsListUser">
                    <img className="productsListImage" src={params.row.img} alt=""/>
                    {params.row.name}
                </div>
            )
        }},
        { field: 'stock', headerName: 'Stock', width: 300 },
        {
          field: 'status',
          headerName: 'Status',
          width: 200,
        },
        {
          field: 'price',
          headerName: 'Price',
          width: 240,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                      <Link to={"/product/" + params.row.id}>
                         <button className="productsListEdit">Edit</button>
                      </Link>
                      
                      <DeleteOutline className="productsListDelete" onClick={() => handleDelete(params.row.id)}/>
                    </>
                )
            }
        }
      ];

    return (
        <div className="productList">
            <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8} checkboxSelection /> 
        </div>
    )
}

export default ProductList
