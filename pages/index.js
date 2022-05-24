import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="https://security-platform-2022-demo--preprod.my.salesforce.com/prefcenter/preference-center-0.0.3/css/pref-center-slds.css" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Enter your preferences!
        </p>
    
   
      </main>

      <div id="pref-center-main"></div>
<script id="preference-center" src="https://security-platform-2022-demo--preprod.my.salesforce.com/prefcenter/preference-center-0.0.3/js/main.js" 
  pref-center-host="https://security-platform-2022-demo--preprod.my.salesforce.com"
  pref-center-name="Person_Account_Consent"
  pref-center-param="pctoken"></script>

      <Footer />
    </div>
  )
}
