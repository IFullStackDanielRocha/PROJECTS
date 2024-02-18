import styles from '../project/ProjectForm.module.css'
import { useState } from 'react'
import Inputs from '../form/Inputs'
import SubmitButton from '../form/SubmitButton'

function ServiceForm({handleSubmit, textBtn, projectData}) {

    const[service,setService] = useState({})

    function submit(e) {
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }   
    function handleChange(e) {
        setService({...service, [e.target.name]: e.target.value})
        //console.log(setService)
    }



    return (
        <form onSubmit={submit} className={styles.form}>
            <Inputs
                type="text"
                text="Nome do serviço"
                name="name"
                placeholder="Insira o nome do serviço"
                handleOnChange={handleChange}

            />

            <Inputs
                type="number"
                text="Custo do serviço"
                name="cost"
                placeholder="Inform custo serviço"
                handleOnChange={handleChange}

            />


            <Inputs
                type="text"
                text="Descrição do serviço"
                name="description"
                placeholder="Descreva o serviço"
                handleOnChange={handleChange}

            />

            <SubmitButton 
            text={textBtn}
            />
        </form>


    )
}

export default ServiceForm;