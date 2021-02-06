import styles from './Login.module.css';

function login(){
    return(
        <form className = {styles.loginForm}>
            <div className={styles.formGroup}>
                <input type="text" name="username" placeholder="Username"/>
                <input type="password" name="password"/>
            </div>
            <div>
                <input 
                    type="submit" 
                    value="Log in" 
                    className={[styles.button, styles.primary].join(' ')}
                    style={{fontWeight:"bold", fontSize:"22px", width:"100%"}}
                />
            </div>
            <div 
                style={{borderTop:"1px solid #dadde1", marginTop:"auto", padding:"25px"}}
            >
                <input 
                    type="button" 
                    value="Create new Account" 
                    className={[styles.button, styles.success].join(' ')}
                    style={{width:"fit-content" , fontSize:"20px"}}
                />
            </div>
        </form>
    );
}
export default login;