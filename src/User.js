import React from "react"
import { useState } from "react"
function User() {
    const [data, setData] = useState(null)
    //     function UpdateData() {
    // setData(data+1)
    //     }
    function print(val) {
        console.log(val.target.value)
        setData(val.target.value)
    }
    return (
        //    <div> <h1>{data}</h1>
        //     <button className="btn" onClick={UpdateData} >Click Me And See Magic</button>
        //     </div>
        <input onChange={print} type="text" placeholder="Enter Any Name" />



    )
}
export default User