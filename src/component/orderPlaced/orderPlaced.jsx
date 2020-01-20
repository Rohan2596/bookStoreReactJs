import React, { Component } from "react";
import './orderPlaced.css';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import oredrPlacedImage from './success-Order-confirmed-and-passed.jpg'

class OrderPlaced extends Component {
    render() {
        return (
            <div align="center" >
                <div align="center">
                    <img src={oredrPlacedImage} height="300" width="300" />
                </div>
                <div>
                    <p className="orderInfoParagraph">hurray!!! your order is confirmed</p>
                    <p className="orderInfoParagraph">the order id is #123456, save the order id for</p>
                    <p className="orderInfoParagraph">further communication</p>
                </div>

                <div className="tableDiv" align="center">
                    <TableContainer width="700px"  className="table">
                        <Table className="table">
                            <TableBody>
                                <TableRow className="headerTableRow">
                                    <TableCell className="tableCellLeft"><p className="orderInfoParagraph">Email Us</p></TableCell>
                                    <TableCell className="center"><p className="orderInfoParagraph">Contact Us</p></TableCell>
                                    <TableCell className="tableCellRight"><p className="orderInfoParagraph">Address</p></TableCell>
                                </TableRow>
                                <TableRow className="TableRow" >
                                    <TableCell className="tableCellLeft"><p className="orderInfoParagraph">admin@bookstore.com</p></TableCell>
                                    <TableCell className="tableCellLeft"><p className="orderInfoParagraph">+91 8163475881</p></TableCell>
                                    <TableCell className="tableCellLeft"><p className="orderInfoParagraph">41,14th main,15th cross, sector 4,Opp BDA <br /> complex,near kumarakom resturant HSR layout<br /> Banglore 560034</p></TableCell>
                                </TableRow>

                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <Button variant="contained" className="button" color="primary" >
                    Continue Shopping
                </Button>
            </div>
        );
    }
}
export default OrderPlaced;