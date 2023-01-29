import {useState} from 'react';
import styles from './SpeedTyping.module.css'

let charI = 1;

const initString = 'ffffjjjj'

export function SpeedTyping() {
    const [stringPassed, setStringPassed] = useState(initString);
    const [string, setString] = useState(initString);
    const [startTime, setLastTime] = useState(0);
    const [attempts, setAttempts] = useState(0);
    const [success, setSuccess] = useState(0);
    const items = ['f', 'j']

    return (
        <main className={styles.main}>
            <div></div>
            <div>
                <div className={styles.chars}>
                    {[...stringPassed].map((char) => <span className={styles.charPassed} key={charI++}>{char}</span>)}
                    {[...string].map((char, index) => <span className={index === 0 ? styles.charCurrent : styles.char} key={charI++}>{char}</span>)}
                </div>
                <input
                    value=''
                    onInput={(value) => {
                        const curAttempt = attempts + 1
                        setAttempts(curAttempt);
                        startTime === 0 && setLastTime(Date.now());
                        if (string[0] === value.currentTarget.value) {
                            setSuccess(success + 1);
                            setString(`${string.slice(1)}${items[Math.floor(Math.random()*items.length)]}`)
                            setStringPassed(`${string.slice(1)}${string[0]}`)
                        } else if (curAttempt - success >= 10) {
                            confirm('You lose!')
                            setStringPassed(initString)
                            setString(initString)
                            setLastTime(0)
                            setAttempts(0)
                            setSuccess(0)
                        }
                    }}
                />
                <div>Accuracy: {attempts > 0 ? Math.round(success/attempts * 100).toString().padStart(2, '0') : 0}%</div>
                <div>Speed: {startTime ? Math.round(attempts / ((Date.now() - startTime) / (1000 * 60))).toString().padStart(3, '0') : 0 } chars per minute</div>
            </div>
            <div></div>
        </main>
    )
}