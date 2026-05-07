import LegalPage from '../../components/LegalPage'

export default function CalRunPrivacy() {
  return (
    <LegalPage
      appName="CalRun"
      title="Privacy Policy"
      lastUpdated="March 9, 2026"
      sections={[
        { heading: 'Overview', body: 'CalRun is a Caltrain schedule app. Your privacy is important to us.' },
        { heading: 'Data Collection', body: 'CalRun does not collect, store, or transmit personal data to a server. Preferences (selected stations and filters) are stored locally on your device.' },
        { heading: 'No Accounts', body: 'CalRun does not require an account, login, or registration.' },
        { heading: 'No Third-Party Analytics', body: 'CalRun does not use third-party analytics, tracking, or advertising SDKs.' },
        { heading: 'Network Requests', body: 'CalRun may make network requests to retrieve transit schedule information (for example, real-time departures). Requests are used only to fetch schedule data and are not used for advertising or tracking.' },
        { heading: 'In-App Purchases', body: 'CalRun may offer optional auto-renewable subscriptions processed through Apple\'s App Store. Payment information is handled by Apple and is not accessible to us. See Apple\'s privacy policy for details.' },
        { heading: 'Changes', body: 'We may update this privacy policy from time to time. Changes will be posted to this page.' },
        { heading: 'Contact', body: 'If you have questions about this privacy policy, contact us at i.herdt@gmail.com.' },
      ]}
    />
  )
}
