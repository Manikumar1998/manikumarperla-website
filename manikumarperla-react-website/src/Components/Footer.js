import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container-fluid" style={{ backgroundColor: "black" }}>
        <div className="row">
          <div className="col-12 text-center text-light my-5">
            <h2>Interested in working with me?</h2>
            <button type="button" className="btn btn-outline-light btn-lg mt-3">
              Let's talk
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4 text-center my-5">
            <h5 className="pb-3 text-info">More links</h5>
            <a href="#" className="text-light" style={blockStyle}>
              Blogs
            </a>
            <a href="#" className="text-light" style={blockStyle}>
              Home
            </a>
            <a href="#" className="text-light" style={blockStyle}>
              Contact me
            </a>
            <a href="#" className="text-light" style={blockStyle}>
              Write a recommendation <i className="fas fa-heart text-light"></i>
            </a>
          </div>

          <div className="col-sm-4 text-justify my-5 text-light">
            <p>
              I love writing code, hands down. I wrote my first program right
              after my 10th grade. Just like 99.99% of all the programmers, my
              first program was indeed the holy “Hello world!” program. I
              learned the basics of C and started writing simple programs. One
              day I came across something called “Loops” and that day,
              everything has changed. If you ask me what is that one program
              that you are most proud of, I’d say without a second thought that
              it is the multiplication table program that I wrote when I was 14
              years old. It’s a simple program that prints the multiplication
              table of a number x till a number y. I am a software engineer
              trying to understand the world of computers from all angles.
            </p>
          </div>

          <div className="col-sm-4 text-center my-5">
            <h5 className="text-info pb-3">Social</h5>
            <a href="#" style={blockStyle}>
              <i className="fab fa-linkedin text-light h1"></i>
            </a>
            <a href="#" style={blockStyle}>
              <i className="fab fa-github text-light h1"></i>
            </a>
            <a href="#" style={blockStyle}>
              <i className="fas fa-envelope text-light h1"></i>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center text-muted">
            <p>Copyright © Manikumar Perla 2020</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

const blockStyle = {
  display: "block"
};

export default Footer;