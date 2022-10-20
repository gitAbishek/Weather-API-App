import {useState,useEffect} from "react"
const IncrDecrProgram = () => {

    const [data,setData] = useState(0)
    const Increment = () =>{
        data >= 0 ? setData(data+1) : setData(0)
    }

    const Decrement = () =>{
        data >= 0 ? setData(data-1) : setData(0)
    }

    useEffect(()=>{
        document.title = `Chats(${data})`;
    })
    
    return (
        <div className="program">
            <div className="container">
                <div className="text">{data}</div>
                <div className="button">
                    <button className="btn1" onClick={Increment}>INCR</button>
                    <button className="btn2" onClick={Decrement}>DECR</button>
                </div>
            </div>
        </div>
    )
}

export default IncrDecrProgram