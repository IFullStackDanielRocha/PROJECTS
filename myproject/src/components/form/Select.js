import style from './Select.module.css';
function Select ({text,name,option,handleOnChange,value}){
    return (
        <div className={style.form_control}>

            <label htmlFor={name}>{text}</label>
            <select 
            name={name} 
            >
                <option>Selecione a opção</option>



            </select>

        </div>
    )
}


export default Select