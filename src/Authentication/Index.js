import Login from './Login/Login';
import Styles from './Index.module.css'

function startHome(){
    return(
        <div style={{display:"flex", justifyContent:"space-around", height:"100vh", backgroundColor:"#f0f2f5"}}>
            <div style={{alignSelf:"center", maxWidth:"40%"}}>
                <h2>Facebook-clone</h2>
                <h3>Facebook helps you connect and share with the people in your life.</h3>
            </div>
            <div style={{alignSelf:"center", width:"35%", height:"40vh"}}>
                <Login/>
            </div>
        </div>
    );
}
export default startHome;