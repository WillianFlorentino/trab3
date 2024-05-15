import './sidebar.css'

function SideBar() {
    return ( 
    <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark sidebar">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <span class="fs-4">Sidebar</span>
    </a>
    <hr/>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="/" class="nav-link active" aria-current="page">
        <i class="bi bi-house"></i>
          Home
        </a>
      </li>
      <li>
        <a href="/" class="nav-link text-white">
        <i class="bi bi-people-fill"></i>
          Gerenciar Beneficiários
        </a>
      </li>
      <li>
        <a href="/" class="nav-link text-white">
        <i class="bi bi-person-badge"></i> 
          Gerenciar Colabordadores da Secretaria
        </a>
      </li>
      <li>
        <a href="/" class="nav-link text-white">
          Gerencia Tipos de Serviços
        </a>
      </li>
      <li>
        <a href="/" class="nav-link text-white">
          Gerenciar Registro de Informações
        </a>
      </li>
      <li>
        <a href="/" class="nav-link text-white">
          Gerencia Tipos de Atividades Sustentáveis
        </a>
      </li>
    </ul>
    <hr/>

  </div>
     );
}

export default SideBar;