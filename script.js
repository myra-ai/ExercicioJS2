const p_array=document.getElementById('array');
const txt_pesquisar=document.getElementById('txt_pesquisar')
const btnPesquisar =document.getElementById('btnPesquisar')
const resultado = document.getElementById('resultado')


const elementos_array = ['css','html']
p_array.innerHTML = "["+elementos_array+"]"

btnPesquisar.addEventListener('click',(evt)=>{

    resultado.innerHTML='valor não encontrado'
    const ret = elementos_array.find((e,i)=>{
        if(e.toUpperCase() == txt_pesquisar.value.toUpperCase()){
            resultado.innerHTML= "valor pesquisado:"+ e + " na posição "+ i
            return e
        }
    })
    console.log(ret)
})