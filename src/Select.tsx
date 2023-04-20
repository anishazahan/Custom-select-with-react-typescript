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

        function clearOption(e:any) {
            e.stopPropagation()
            onChange(undefined)
        }
        function selectOption(option:selectOption) {
            onChange(option)
        }


  return (
   <>

        <div 
        onClick={()=>setIsOpen(prev=>!prev)}
        onBlur={() => setIsOpen(false)}
         tabIndex={0} className={styles.container}>

            <span className={styles.value}>{value?.label}</span>
            <button onClick={e=>clearOption(e)} className={styles['clear-btn']}>&times;</button>
            <div className={styles.divider}></div>
            <div className={styles.caret}></div>
            <ul className={`${styles.options} ${isOpen ?styles.show : ""}`}>
                {
                    
                    options.map((option,index)=>{
                     return <li
                     onClick={e => {
                        e.stopPropagation()
                        selectOption(option)
                        setIsOpen(false)
                      }}
                     className={styles.option} key={index}>{option.label}</li>
                    })
                }
            </ul>

        </div>
   
   </>
  )
}

export default Select