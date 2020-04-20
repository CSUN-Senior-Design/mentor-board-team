import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const columns = [
    {id: "Priority", label: "Priority", minWidth: 20, maxWidth: 40, align: "left"},
    {id: "Subject", label: "Name", minWidth: 75, maxWidth: 150, align: "left"},
    {id: "StartTime", label: "Date", minWidth: 75, maxWidth: 150, align: "left"},
    {id: "Location", label: "Location", minWidth: 75, maxWidth: 150, align: "left"}
];

export class AlertsPanel extends Component {

    constructor(props){
        super()

        this.state = {
            data: [],
            sortMode: "off",
            sortVar: "none"
        };
    }

    
    printAlerts(occurances){
        
        this.setState({
            data: occurances
        })
    }

    handleColumnClick(colName){
        let sortVar = this.state.sortVar
        let sortMode = ""
        let stateSortMode = this.state.sortMode

        let sortedAry = this.state.data.sort(function(a, b) {

            let fieldA = null;
            let fieldB = null;

            //Get the fields for comparison, depends on the header cell thats clicked.
            if(colName === "Priority"){
                fieldA = a.Priority
                fieldB = b.Priority
            }
            else if(colName === "Subject"){
                fieldA = a.Subject.toLowerCase()
                fieldB = b.Subject.toLowerCase()
            }

            else if(colName === "StartTime"){
                fieldA = a.StartTime
                fieldB = b.StartTime
            }

            else{
                fieldA = a.Location.toLowerCase()
                fieldB = b.Location.toLowerCase()
            }


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
          });

        this.setState({
            data: sortedAry,
            sortVar: colName,
            sortMode: sortMode
        })
    }


    render() {
        return (
            <Paper>
                <TableContainer style = {{maxHeight: 420, overflow: "auto"}}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (                               
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            onClick = {() => this.handleColumnClick(column.id)}
                                            style={{ 
                                                minWidth: column.minWidth,
                                                maxWidth: column.maxWidth,
                                                marginTop: column.padding,
                                                marginBottom: column.padding,
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
                                    <TableCell align="left">{row.Priority}</TableCell>
                                    <TableCell align="right">{row.Subject}</TableCell>
                                    <TableCell align="right">{row.StartTime.toUTCString()}</TableCell>
                                    <TableCell align="right">{row.Location}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
                
            






















            // <div className = "alerts-body">
            //             <div className = "alerts-header"> Alerts </div>

            //             <div>
            //                 <TreeGridComponent ref={TreeGrid => this.alertsRef = TreeGrid} dataSource={this.state.alertData} height = "300px" idMapping= 'id' allowSorting='false' allowResizing='true' created={(this.initAlerts.bind(this))}>
            //                     <ColumnsDirective>
            //                         <ColumnDirective field='Priority' headerText='priority' width='100' textAlign='Left'/>
            //                         <ColumnDirective field='Subject' headerText='name' width='225' textAlign='Center'/>
            //                         <ColumnDirective field='StartTime' headerText='date' width='250' textAlign='Center' type='date' format='dd/MM/yyyy hh:mm a'/>
            //                         <ColumnDirective field='Location' headerText='location' width='200' textAlign='Center'/>
            //                     </ColumnsDirective>
            //                     <Inject services={[Sort, Resize]}/>
            //                 </TreeGridComponent>

            //             </div>

            //             <div className="alerts-options-body">

            //                 <div className = "alerts-range-panel">
                                
            //                     <div style={{width: "100%", height: "25px", alignContent: "center"}}> Range:</div> 
            //                     <NumericTextBoxComponent value={this.state.alertsRange} style={{width: "80%", height: "35px", alignSelf: "center"}} decimals = {0} validateDecimalOnType={true} onChange={(this.getAlerts.bind(this))}/>

            //                 </div>

            //                 <div className="alerts-sorting-panel">

            //                     <div style={{width: "100%", height: "25px", alignContent: "center"}}> Sort By</div>
            //                     <ul className = "alerts-ul-style">
            //                         <li className="alerts-sorting-positions"> <CheckBoxComponent ref={CheckBox => this.alertSortPriorityRef = CheckBox} name="Sort" value="Priority" label="priority" checked={false} onChange={(this.sortAlerts.bind(this))}/> </li>
            //                         <li className="alerts-sorting-positions"> <CheckBoxComponent ref={CheckBox => this.alertSortNameRef = CheckBox} name="Sort" value="Subject" label="name" checked={false} onChange={(this.sortAlerts.bind(this))}/> </li>
            //                         <li className="alerts-sorting-positions"> <CheckBoxComponent ref={CheckBox => this.alertSortDateRef = CheckBox} name="Sort" value="StartTime" label="date" checked={false} onChange={(this.sortAlerts.bind(this))}/> </li>


            //                     </ul>
            //                 </div>

            //             </div>

                        

            //         </div>
        )
    }
}

export default AlertsPanel