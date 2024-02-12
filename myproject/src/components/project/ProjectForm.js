import Input from '../form/Inputs';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import styles from './ProjectForm.module.css';

function ProjectForm({btnText}){
    return(
        
        <form className={styles.form}>

            <Input 
            type='text' 
            text='Nome do projeto'
            name='name'
            placeholder='Insira o nome do projeto'/>

            <Input 
            type='number' 
            text='Orçamento do projeto'
            name='badget'
            placeholder='Insira o orçamento total'/>

            <Select 
            name="category_id"
            text="Selecione categoria"/>

            <SubmitButton text={btnText}/>
        </form>
        
        )
}

export default ProjectForm