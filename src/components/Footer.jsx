import React from 'react'

import { footerText } from '@/constants'

const Footer = () => {
  return (
    <footer id="footer" role="contentinfo">
      <div className="footer__inner">
        <h2 className="footer__text">
          <div>my homepage</div>
          <div>portfolio</div>
        </h2>

        <div className="footer__info">
          <div className="right">
            <h3>social</h3>
            <ul>
              {footerText.map((footer, key) => (
                <li key={key}>
                  <a href={footer.link}>{footer.title}</a>
                  <em>{footer.desc}</em>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer__right">
          <br /> jw portfolio.
        </div>
      </div>
    </footer>
  )
}

export default Footer
