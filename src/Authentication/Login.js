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
                    style={{width:"70%", fontWeight:"bold", fontSize:"18px"}}
                />
            </div>
            <div 
                style={{borderTop:"solid gray 2px", marginTop:"10px", paddingTop:"10px"}}
            >
                <input 
                    type="button" 
                    value="Create new Account" 
                    className={[styles.button, styles.success].join(' ')}
                    style={{width:"fit-content" , fontSize:"16px"}}
                />
            </div>
        </form>
    );
}
export default login;