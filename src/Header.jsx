
const textAlignRowStyle = {
    textAlign: "row" ,
  }
  

export default function Header(){
    return(
        <div className="header">
        <div style= {textAlignRowStyle} className="time">
          <h1 className="text-align: center">08:00</h1>
          <h2>AM</h2>
        </div>

        <div style= {textAlignRowStyle} className="date">

          <h1>MONDAY</h1>
          <h2>April 12th, 2022</h2>

        </div>

        <div style= {textAlignRowStyle} className="Temp">

          <h1>70</h1>
          <h2>Fahrenheit</h2>
        </div>
      </div>
    );
}