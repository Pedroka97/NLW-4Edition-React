import styles from '../styles/components/Profile.module.css';


export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/78709600?s=460&u=0921b82f42f944cc010b6f63122e840e376fcf83&v=4" alt="Pedro Henrique Soares" />
            <div>
                <strong>Pedro Henrique</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </div>
    );
}