import React, { useState, useEffect } from "react";
import _ from "lodash";
export default function Grids({ data, addRecord }) {
    
    const [searchStr, setSearchString] = useState("");
    //const [gridData, setGridData] = useState([]);
    // useEffect(() => {

    //    console.log("hiiiiii in inini " + searchStr);
    //     let wildSearchStr = '/^.*'+searchStr+'.*$/';
    //     let resultGridData;
         
        
         
    // //    if(data !== undefined){
    // //         resultGridData = data.filter(datVal => {
    // //            console.log("hiiii Search val ",datVal)
    // //                 Object.keys(data[0]).every((key => {
    // //                     console.log("hiiii keysss",key)
    // //                           datVal[key].match(eval(wildSearchStr))
    // //                }
    // //            ))
    // //         })
    // //    }
    //      console.log("resultGridData  :"+JSON.stringify(resultGridData));
        
    // }, [searchStr])
 const generateGridData = () => {
     const val =  searchStr!=''? data.filter(item => {
        console.log(">>>>>>>>>>>>>>>"+Object.keys(item), item)
        let tempval = Object.keys(item).toString();

        return tempval.split(',').every(key => {
          item[key].toLowerCase().includes(searchStr.toLowerCase())
        });
      }) : data
     
      return val;
 }
 
    return (

        <div>
            <div>

                <input type="text" name="search" class="search" placeholder="Search.."
                    value={searchStr}
                    onChange={(event) => setSearchString(event.target.value)} />
                <input type="button" class="button" value="Add New" onClick={addRecord}></input>
            </div>
            {
                data == undefined ? null :

                    <div class="container-table100">
                        <div class="wrap-table100">
                            <div class="table">
                                <div class="row header">
                                    {
                                        Object.keys(data[0]).map((head, i) => {
                                            return (
                                                <div class="cell" key={i}> {head} </div>
                                            );
                                        })
                                    }
                                </div>
                                {
                                

                                generateGridData().map((option, i) => {
                                        var body = Object.values(option);
                                        return (
                                            <div class="row" key={i}>
                                                {
                                                    body.map((values, j) => {
                                                        return (
                                                            <div class="cell" data-title={values} key={j}> {values} </div>
                                                        );
                                                    })

                                                }
                                                <div>
                                                    <a class="edit" title="" data-toggle="tooltip" data-original-title="Edit">
                                                        <i class="material-icons"> <img src="../assets/images/pencil.svg" alt="Edit" /></i>
                                                    </a>
                                                    <a class="delete" title="" data-toggle="tooltip" data-original-title="Delete">
                                                        <i class="material-icons"><img src="../assets/images/pencil.svg" alt="Edit" /></i>
                                                    </a>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
            }
        </div>

    );
}
 