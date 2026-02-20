/**
 * Phishing Awareness Game - Scenario Data
 * 10 pre-written email/SMS scenarios for the "Phish or Legit?" game.
 * All institutions and names are fictional.
 */

const scenarios = [
  {
    id: 1,
    type: "email",
    sender: "security@firstnationalvault-alerts.com",
    subject: "URGENT: Your account has been compromised! Verify now",
    message:
      "Dear Valued Customer,\n\nWe have detected unusual login activity on your First National Vault account. Your account has been temporarily suspended.\n\nYou MUST verify your information within 24 HOURS or your account will be permanently closed.\n\nClick here to verify your account immediately:\nhttp://firstnationalvault-secure-login.xyz/verify\n\nDo NOT ignore this message.",
    correctAnswer: "phishing",
    explanation:
      "This is a classic phishing email. It uses fear and urgency to pressure you into clicking a suspicious link. Legitimate banks never threaten to permanently close accounts via email and never use third-party domains for login pages.",
    redFlags: [
      "Suspicious sender domain (firstnationalvault-alerts.com — not an official bank domain)",
      "Extreme urgency and threats ('URGENT', '24 HOURS', 'permanently closed')",
      "Link goes to a completely different domain (.xyz is a red flag)",
      "Generic greeting ('Dear Valued Customer') instead of your name",
      "Pressure tactics to act immediately without thinking",
    ],
  },
  {
    id: 2,
    type: "email",
    sender: "receipts@shopwave.com",
    subject: "Your order #SW-847291 has shipped!",
    message:
      "Hi Jordan,\n\nGreat news! Your order #SW-847291 has shipped and is on its way.\n\nOrder Summary:\n- Wireless Headphones (x1) — $89.99\n- Shipping: Free\n- Total: $89.99\n\nEstimated delivery: Feb 24–26\nTracking number: 1Z847291TRACK\n\nYou can track your package through your ShopWave account at shopwave.com.\n\nThank you for shopping with us!\nThe ShopWave Team",
    correctAnswer: "legit",
    explanation:
      "This appears to be a legitimate order confirmation email. It uses your name, includes a specific order number and itemized receipt, and directs you to the company's main website (not a third-party link) for tracking.",
    redFlags: [],
  },
  {
    id: 3,
    type: "sms",
    sender: "+1 (888) 555-0198",
    subject: "SMS Message",
    message:
      "FedXpress: Your package could not be delivered. A $2.99 redelivery fee is required. Pay now to avoid return: http://fedxpress-redeliver.net/pay?id=48291\n\nReply STOP to opt out.",
    correctAnswer: "phishing",
    explanation:
      "This is a smishing (SMS phishing) attack. Legitimate shipping carriers do not charge redelivery fees via text message or send payment links to random numbers. The domain 'fedxpress-redeliver.net' is not an official carrier website.",
    redFlags: [
      "Unofficial sender number (not a recognizable short code from a real carrier)",
      "Unsolicited message about a package you may not be expecting",
      "Suspicious domain (fedxpress-redeliver.net — not a real carrier domain)",
      "Small fee designed to seem minor and get your card details",
      "'Reply STOP to opt out' adds false legitimacy to the scam",
    ],
  },
  {
    id: 4,
    type: "email",
    sender: "noreply@workplace-hr.internal",
    subject: "Mandatory Security Training — Complete by Friday",
    message:
      "Hi Team,\n\nAs part of our annual compliance program, all employees are required to complete the 15-minute security awareness training by this Friday, February 21st.\n\nPlease log in to the HR portal at hr.ourcompany.com with your usual credentials and navigate to Training > 2026 Compliance.\n\nIf you have any questions, contact the IT helpdesk at helpdesk@ourcompany.com.\n\nThank you,\nPeople & Culture Team",
    correctAnswer: "suspicious",
    explanation:
      "This email has mixed signals. The content sounds like a normal HR communication, but the sender domain 'workplace-hr.internal' is unusual — internal domains typically use the company's own domain. You should verify with your IT helpdesk before clicking anything, as attackers often impersonate HR departments.",
    redFlags: [
      "Sender domain 'workplace-hr.internal' is unusual — legitimate internal emails come from your company's own domain",
      "No specific company name or branding in the email",
      "Urgency around a deadline (though mild)",
      "Always verify HR emails with your IT department if the sender looks unfamiliar",
    ],
  },
  {
    id: 5,
    type: "email",
    sender: "ceo.james.hartwell@globalcorp-partners.net",
    subject: "Quick request — urgent wire transfer needed",
    message:
      "Hi,\n\nI'm in an important meeting and can't talk right now. I need you to process a wire transfer of $24,500 to a new vendor immediately. This is time-sensitive and needs to be done before 3pm today.\n\nI'll explain everything later. Please don't discuss this with anyone — it's confidential.\n\nJames Hartwell\nCEO, GlobalCorp",
    correctAnswer: "phishing",
    explanation:
      "This is a Business Email Compromise (BEC) scam, also known as a 'CEO fraud' attack. Attackers impersonate executives to pressure employees into transferring money quickly. The secrecy request is a major red flag — legitimate business transactions are never kept secret from finance teams.",
    redFlags: [
      "CEO's email is from 'globalcorp-partners.net' — not the actual company domain",
      "'Don't discuss this with anyone' — secrecy is a major manipulation tactic",
      "Extreme urgency with a hard deadline",
      "Large financial request made via email with no phone verification",
      "Vague explanation ('I'll explain later') — legitimate transfers have proper documentation",
    ],
  },
  {
    id: 6,
    type: "email",
    sender: "noreply@netflix-billing.com",
    subject: "Your StreamFlix membership has been suspended",
    message:
      "Dear Member,\n\nWe were unable to process your payment for StreamFlix Premium.\n\nYour account has been suspended. To restore access, please update your billing information within 48 hours:\n\n[ Update Payment Info ]\nstreamflix-billing-update.com/account\n\nIf you do not update your information, your account will be cancelled and your watchlist will be lost.\n\n— The StreamFlix Team",
    correctAnswer: "phishing",
    explanation:
      "This phishing email impersonates a streaming service to steal your payment information. The sender domain doesn't match the service name, and the link goes to a suspicious third-party site. Streaming services always let you update billing directly from within the app or their official website.",
    redFlags: [
      "Sender domain 'netflix-billing.com' doesn't match the service name 'StreamFlix'",
      "Link goes to 'streamflix-billing-update.com' — not the official site",
      "Threat of losing your watchlist creates emotional pressure",
      "Generic greeting ('Dear Member') instead of your name",
      "48-hour deadline creates artificial urgency",
    ],
  },
  {
    id: 7,
    type: "email",
    sender: "security@cloudvault-storage.io",
    subject: "Verify your CloudVault email address",
    message:
      "Hi Alex,\n\nThanks for signing up for CloudVault! Please verify your email address to activate your account.\n\n[ Verify Email Address ]\nhttps://cloudvault-storage.io/verify?token=cv_8f3k2p9q\n\nThis link expires in 24 hours. If you didn't create an account, you can safely ignore this email.\n\nWelcome aboard,\nThe CloudVault Team",
    correctAnswer: "legit",
    explanation:
      "This is a standard email verification message from a service you recently signed up for. The link goes directly to the company's own domain, it uses your name, provides a safe way to ignore it if you didn't sign up, and doesn't ask for passwords or personal information.",
    redFlags: [],
  },
  {
    id: 8,
    type: "sms",
    sender: "MyBankUS",
    subject: "SMS Message",
    message:
      "MyBankUS Alert: A sign-in was attempted from a new device in Austin, TX on Feb 20 at 2:14 PM. If this was you, no action needed. If NOT you, secure your account: mybank.us/secure\n\nText HELP for assistance.",
    correctAnswer: "suspicious",
    explanation:
      "This message has some legitimate characteristics (named sender, no urgent link-clicking demand) but deserves caution. Rather than clicking the link in the SMS, open your banking app directly or call the number on the back of your card to verify. Banks do send real security alerts, but scammers mimic them too.",
    redFlags: [
      "Even though the sender name looks official, SMS sender names can be spoofed",
      "The link 'mybank.us/secure' should be verified — go to your bank's app instead",
      "Always verify security alerts by going directly to the official app or website",
      "If you weren't in Austin, call your bank using the number on your card — not from this SMS",
    ],
  },
  {
    id: 9,
    type: "email",
    sender: "no-reply@linkedpro-notifications.com",
    subject: "You have a new message from Sarah K.",
    message:
      "Hi there,\n\nSarah K. sent you a message on LinkedPro:\n\n'Hi! I came across your profile and think you'd be a great fit for an exciting remote opportunity. Click here to view full details and apply: http://bit.ly/3xRemoteJob2026'\n\nLog in to your LinkedPro account to reply.\n\nThe LinkedPro Team\nlinkedpro-notifications.com",
    correctAnswer: "phishing",
    explanation:
      "This phishing email mimics a professional networking platform notification. The message contains a shortened URL (bit.ly link) which hides the true destination. Legitimate job opportunities on real platforms are always accessed through the platform itself, not via shortened external links.",
    redFlags: [
      "Sender domain 'linkedpro-notifications.com' is not a real professional network",
      "Message contains a bit.ly shortened link — the real destination is hidden",
      "Unsolicited 'exciting job opportunity' is a classic social engineering hook",
      "Vague message with no company name, job title, or real details",
      "Legitimate professional networks never embed third-party links in notification emails",
    ],
  },
  {
    id: 10,
    type: "email",
    sender: "support@dropboxmail.com",
    subject: "Password reset request",
    message:
      "Hi,\n\nWe received a request to reset the password for the DropBox account associated with this email address.\n\nIf you requested this, click the button below:\n\n[ Reset My Password ]\nhttps://dropboxmail.com/reset?token=a7f2e1\n\nThis link will expire in 1 hour.\n\nIf you did not request a password reset, please ignore this email. Your password will not be changed.\n\nThe DropBox Team",
    correctAnswer: "suspicious",
    explanation:
      "This email looks like a password reset but has a suspicious sender domain. The real Dropbox sends emails from @dropbox.com, not @dropboxmail.com. If you did request a reset, go directly to the official website instead. If you didn't, ignore it — but the domain mismatch means you should verify carefully.",
    redFlags: [
      "Sender domain is 'dropboxmail.com' — the real service uses 'dropbox.com'",
      "Subtle domain variation is a typosquatting technique",
      "If you didn't request a reset, someone may be probing your account",
      "Always go directly to the official website to reset passwords rather than clicking email links",
    ],
  },
];

export default scenarios;
