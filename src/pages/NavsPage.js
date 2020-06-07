import React, { Component } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBNav,
  MDBNavItem,
  Link
} from 'mdbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

class NavsPage extends Component {
  render() {
    return (
      <MDBContainer>
        <DocsLink
          title='Navs'
          href='https://mdbootstrap.com/docs/react/navigation/navs/'
        />

        <SectionContainer title='Basic examples' noBorder>
          <SectionContainer header='Left'>
            <MDBNav>
              <MDBNavItem>
                <Link active to='#!'>
                  Active
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link to='#!'>Link</Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link to='#!'>Link</Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link disabled to='#!'>
                  Disabled
                </Link>
              </MDBNavItem>
            </MDBNav>
          </SectionContainer>

          <SectionContainer header='Center'>
            <MDBNav className='justify-content-center'>
              <MDBNavItem>
                <Link active to='#!'>
                  Active
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link to='#!'>Link</Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link to='#!'>Link</Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link disabled to='#!'>
                  Disabled
                </Link>
              </MDBNavItem>
            </MDBNav>
          </SectionContainer>

          <SectionContainer header='Right'>
            <MDBNav className='justify-content-end'>
              <MDBNavItem>
                <Link active to='#!'>
                  Active
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link to='#!'>Link</Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link to='#!'>Link</Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link disabled to='#!'>
                  Disabled
                </Link>
              </MDBNavItem>
            </MDBNav>
          </SectionContainer>

          <SectionContainer header='Vertical'>
            <MDBNav className='flex-column'>
              <MDBNavItem>
                <Link active to='#!'>
                  Active
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link to='#!'>Link</Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link to='#!'>Link</Link>
              </MDBNavItem>
              <MDBNavItem>
                <Link disabled to='#!'>
                  Disabled
                </Link>
              </MDBNavItem>
            </MDBNav>
          </SectionContainer>
        </SectionContainer>

        <hr className='my-5' />

        <SectionContainer header='With bold font' noBorder>
          <MDBRow>
            <MDBCol md='6'>
              <SectionContainer>
                <MDBNav className='font-weight-bold'>
                  <Link active to='#!'>
                    Active
                  </Link>
                  <Link to='#!'>Link</Link>
                  <Link to='#!'>Link</Link>
                  <Link disabled to='#!'>
                    Disabled
                  </Link>
                </MDBNav>
              </SectionContainer>
            </MDBCol>
            <MDBCol md='6'>
              <SectionContainer>
                <MDBNav className='flex-column font-weight-bold'>
                  <Link active to='#!'>
                    Active
                  </Link>
                  <Link to='#!'>Link</Link>
                  <Link to='#!'>Link</Link>
                  <Link disabled to='#!'>
                    Disabled
                  </Link>
                </MDBNav>
              </SectionContainer>
            </MDBCol>
          </MDBRow>
        </SectionContainer>

        <SectionContainer header='With various font and background color'>
          <MDBRow>
            <MDBCol>
              <MDBNav color='grey' className='flex-column font-weight-bold'>
                <Link className='white-text' active to='#!'>
                  Active
                </Link>
                <Link className='white-text' to='#!'>
                  Link 1
                </Link>
                <Link className='white-text' to='#!'>
                  Link 2
                </Link>
                <Link className='white-text' to='#!'>
                  Link 3
                </Link>
              </MDBNav>
            </MDBCol>

            <MDBCol>
              <MDBNav color='amber' className='flex-column font-weight-bold'>
                <Link active to='#!' className='dark-grey-text'>
                  Active
                </Link>
                <Link to='#!' className='dark-grey-text'>
                  Link 1
                </Link>
                <Link to='#!' className='dark-grey-text'>
                  Link 2
                </Link>
                <Link to='#!' className='dark-grey-text'>
                  Link 3
                </Link>
              </MDBNav>
            </MDBCol>

            <MDBCol>
              <MDBNav color='cyan' className='flex-column font-weight-bold'>
                <Link active to='#!' className='indigo-text'>
                  Active
                </Link>
                <Link to='#!'>Link 1</Link>
                <Link to='#!'>Link 2</Link>
                <Link to='#!'>Link 3</Link>
              </MDBNav>
            </MDBCol>
          </MDBRow>
        </SectionContainer>

        <SectionContainer header='With gradient background'>
          <MDBRow>
            <MDBCol md='6'>
              <MDBNav
                color='peach-gradient'
                className='font-weight-bold py-4 px-2 mb-4'
              >
                <Link className='white-text' active to='#!'>
                  Active
                </Link>
                <Link className='white-text' to='#!'>
                  Link 1
                </Link>
                <Link className='white-text' to='#!'>
                  Link 2
                </Link>
                <Link className='white-text' to='#!'>
                  Link 3
                </Link>
              </MDBNav>
            </MDBCol>
            <MDBCol md='6'>
              <MDBNav
                color='purple-gradient'
                className='font-weight-bold py-4 px-2 mb-4'
              >
                <Link className='white-text' active to='#!'>
                  Active
                </Link>
                <Link className='white-text' to='#!'>
                  Link 1
                </Link>
                <Link className='white-text' to='#!'>
                  Link 2
                </Link>
                <Link className='white-text' to='#!'>
                  Link 3
                </Link>
              </MDBNav>
            </MDBCol>
            <MDBCol md='6'>
              <MDBNav
                color='aqua-gradient'
                className='font-weight-bold py-4 px-2 mb-4'
              >
                <Link className='white-text' active to='#!'>
                  Active
                </Link>
                <Link className='white-text' to='#!'>
                  Link 1
                </Link>
                <Link className='white-text' to='#!'>
                  Link 2
                </Link>
                <Link className='white-text' to='#!'>
                  Link 3
                </Link>
              </MDBNav>
            </MDBCol>
            <MDBCol md='6'>
              <MDBNav
                color='blue-gradient'
                className='font-weight-bold py-4 px-2 mb-4'
              >
                <Link className='white-text' active to='#!'>
                  Active
                </Link>
                <Link className='white-text' to='#!'>
                  Link 1
                </Link>
                <Link className='white-text' to='#!'>
                  Link 2
                </Link>
                <Link className='white-text' to='#!'>
                  Link 3
                </Link>
              </MDBNav>
            </MDBCol>
          </MDBRow>
        </SectionContainer>

        <SectionContainer title='Wtih tabs & pills' noBorder>
          <MDBRow>
            <MDBCol md='6'>
              <SectionContainer header='Tabs'>
                <MDBNav className='nav-tabs'>
                  <MDBNavItem>
                    <Link active to='#!'>
                      Active
                    </Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Link to='#!'>Link 1</Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Link to='#!'>Link 2</Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Link to='#!'>Link 3</Link>
                  </MDBNavItem>
                </MDBNav>
              </SectionContainer>
            </MDBCol>
            <MDBCol md='6'>
              <SectionContainer header='Pills'>
                <MDBNav className='nav-pills'>
                  <MDBNavItem>
                    <Link active to='#!'>
                      Active
                    </Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Link to='#!'>Link 1</Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Link to='#!'>Link 2</Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Link to='#!'>Link 3</Link>
                  </MDBNavItem>
                </MDBNav>
              </SectionContainer>
            </MDBCol>
          </MDBRow>
          <SectionContainer header='Fill & justify'>
            <MDBContainer className='mt-4'>
              <MDBNav className='nav-pills nav-fill'>
                <MDBNavItem>
                  <Link active to='#!'>
                    Active
                  </Link>
                </MDBNavItem>
                <MDBNavItem>
                  <Link to='#!'>Longer nav link</Link>
                </MDBNavItem>
                <MDBNavItem>
                  <Link to='#!'>Link</Link>
                </MDBNavItem>
                <MDBNavItem>
                  <Link disabled to='#!'>
                    Disabled
                  </Link>
                </MDBNavItem>
              </MDBNav>
            </MDBContainer>
            <MDBContainer className='mt-4'>
              <MDBNav className='nav-tabs nav-fill'>
                <MDBNavItem>
                  <Link active to='#!'>
                    Active
                  </Link>
                </MDBNavItem>
                <MDBNavItem>
                  <Link to='#!'>Longer nav link</Link>
                </MDBNavItem>
                <MDBNavItem>
                  <Link to='#!'>Link</Link>
                </MDBNavItem>
                <MDBNavItem>
                  <Link disabled to='#!'>
                    Disabled
                  </Link>
                </MDBNavItem>
              </MDBNav>
            </MDBContainer>

            <MDBContainer className='mt-4'>
              <MDBNav className='nav-pills nav-justified'>
                <MDBNavItem>
                  <Link active to='#!'>
                    Active
                  </Link>
                </MDBNavItem>
                <MDBNavItem>
                  <Link to='#!'>Longer nav link</Link>
                </MDBNavItem>
                <MDBNavItem>
                  <Link to='#!'>Link</Link>
                </MDBNavItem>
                <MDBNavItem>
                  <Link disabled to='#!'>
                    Disabled
                  </Link>
                </MDBNavItem>
              </MDBNav>
            </MDBContainer>

            <MDBContainer className='mt-4'>
              <MDBNav className='nav-tabs nav-justified'>
                <MDBNavItem>
                  <Link active to='#!'>
                    Active
                  </Link>
                </MDBNavItem>
                <MDBNavItem>
                  <Link to='#!'>Longer nav link</Link>
                </MDBNavItem>
                <MDBNavItem>
                  <Link to='#!'>Link</Link>
                </MDBNavItem>
                <MDBNavItem>
                  <Link disabled to='#!'>
                    Disabled
                  </Link>
                </MDBNavItem>
              </MDBNav>
            </MDBContainer>
          </SectionContainer>
        </SectionContainer>
      </MDBContainer>
    );
  }
}

export default NavsPage;
