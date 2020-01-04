import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React, { Component } from 'react';
import './ProjectFormList.css'
import { connect } from 'react-redux'
import { showProducts } from '../Redux/actions'

class ProjectFormList extends Component {
  
  componentWillMount(){
    this.props.showProducts()
  }

  
listProducts(){
  return this.props.products.map((row) => {
    return(
    <TableRow key={row.id}>
      <TableCell>{row.name}</TableCell>
      <TableCell>{row.reference}</TableCell>
      <TableCell>{row.precio}</TableCell>
    </TableRow>
  )})
}
  

    render(){

   
        return(
          <div className="root">
            <h1>Hola</h1>

            <div class="container">
    <div class="col col-lg-">
          <React.Fragment>
      <h1>List of products</h1>
      <Table class="table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Referencia</TableCell>
            <TableCell>Precio</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {this.listProducts()}
        </TableBody>
      </Table>
      <div className="seeMore">
        <Link color="primary" href="javascript:;">
          Challenger React S.A
        </Link>
      </div>
    </React.Fragment>
    </div>
        </div>


            
        </div>

        );
    }


   

}


function  mapStateToProps(state) {
  return({
    products : state.product.list
  })
}


export default connect(mapStateToProps, { showProducts })(ProjectFormList);