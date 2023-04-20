import React from 'react'
import styles from './select.module.css'

type selectOption = {
    label : string,
    value:any
}
type selectProps = {
    options : selectOption[],
    value?:selectOption,
    onChange:(value:selectOption | undefined )=>void
}

const Select = ({options,value,onChange}:selectProps) => {
  return (
   <>

        <div tabIndex={0} className={styles.container}>

            <span className={styles.value}>Value</span>
            <button className={styles['clear-btn']}>&times;</button>
            <div className={styles.divider}></div>
            <div className={styles.caret}></div>
            <ul className={`${styles.options} ${styles.show}`}>
                {
                    options.map((option,index)=>{
                     return <li className={styles.option} key={index}>{option.label}</li>
                    })
                }
            </ul>

        </div>
   
   </>
  )
}

export default Select