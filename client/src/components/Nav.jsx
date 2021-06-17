import React from 'react'

function Nav() {
    return (
        <div className="" style={{paddingTop:"20px", paddingRight:"20px"}}>
            <div>
                <ul class="nav justify-content-end ">
                  <li class="nav-item">
                    <a class="nav-link active" href="#">Active</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " href="#">Disabled</a>
                  </li>
                </ul>
            </div>
            
        </div>
    )
}

export default Nav
