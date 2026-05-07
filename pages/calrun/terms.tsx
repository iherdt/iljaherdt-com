import LegalPage from '../../components/LegalPage'

export default function CalRunTerms() {
  return (
    <LegalPage
      appName="CalRun"
      title="Terms of Use"
      lastUpdated="March 9, 2026"
      sections={[
        { body: 'These Terms of Use govern your use of the CalRun iOS application (the "App").' },
        { heading: '1. License', body: 'Your use of the App is licensed, not sold. The license is provided under Apple\'s Standard End User License Agreement (EULA), unless a custom EULA is presented in the App Store listing.' },
        { heading: '2. Subscriptions', body: 'CalRun may offer auto-renewable subscriptions.\n\nBilling: Payment is charged to your Apple ID account at confirmation of purchase.\n\nAuto-renewal: Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period.\n\nManage and cancel: You can manage or cancel your subscription in iOS Settings > Apple ID > Subscriptions.\n\nPrice changes: If Apple approves a price change, you will be notified as required by Apple policies.' },
        { heading: '3. Acceptable Use', body: 'You agree not to misuse the App or attempt to interfere with the App\'s normal operation.' },
        { heading: '4. Privacy', body: 'Please review the CalRun Privacy Policy for details on how data is handled.' },
        { heading: '5. Disclaimer', body: 'The App is provided "as is" without warranties of any kind to the extent permitted by law.' },
        { heading: '6. Contact', body: 'If you have questions about these Terms, contact: i.herdt@gmail.com' },
      ]}
    />
  )
}
