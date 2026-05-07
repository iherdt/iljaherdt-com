import LegalPage from '../../components/LegalPage'

export default function FocusRepPrivacy() {
  return (
    <LegalPage
      appName="FocusRep"
      title="Privacy Policy"
      lastUpdated="February 24, 2026"
      sections={[
        { heading: 'Overview', body: 'FocusRep is a focus timer app. Your privacy is important to us.' },
        { heading: 'Data Collection', body: 'FocusRep does not collect, store, or transmit any personal data. All app data (timer settings, session counts, streak data) is stored locally on your device using standard iOS storage.' },
        { heading: 'No Accounts', body: 'FocusRep does not require an account, login, or registration.' },
        { heading: 'No Analytics', body: 'FocusRep does not use any third-party analytics, tracking, or advertising SDKs.' },
        { heading: 'No Network Requests', body: 'FocusRep does not make any network requests except for Apple\'s StoreKit framework to process in-app purchases. These transactions are handled entirely by Apple.' },
        { heading: 'In-App Purchases', body: 'FocusRep offers optional auto-renewable subscriptions processed through Apple\'s App Store. Payment information is handled by Apple and is not accessible to us. See Apple\'s privacy policy for details.' },
        { heading: 'Children\'s Privacy', body: 'FocusRep is not directed at children under 13 and does not knowingly collect information from children.' },
        { heading: 'Changes', body: 'We may update this privacy policy from time to time. Changes will be posted to this page.' },
        { heading: 'Contact', body: 'If you have questions about this privacy policy, contact us at i.herdt@gmail.com.' },
      ]}
    />
  )
}
