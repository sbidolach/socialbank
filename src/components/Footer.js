import React from 'react'

class Footer extends React.Component {
  render () {
    return (
      <footer id='footer' className='dark'>
        <div id='copyrights' style={{ fontSize: '16px' }}>
          <div className='container clearfix'>
            <div className='col_half'>
              Copyrights &copy; 2017 All Rights Reserved by SoTec.<br />
              <div className='copyright-links'>
                <a href='/terms'>Terms of Use</a> / <a href='/privacy'>Privacy Policy</a>
              </div>
            </div>
            <div className='col_half col_last tright'>
              <div className='fright clearfix'>
                <a href='https://www.facebook.com/SoTecUK' target='_blank' className='social-icon si-small si-borderless si-facebook'>
                  <i className='icon-facebook' />
                  <i className='icon-facebook' />
                </a>
                <a href='https://twitter.com/SoTec_UK' target='_blank' className='social-icon si-small si-borderless si-twitter'>
                  <i className='icon-twitter' />
                  <i className='icon-twitter' />
                </a>
              </div>
              <div className='clear' />
              <i className='icon-envelope2' /> contact@sotec.io
              <span className='middot'>&middot;</span>
              <i className='icon-headphones' /> +44 7437 893 938
            </div>
          </div>
        </div>
        <div id='disclaimer' className='container clearfix'>
          <br />
          Ixaris Systems Ltd is authorised and regulated by the Financial Conduct Authority under the Payment Service Regulations 2009 for the provision of payment services. Registration number 540990. Registered address 10 Midford Place, London, W1T 5AE, United Kingdom.
          <br />
          <br />
          Ixaris Visa cards are issued by IDT Financial Services Ltd., pursuant to a licence from Visa Europe.
          <br />
          <br />
          Ixaris Mastercard cards are issued by IDT Financial Services Ltd., pursuant to licence by Mastercard International. Mastercard is a registered trademark of Mastercard International.
          <br />
          <br />
        </div>
      </footer>
    )
  }
}

export default Footer
