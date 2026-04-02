export default function About() {
  return (
    <div>

      <div className="section card">
        <h2>About Me</h2>

        <div className="row">
          <div style={{ flex: 1 }}>
            <p>
              My name is Melecio E. Paes III, I love in Lapu-lapu city Cebu and I am an IT student passionate about building systems and applications.
            </p>
             <p>
              My favorite lines whenever I code is. "Why isn't this working!"
            </p>
          </div>
       
       <img src="/images/Me.jpg" alt="Me" style={{ width: "200px", height: "auto" }} />
        </div>
      </div>

      <div className="section card">
        <h2>Education</h2>
        <p>BSIT | CPC | 2025</p>
      </div>

    </div>
  );
}