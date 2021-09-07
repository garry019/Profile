import React from 'react';

function App() {
  return (
    <div className="App container-fluid">
      <div className="row d-flex align-items-center module">
        <div className="col">
          <h1>Gabriel Calderón <br /> <small className="text-secondary"> Full Stack Web Developer </small> </h1>
        </div>
      </div>

      <div className="row d-flex align-items-center justify-content-center module module-secondary text-light">
        <div className="col">
          <div className="mb-4">
            <h1>Disciplines <br /> <small className="text-secondary"> Overview </small> </h1>
          </div>
          <div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Illustrating</li>
              <li className="list-group-item">Design</li>
              <li className="list-group-item">Animation</li>
              <li className="list-group-item">Code</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row d-flex align-items-center justify-content-center module">
        <div className="col">
        <div className="mb-4">
            <h1>Software <br /> <small className="text-secondary"> Overview </small> </h1>
          </div>
          <div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Photoshop</li>
              <li className="list-group-item">Illustrator</li>
              <li className="list-group-item">After Effects</li>
              <li className="list-group-item">Animate</li>
              <li className="list-group-item">Z-Brush</li>
              <li className="list-group-item">Blender</li>
              <li className="list-group-item">Unreal Engine</li>
              <li className="list-group-item">Unity</li>
              <li className="list-group-item">Visual Studio</li>
              <li className="list-group-item">Git & GitHub</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row d-flex align-items-center justify-content-center module module-secondary text-light">

        <div className="col-12 col-sm mt-4 mb-4">
          <div className="mb-4">
            <h1>Programming<br /><small className="text-secondary">Languages</small></h1>
          </div>
          <div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">HTML</li>
              <li className="list-group-item">CSS</li>
              <li className="list-group-item">PHP</li>
              <li className="list-group-item">Javascript</li>
              <li className="list-group-item">Python</li>
            </ul>
          </div>
        </div>

        <div className="col-12 col-sm mt-4 mb-4">
          <div className="mb-4">
            <h1>Framework<br /><small className="text-secondary">Front & Back-End</small></h1>
          </div>
          <div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Laravel</li>
              <li className="list-group-item">Angular</li>
              <li className="list-group-item">React</li>
              <li className="list-group-item">Vue</li>
              <li className="list-group-item">DJango</li>
            </ul>
          </div>
        </div>

        <div className="col col-sm mt-4 mb-4">
          <div className="mb-4">
            <h1>Data Bases<br /><small className="text-secondary">Languages</small></h1>
          </div>
          <div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">SQL</li>
              <li className="list-group-item">MySQL</li>
              <li className="list-group-item">PostgreSQL</li>
              <li className="list-group-item">MongoDB</li>
              <li className="list-group-item">Redis</li>
            </ul>
          </div>
        </div>
        {/* End Modules */}
      </div>

      <footer className="row d-flex align-items-center">
        <div className="col p-5 text-secondary">
          <p>Bogotá - Colombia <br />
          © Copyright 2020 | All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}

export default App;
