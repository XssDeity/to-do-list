//declarar variables

    const fecha= document.querySelector('#fecha');
    const lista= document.querySelector('#lista');
    const input=document.querySelector('#input');
    const botonEnter=document.querySelector('#boton-enter');
    const check='fa-check-circle'
    const uncheck='fa-circle'
    const lineThrough='line-through'
    
    //function agregar tarea

    function agregarTarea(tarea){
        const elemento= 
        
                        `<li id="elemento">
                                 <i class="far fa-circle co" data="realizado" id="0"></i>
                                <p class="text">${tarea}</p>
                            <i class="fas fa-trash-alt de" data="eliminado" id="0"></i>
                
                     </li>
                     `
                        lista.insertAdjacentHTML("beforeend",elemento)
            }

    
            botonEnter.addEventListener('click', ()=>{
                const tarea=input.value
                if(tarea){
                    agregarTarea(tarea)
                }
                input.value='' //la tarea lo coloca en otra zona y necesito borrarla
            })

            document.addEventListener('keyup',function(event){
                if(event.key=='Enter'){
                    const tarea=input.value
                    if(tarea){
                        agregarTarea(tarea)
                    }
                    input.value=''
                }
            })