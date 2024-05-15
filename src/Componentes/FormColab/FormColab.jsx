import './formcolab.css'

function FormColab(){
    return ( 
        <form>
            <h3>Gerenciar Colaboradores</h3>
        <div class="card borda">
            <h5 class="card-header">Dados do Colaborador</h5>
        <div class="card-body">
        <div className='row'>
        <div className='col-6'>
            <label>Colaborador</label>
            <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <button class="input-group-text btn btn-primary" id="basic-addon2"><i class="bi bi-search"></i></button>
            </div>
        </div>
        <div className='col-6'>
            <label>Sei não ainda</label>
            <input type='text' disabled value="08/11/2022 : 16:8" className='form-control'/>
        </div>

        </div>
        <div className='row'>
        <div className='col-6'>
            <label>OBRA</label>
            <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon2"/>
            <button class="input-group-text btn btn-primary" id="basic-addon2"><i class="bi bi-search"></i></button>
            <button class="input-group-text btn btn-info" id="basic-addon2"><i class="bi bi-plus"></i></button>
            </div>
        </div>
        </div>
        </div>
        </div>
        </form>
     );
}

export default FormColab;