import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, GridContent, GridMedia } from '../components/Grid';
import Section from '../components/Section';
import { Iconbox, IconboxRow } from '../components/Iconbox';
import { HeroPng, HeroWebp, Computer, Laptop, Travel, CreateCompany, IdCardReader
, UploadExpenses} from '../images/www/home/';

function Home() {

  return (
    <main className='main'>
        <Section header='true' color='blue'>
            <Grid className='media-start-8'>
                <GridContent>
                    <h1 className='small text-red'>We help you get your solo business up and running</h1>
                </GridContent>
                <GridMedia img={HeroWebp} />
            </Grid>
        </Section>

        <Section>
            <Grid className='content-span-wrapper-end'>
                <GridContent>
                    <IconboxRow>
                        <Iconbox
                            icon='business-red'
                            title='Business set-up'
                            text='Company-less invoicing solution or a fully fledged company with e-Residency'
                        />
                        <Iconbox
                            icon='tools-red'
                            title='Essential tools'
                            text='Invoicing, banking, expense reimbursement and more in one place'
                        />
                        <Iconbox
                            icon='world'
                            title='Work remotely'
                            text='Stellar support and automated accounting loved by experts in 119 countries'
                        />
                    </IconboxRow>
                </GridContent>
            </Grid>

            <Grid className='content-span-wrapper-end'>
                <GridContent>
                    <h2 className='mb-md-6'>Who is Xolo for?</h2>
                    <div className='row'>
                        <div className='column mb-md-0 mb-4'>
                            <img src={Computer} alt='Computer' width='188' height='170' loading='lazy' />
                            <h3 className='text-line-height-medium medium mt-2 mb-2'>
                                Internation <br/> freelancers
                            </h3>
                            <p className='text-size-small mb-3'>
                                Easily work with customers all over the world by starting an international business.
                            </p>
                            <div>
                                <Link to='/how-it-works'
                                      className='link-more -red -small'
                                      aria-label='Read more about how it works.'
                                      target='_blank'>
                                    Learn more
                                </Link>
                            </div>
                        </div>
                        <div className='column mb-md-0 mb-4'>
                            <img src={Travel} alt='Travel documennts' width='188' height='170' loading='lazy' />
                            <h3 className='text-line-height-medium medium mt-2 mb-2'>
                                Digital nomads and expats
                            </h3>
                            <p className='text-size-small mb-3'>
                                Start and manage a location independent business from anywhere in the world.
                            </p>
                           <div>
                               <Link to='/how-it-works'
                                     className='link-more -red -small'
                                     aria-label='Read more about how it works.'
                                     target='_blank'>
                                   Learn more
                               </Link>
                           </div>
                        </div>
                        <div className='column mb-md-0 mb-4'>
                            <img src={Laptop} alt='Laptop' width='188' height='170' loading='lazy' />
                            <h3 className='text-line-height-medium medium mt-2 mb-2'>
                                Companies working with freelancers
                            </h3>
                            <p className='text-size-small mb-3'>
                                As a company, manage your freelance workforce payments effortlessly.
                            </p>
                            <div>
                                <Link to='/pay-freelancers-with-xolo'
                                      className='link-more -red -small'
                                      aria-label='Read more about how to pay freelancers with Xolo.'
                                      target='_blank'>
                                    Learn more
                                </Link>
                            </div>
                        </div>
                    </div>
                </GridContent>
            </Grid>

            <Grid>
                <GridContent>
                    <h2>Get your business set up by us</h2>
                    <ul className="list-check">
                        <li>We’ll take care of getting your one-person business up and running. You’ll have an option to start your own Estonian limited liability company (OÜ) or you can send invoices in partnership with us without founding a company.</li>
                        <li>You don’t need to get acquainted with all the paperwork and legal jargon. Use your time to create value for your customers instead of standing in queues in public offices or visiting notaries.</li>
                    </ul>
                </GridContent>
                <GridMedia img={CreateCompany} alt='Create a company'/>
            </Grid>

            <Grid align='left'>
                <GridContent>
                    <h2>Work wherever you want</h2>
                    <ul className="list-check">
                        <li>Access your business anywhere in the world. You can also get things done on your mobile phone.</li>
                        <li>Create invoices, upload expense documents, see account balance and so much more - all in one place.</li>
                        <li>No need to be physically present at any time - everything is done online.</li>
                    </ul>
                </GridContent>
                <GridMedia img={UploadExpenses} alt='Upload expenses'/>
            </Grid>
        </Section>
    </main>
  );
}

export default Home;