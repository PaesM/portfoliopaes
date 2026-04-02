export default function Projects() {
  return (
    <div>

      <div className="section">
        <h2>Projects</h2>
      </div>

      <div className="section row">

        <div className="card" style={{ flex: 1 }}>
          <h3>Boardease</h3>
          <p>Boarding house management system.</p>
        </div>

        <div className="card" style={{ flex: 1 }}>
          <h3>CRUD App</h3>
          <p>Basic CRUD application with authentication.</p>
        </div>

      </div>

      <div className="section card row">
        <div style={{ flex: 1 }}>
          <h3>Featured Project</h3>
          <p>Description of Boardease</p>
        </div>

        <div className="box">Still being worked on</div>
      </div>

    </div>
  );
}