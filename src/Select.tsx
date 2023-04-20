import React, { useState } from 'react'
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
    const [isOpen,setIsOpen] = useState(false)
  return (
   <>

        <div onClick={()=>setIsOpen(prev=>!prev)} tabIndex={0} className={styles.container}>

            <span className={styles.value}>{value?.label}</span>
            <button className={styles['clear-btn']}>&times;</button>
            <div className={styles.divider}></div>
            <div className={styles.caret}></div>
            <ul className={`${styles.options} ${isOpen ?styles.show : ""}`}>
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