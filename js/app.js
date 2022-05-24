const personas = [];

mostrarPersonas = () =>{
    console.log('El método mostrar personas está ok')
    let texto = '';
    for(let persona of personas){
        console.log(persona)
        texto += `<li>${persona.nombre} ${persona.apellido} </li>`;
    }
    document.getElementById('personas').innerHTML = texto;
}

agregarPersona = () => {
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    if(nombre.valur != '' && apellido.value != ''){
        const persona = new Persona(nombre.value, apellido.value);
        console.log(persona);
        personas.push(persona);
        mostrarPersonas();
    }
    else{
        console.log('No hay info qué agregar')
    }
}   