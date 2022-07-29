import { useState, useRef } from "react";

    

function Layoutmain() {
    const userN = useRef();
    const userP = useRef();
    const userA = useRef();
    const [Newarr, setNewArr] = useState([]);

    const onInputUpdate = (e) => {
        let tempArr = [...Newarr];
        let inputVal1 = userN.current.value;
        let inputVal2 = userP.current.value;
        let inputVal3 = userA.current.value;
        let inputVal = [inputVal1, inputVal2, inputVal3];
        tempArr.push(inputVal);
        setNewArr(tempArr);
        userN.current.value = "";
    }
     const removeonclick = (indx) => (e) => {
        let tempArr = [...Newarr];
        tempArr.splice(indx, 1)
        setNewArr(tempArr);
    }
    return (
        <div className="main">
            <div className="main1">
                <div className="holder" ><table >
                   
                                { Newarr.map(
                        (value ,indx) =><tr className="table">
                                    <th key={indx}  >name:{value}</th>
                                    <th key={indx} >disease :{value}</th>
                                    <th key={indx} >age : {value}</th>
                                    <span onClick={removeonclick(indx)}>x</span>
                                    </tr>                
                    )
                }
            
                </table>
                </div>
                <div className="menu">
                    <input trpe="text" placeholder="name" ref={userN}></input>
                    <input type="text" placeholder="disease"  ref={userP}></input>
                    <input type="date" placeholder="age" ref={userA}></input>
                    <button onClick={onInputUpdate}>submit</button>
                </div>
            </div>
        </div>
    )
}
export default Layoutmain;