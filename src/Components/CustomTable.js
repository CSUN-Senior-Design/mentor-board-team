import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }

export class CustomTable extends Component {

    constructor(props){
        super(props)

        this.state = {
            data: props.data,
            sortMode: "off",
            sortVar: "none",
            mapping: props.mapping
        };
    }

    handleColumnClick(colName){

        let sortVar = this.state.sortVar
        let sortMode = ""
        let stateSortMode = this.state.sortMode

        let sortedAry = this.state.data.sort(function(a, b) {

            let fieldA = a[colName];
            let fieldB = b[colName];

            //Determine whether to sort by descending or ascending order based on last mode.
            //If the user clicked on a column that is already being sorted, then switch the mode.
            if (colName === sortVar){

                //If sort mode is being set to descending, then order of variables must be swapped.
                if(stateSortMode === "ascending"){
                    let tempField = fieldB

                    fieldB = fieldA
                    fieldA = tempField
                    
                    sortMode = "descending"
                }

                else if(stateSortMode === "descending")
                    sortMode = "off"
                
                else sortMode = "ascending"
            }

            //Sort has been requested for a column that isn't being sorted yet.
            else sortMode = "ascending"
            
            //Compare the fields and return either less than, greater than, or equal
            if (fieldA < fieldB) {
              return -1;
            }
            if (fieldA > fieldB) {
              return 1;
            }
          
            // names must be equal
            return 0;
            
        })

        this.setState({
            data: sortedAry,
            sortVar: colName,
            sortMode: sortMode
        })
    }

    getRowCell(row, col){
        let entry = row[col]

        if (entry instanceof Date)
            entry = entry.getDate() + "/" + entry.getMonth() + "/" + entry.getFullYear() + " - " + pad(entry.getHours(), 2) + ":" + pad(entry.getMinutes(), 2)

        return entry
    }

    printAlerts(data){
        
        this.setState({
            data: data
        })
    }

    render() {
        return (
            <Paper elevation = {this.props.elevation}>
                <TableContainer style = {this.props.containerStyle}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {this.props.tableHeader.map((column) => (                               
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        onClick = {() => this.handleColumnClick(column.id)}
                                        style={{ 
                                            minWidth: column.minWidth,
                                            maxWidth: column.maxWidth,
                                            marginTop: column.padding,
                                            marginBottom: column.padding,
                                            fontWeight: "bold",
                                            cursor: "pointer"
                                        }}
                                        >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>

                        <TableBody>

                            {this.state.data.map((row) => (
                                <TableRow>

                                    {this.state.mapping.map((col) => (
                                        <TableCell align="left">{this.getRowCell(row, col)}</TableCell>
                                    ))}

                                </TableRow>
                            ))}
                            
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        )
    }
}

export default CustomTable