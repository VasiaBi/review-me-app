function HeroBanner() {
  return (
    <div className="hero yellow text-dark px-4 py-5 text-center">
    <div className="py-5">
      <h1 className="title display-5 fw-bold">Design Together, Anytime, Anywhere.</h1>
      <div className="mx-auto">
        <p className="subtitle-long s-5 mb-4">A seamless collaboration platform built for creative minds. Brainstorm, design, and refine in real time—without limits.</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn-prim btn-lg px-4 me-md-2">Start collaborating</button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default HeroBanner;