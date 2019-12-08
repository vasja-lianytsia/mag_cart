import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./style.css"

const Header = ({ siteTitle, menuLinks }) => (
  <header
    style={{
      background: `	#AE1717`,
      // marginBottom: `0.15rem`,
    }}
  >
    
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1000,
        // padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div>
          <nav>
            <ul style={{ display: "flex", flex: 1 }}>
              <a className='logo'>Lemberg</a>
              {menuLinks.map(link => (
                <li
                  key={link.name}
                  style={{
                    listStyleType: `none`,
                    padding: `1rem`,
                    // backgroundColor: '#f39478',
                    fontSize: '20px',
                    marginRight:'10px',
                  }}
                >
                  <Link className='menu' to={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
