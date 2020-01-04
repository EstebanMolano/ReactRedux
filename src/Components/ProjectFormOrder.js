
import Link from '@material-ui/core/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React, { Component } from 'react';
import './ProjectFormOrder.css'
import { connect } from 'react-redux'
import { showProducts, addToOrderer } from '../Redux/actions'
import { Button } from '@material-ui/core';



class ProjectFormOrder extends Component {

  componentWillMount() {
    this.props.showProducts()
  }


  constructor() {
    super()
    this.state = {
      ordererPrice: 0
    }
  }


  clickMeToAdd = (parameter) => (event) => {
    this.setState({
      ordererPrice: this.state.ordererPrice += parameter.precio
    });
    this.props.addToOrderer(this.state.ordererPrice)

  }

  clickMeToDelete = (parameter) => (event) => {
    this.setState({
      ordererPrice: this.state.ordererPrice -= parameter.precio
    });
    this.props.addToOrderer(this.state.ordererPrice)

  }

  render() {

    return (
      <div class="root">
        <div id="orderer">
          <div class="col col-lg-">
            <React.Fragment>
              <p class="font-weight-bolder">List of products</p>
              <Table class="table">

                <TableHead class="table-head">
                  <TableRow>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Referencia</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell> Add / Remove to Orderer </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {this.props.products.map(row => (
                    <TableRow key={row.id}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.reference}</TableCell>
                      <TableCell>{row.precio}</TableCell>
                      <TableCell>

                      <button type="button" class="btn btn-primary" onClick={this.clickMeToAdd(row)} > Agregar </button>

                      <button type="button" class="btn btn-primary" onClick={this.clickMeToDelete(row)}> Eliminar </button>

                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>

                <TableBody>

                  <TableCell></TableCell>
                  <TableCell>Precio Total </TableCell>
                  <TableCell>{this.props.orderers}</TableCell>
                  <TableCell></TableCell>
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



function mapStateToProps(state) {
  return ({
    products: state.product.list,
    orderers: state.orderer.price
  })
}

const mapDispatchToProps = {

  showProducts,
  addToOrderer,

};



export default connect(mapStateToProps, mapDispatchToProps)(ProjectFormOrder);