import React, {useState} from 'react';
import api from '../../service/api';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


import
{
Container,
SearchDiv,
Buttons,
ListAndSearch,
List
} from './styles';



export default function Home() {

    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
        checkedC: false,
        checkedD: false,
        checkedE: false,
    });
    const [jokes,setJokes] = useState([]);
    const [list, setList] = useState(false);
    const [text, setText] = useState('');

    async function getjoke(){

        //Gerar uma piada random
        if(state.checkedA === true){
            try{
                const response = await api.get(`jokes/random`)
                setJokes([response.data])
            }
            catch(error){
                console.log( 'ERROR' + error);
            }
            if(list === false){
                setList(true);
            }
        }
        //Gerar uma piada random com algum nome
        if(state.checkedB === true){
            if(text === ''){
              alert('Digite algo')
              return;
            }
            try{
                const response = await api.get(`jokes/random?firstName=${text}&lastName=`)
                setJokes([response.data])
            }
            catch(error){
                console.log( 'ERROR' + error);
            }
            if(list === false){
                setList(true);
            }
        }
        //Gerar uma piada inteligente               
        if(state.checkedC === true){
            try{
                const response = await api.get(`jokes/random?limitTo=[nerdy]`)
                setJokes([response.data])
            }
        
            catch(error){
                console.log( 'ERROR' + error);
            }
            if(list === false){
                setList(true);
            }
        }
         //Gerar um piada explicita                 
        if(state.checkedD === true){
            try{
                const response = await api.get(`jokes/random?limitTo=[explicit]`)
                setJokes([response.data])
            }
        
            catch(error){
                console.log( 'ERROR' + error);
            }
            if(list === false){
                setList(true);
            }
        }    
        //Pesquisar uma piada pelo id             
        if(state.checkedE === true){
            if(text === ''){
            alert('Digite um número')
            return;
            }
            try{
                const response = await api.get(`jokes/${text}`)
                setJokes([response.data])
            }
        
            catch(error){
                console.log( 'ERROR' + error);
            }
            if(list === false){
                setList(true);
            }
        }                 
    }


    //Mudar o valor do botão
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    //Mudar a const Text
    function handleinputChange(e) {
        setText(e.target.value);
    };
    


    return(
        list ? (
            <Container>
                <ListAndSearch>
                    <SearchDiv>
                        <input value={text} placeholder="Digite algo" type="text" onChange={handleinputChange}/>
                    </SearchDiv>
                        <List>
                            <ul>
                            {jokes.map((item) => (
                                <li key={item.value.id}>
                                    <strong>Piada </strong><a> : {item.value.joke}</a>
                                </li>
                            ))}
                            </ul>
                        </List>
                </ListAndSearch>
                <Buttons>
                    <Button onClick={getjoke} variant="contained" color="primary" style={{width: 140,height: 60, marginLeft: 10}}>
                        Gerar piada
                    </Button>
                    <FormGroup >
                        <FormControlLabel
                            control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" style={{marginLeft: 10}}/>}
                            label="Gerar piada aleatória"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={state.checkedB} onChange={handleChange} name="checkedB" style={{marginLeft: 10}}/>}
                            label="Gerar piada aleatória com seu nome"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={state.checkedC} onChange={handleChange} name="checkedC" style={{marginLeft: 10}}/>}
                            label="Buscar piada aleatória inteligente"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={state.checkedD} onChange={handleChange} name="checkedD" style={{marginLeft: 10}}/>}
                            label="Buscar piada aleatória explicita"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={state.checkedE} onChange={handleChange} name="checkedE" style={{marginLeft: 10}}/>}
                            label="Buscar uma piada especifica pelo id"
                        />
                    </FormGroup>
                </Buttons>
        </Container>
        ) :
        (<Container>
            <ListAndSearch>
                    <SearchDiv>
                        <input value={text} placeholder="Digite algo" type="text" onChange={handleinputChange}/>
                    </SearchDiv>
            </ListAndSearch>
            <Buttons>
                <Button onClick={getjoke} variant="contained" color="primary" style={{width: 140,height: 60, marginLeft: 10}}>
                    Gerar piada
                </Button>
                <FormGroup >
                    <FormControlLabel
                        control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" style={{marginLeft: 10}}/>}
                        label="Gerar piada aleatória"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={state.checkedB} onChange={handleChange} name="checkedB" style={{marginLeft: 10}}/>}
                        label="Gerar piada aleatória com seu nome"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={state.checkedC} onChange={handleChange} name="checkedC" style={{marginLeft: 10}}/>}
                        label="Buscar piada aleatória inteligente"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={state.checkedD} onChange={handleChange} name="checkedD" style={{marginLeft: 10}}/>}
                        label="Buscar piada aleatória explicita"
                    />
                    <FormControlLabel
                        control={<Checkbox checked={state.checkedE} onChange={handleChange} name="checkedE" style={{marginLeft: 10}}/>}
                        label="Buscar uma piada especifica pelo id"
                    />
                </FormGroup>
            </Buttons>
        </Container>
        )

    )
}

