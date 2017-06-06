import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import Map from '../components/Map'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactInfo from '../components/ContactInfo'
import SubjectBox from '../components/SubjectBox'
import { Link } from 'react-router-dom'
import { getOrganizations } from '../actions'

function mapStateToProps(state) {
  const { organizations } = state
  return {
    organizations
  }
}

const enhance = compose(
  connect(mapStateToProps),
)

class Home extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getOrganizations())
  }

  render () {

    const styleHeight = {height: 'inherit'}
    const styleText = {textAlign: 'justify', padding: '0 50px'}
    const styleButtonBottom= {marginBottom: '40px'}

    const { organizations } = this.props

    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <Header />
          <div className="android-content mdl-layout__content">
            <div className="android-be-together-section mdl-typography--text-center" style={styleHeight}>
              <div className="logo-font android-slogan">be together. not the same.</div>
              <div className="logo-font android-sub-slogan">welcome to socialbank... be yourself. do your thing. see whats going on.</div>
              <div className="logo-font android-create-character">
                <Link style={styleButtonBottom} className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" to={'/registration'}>
                    Create your bank account
                </Link>
              </div>
            </div>
            <div className="android-more-section">
              <div className="android-section-title mdl-typography--display-1-color-contrast">More from SocialBank</div>
              <div className="android-card-container mdl-grid">
                <SubjectBox
                  title="Building Trust"
                  description="SocialBank gives donors complete transparency and information regarding finance distribution in charitable and community projects."
                  image="more-from-1.png" />
                <SubjectBox
                  title="Activating communities"
                  description="Helping local leaders to engage volunteers and fund projects."
                  image="more-from-4.png" />
                <SubjectBox
                  title="Financial Control"
                  description="Simple system supporting processing financial activities in organisations of any size."
                  image="more-from-2.png" />
                <SubjectBox
                  title="Fundraising Support"
                  description="Platform for social and charitable organisations to support their fundraising activities."
                  image="more-from-3.png" />
              </div>
            </div>
            <div className="sb-map-section">
                <Map organizations={organizations} />
            </div>
            <div className="android-customized-section">
              <div className="android-customized-section-text">
                <div className="mdl-typography--font-light mdl-typography--display-1-color-contrast">Customised by you, for you</div>
                <p className="mdl-typography--font-light">
                  Put the stuff that you care about right on your home screen: the latest news, the weather or a stream of your recent photos.
                  <br/>
                  <a href="" className="android-link mdl-typography--font-light">Customise your phone</a>
                </p>
              </div>
              <div className="android-customized-section-image"></div>
            </div>
            <ContactInfo styleText={styleText}/>
            <Footer />
          </div>
      </div>)
  }
}

export default enhance(Home)
