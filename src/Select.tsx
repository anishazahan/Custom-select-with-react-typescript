import React, { useEffect, useState } from 'react'
import styles from './select.module.css'

type selectOption = {
    label : string,
    value: string | number
}

type MultipleSelectProps = {
    multiple: true
    value: selectOption[]
    onChange: (value: selectOption[]) => void
  }

type SingleSelectProps = {
    multiple?: false
    value?: selectOption
    onChange: (value: selectOption | undefined) => void
  }

  type SelectProps = {
    options: selectOption[]
  } & (SingleSelectProps | MultipleSelectProps)

const Select = ({multiple,options,value,onChange}:SelectProps) => {
    const [isOpen,setIsOpen] = useState(false)
    const [highlightedIndex, setHighlightedIndex] = useState(0)

        function clearOption(e:any) {
            multiple ? onChange([]) : onChange(undefined)
        }
        function selectOption(option: selectOption) {
            if (multiple) {
              if (value.includes(option)) {
                onChange(value.filter(o => o !== option))
              } else {
                onChange([...value, option])
              }
            } else {
              if (option !== value) onChange(option)
            }
          }

        function isOptionseleted(option:selectOption) {
            return option === value;
        }
        // function setHighlightedIndex(index:number) {
            
        // }

        useEffect(() => {
            if (isOpen) setHighlightedIndex(0)
          }, [isOpen])


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
                      onMouseEnter={() => setHighlightedIndex(index)}
                     className={`${styles.option} ${isOptionseleted(option)? styles.selected : ""}${index === highlightedIndex ? styles.highlighted : ""}`} key={option.value}>{option.label}</li>
                    })
                }
            </ul>

        </div>
   
   </>
  )
}

export default Select