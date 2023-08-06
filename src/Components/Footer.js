import React from 'react'
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import HomeIcon from '@mui/icons-material/Home';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MailIcon from '@mui/icons-material/Mail';
import DiamondIcon from '@mui/icons-material/Diamond';

const Footer = () => {
  return (
    <>
      
      <footer className="text-center text-lg-start bg-light text-muted">
        <section className="d-flex text-white bg-info justify-content-center justify-content-lg-between p-3 border-bottom">
        <div className="container d-flex bg-info justify-content-center justify-content-lg-between">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <Link href="" className="me-4 text-reset">
              <FacebookIcon />
            </Link>
            <Link href="" className="me-4 text-reset">
              <TwitterIcon />
            </Link>
            <Link href="" className="me-4 text-reset">
              <InstagramIcon />
            </Link>
            <Link href="" className="me-4 text-reset">
              <LinkedInIcon />
            </Link>
            <Link href="" className="me-4 text-reset">
              <GitHubIcon />
            </Link>
          </div>
          </div>
        </section>
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4"><DiamondIcon />Ranjay Developer</h6>
                <p>
                  Here you can use rows and columns to organize your footer content. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p><Link href="#!" className="text-reset text-decoration-none">Angular</Link></p>
                <p><Link href="#!" className="text-reset text-decoration-none">React</Link></p>
                <p><Link href="#!" className="text-reset text-decoration-none">Vue</Link></p>
                <p><Link href="#!" className="text-reset text-decoration-none">Laravel</Link></p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p><Link to="/" className="text-reset text-decoration-none">Link 1</Link></p>
                <p><Link to="/" className="text-reset text-decoration-none">Link 2</Link></p>
                <p><Link to="/" className="text-reset text-decoration-none">Link 3</Link></p>
                <p><Link to="/" className="text-reset text-decoration-none">Link 4</Link></p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p><HomeIcon />Saptarishi Towers, Bhoomi Park Phase 2 Rd, Janklyan Nagar, Babrekar Nagar, Malad West, Mumbai, Maharashtra 400095 </p>
                <p><Link to="tel:+919619079190" className="text-reset text-decoration-none"><PhoneInTalkIcon /> + 91 9619079190</Link></p>
                <p><Link to="mailto:ranjayk8396@gmail.com" className="text-reset text-decoration-none"><MailIcon /> ranjayk8396@gmail.com</Link></p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4 bg-info text-white">© 2023 Copyright: Ranjay Developer </div>
      </footer>
    </>
  )
}

export default Footer