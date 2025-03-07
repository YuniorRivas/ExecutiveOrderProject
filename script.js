// Sample data array for the cards
  const cardData = [
  {
    "actionName": "Increase Tariffs on Chinese Goods Over Synthetic Opioids",
    "executiveOrder": "Executive Order 14228",
    "dateIssued": "March 3, 2025",
    "verdict": "Yes, he can.",
    "explanation": "Explanation: The President can impose and adjust tariffs under IEEPA and trade laws to counter illicit drug trade threats.",
    "constitutionalIssues": "Legal Issues: Commerce Clause, Executive Authority in Trade",
    "link": "https://www.federalregister.gov/executive-order/14228"
  },
  {
    "actionName": "Modify Tariffs on Southern Border Imports",
    "executiveOrder": "Executive Order 14227",
    "dateIssued": "March 2, 2025",
    "verdict": "Yes, he can.",
    "explanation": "Explanation: The President can adjust trade tariffs to address border security concerns under existing emergency and trade statutes.",
    "constitutionalIssues": "Legal Issues: Commerce Clause, Executive Authority in Trade",
    "link": "https://www.federalregister.gov/executive-order/14227"
  },
  {
    "actionName": "Amend Tariffs on Northern Border Drug Trade",
    "executiveOrder": "Executive Order 14226",
    "dateIssued": "March 2, 2025",
    "verdict": "Yes, he can.",
    "explanation": "Explanation: The President can modify tariffs under trade and national security laws to address illicit drug flows.",
    "constitutionalIssues": "Legal Issues: Commerce Clause, Executive Authority in Trade",
    "link": "https://www.federalregister.gov/executive-order/14226"
  },
  {
    "actionName": "Expand American Timber Production",
    "executiveOrder": "Executive Order 14225",
    "dateIssued": "March 1, 2025",
    "verdict": "Maybe, he can.",
    "explanation": "Explanation: The President can direct federal agencies to promote timber production but cannot override environmental regulations without legislative action.",
    "constitutionalIssues": "Legal Issues: Property Clause, Environmental Law Compliance",
    "link": "https://www.federalregister.gov/executive-order/14225"
  },
  {
    "actionName": "Designate English as the Official U.S. Language",
    "executiveOrder": "Executive Order 14224",
    "dateIssued": "March 1, 2025",
    "verdict": "No, he can't.",
    "explanation": "Explanation: Establishing an official language requires congressional action, and courts have upheld multilingual government services under civil rights laws.",
    "constitutionalIssues": "Legal Issues: Free Speech (First Amendment), Equal Protection (14th Amendment)",
    "link": "https://www.federalregister.gov/executive-order/14224"
  },
  {
    "actionName": "Investigate National Security Risks of Timber Imports",
    "executiveOrder": "Executive Order 14223",
    "dateIssued": "March 1, 2025",
    "verdict": "Yes, he can.",
    "explanation": "Explanation: The President can direct trade investigations and impose tariffs if timber imports pose a security risk.",
    "constitutionalIssues": "Legal Issues: Commerce Clause, Executive Authority in Trade",
    "link": "https://www.federalregister.gov/executive-order/14223"
  },
  {
    "actionName": "Implement Government Spending Efficiency Reforms",
    "executiveOrder": "Executive Order 14222",
    "dateIssued": "February 26, 2025",
    "verdict": "Maybe, he can.",
    "explanation": "Explanation: The President can direct federal agencies to improve efficiency but cannot unilaterally change congressionally approved spending.",
    "constitutionalIssues": "Legal Issues: Spending Clause, Separation of Powers",
    "link": "https://www.federalregister.gov/executive-order/14222"
  },
  {
    "actionName": "Mandate Healthcare Price Transparency",
    "executiveOrder": "Executive Order 14221",
    "dateIssued": "February 25, 2025",
    "verdict": "Yes, he can.",
    "explanation": "Explanation: The President can enforce existing transparency rules and direct agencies to strengthen compliance but cannot set private healthcare prices.",
    "constitutionalIssues": "Legal Issues: Executive Authority, Commerce Clause",
    "link": "https://www.federalregister.gov/executive-order/14221"
  },
  {
    "actionName": "Investigate National Security Risks of Copper Imports",
    "executiveOrder": "Executive Order 14220",
    "dateIssued": "February 25, 2025",
    "verdict": "Yes, he can.",
    "explanation": "Explanation: The President can order trade investigations and impose tariffs if imports threaten national security.",
    "constitutionalIssues": "Legal Issues: Executive Authority in Trade, Commerce Clause",
    "link": "https://www.federalregister.gov/executive-order/14220"
  },
  {
    "actionName": "Reduce Federal Regulations and Bureaucracy",
    "executiveOrder": "Executive Order 14219",
    "dateIssued": "February 19, 2025",
    "verdict": "Maybe, he can.",
    "explanation": "Explanation: The President can direct agencies to review regulations but cannot repeal laws without congressional approval.",
    "constitutionalIssues": "Legal Issues: Separation of Powers, Administrative Law",
    "link": "https://www.federalregister.gov/executive-order/14219"
  },
  {
    "actionName": "End Federal Benefits for Undocumented Immigrants",
    "executiveOrder": "Executive Order 14218",
    "dateIssued": "February 19, 2025",
    "verdict": "Maybe, he can.",
    "explanation": "Explanation: The President can enforce eligibility rules but cannot unilaterally alter congressionally mandated programs.",
    "constitutionalIssues": "Legal Issues: Spending Clause, Equal Protection (14th Amendment)",
    "link": "https://www.federalregister.gov/executive-order/14218"
  },
  {
    "actionName": "Eliminate Select Government Programs and Advisory Committees",
    "executiveOrder": "Executive Order 14217",
    "dateIssued": "February 19, 2025",
    "verdict": "Maybe, he can.",
    "explanation": "Explanation: The President can dissolve non-statutory programs but cannot eliminate congressionally created entities without legislative approval.",
    "constitutionalIssues": "Legal Issues: Separation of Powers, Congressional Oversight",
    "link": "https://www.federalregister.gov/executive-order/14217"
  },
  {
    "actionName": "Expand Access to In Vitro Fertilization",
    "executiveOrder": "Executive Order 14216",
    "dateIssued": "February 18, 2025",
    "verdict": "Maybe, he can.",
    "explanation": "Explanation: The President can direct federal agencies to study IVF affordability, but funding expansions require congressional approval.",
    "constitutionalIssues": "Legal Issues: Spending Clause, Executive Authority",
    "link": "https://www.federalregister.gov/executive-order/14216"
  },
  {
    "actionName": "Increase Presidential Oversight of Regulatory Agencies",
    "executiveOrder": "Executive Order 14215",
    "dateIssued": "February 18, 2025",
    "verdict": "Maybe, he can.",
    "explanation": "Explanation: The President can oversee executive agencies but may face legal challenges in controlling independent regulatory bodies.",
    "constitutionalIssues": "Legal Issues: Separation of Powers, Administrative Law",
    "link": "https://www.federalregister.gov/executive-order/14215"
  },
  {
    "actionName": "Ban COVID-19 Vaccine Mandates in Schools Using Federal Funds",
    "executiveOrder": "Executive Order 14214",
    "dateIssued": "February 14, 2025",
    "verdict": "No, he can't.",
    "explanation": "Explanation: The President can attach conditions to federal funding but cannot directly ban mandates at state or local levels.",
    "constitutionalIssues": "Legal Issues: Spending Clause, States' Rights (10th Amendment )",
    "link": "https://www.federalregister.gov/executive-order/14214"
  },
  {
    "actionName": "Establish National Energy Dominance Council",
    "executiveOrder": "Executive Order 14213",
    "dateIssued": "February 14, 2025",
    "verdict": "Yes, he can.",
    "explanation": "Explanation: The President can create advisory councils to coordinate national energy policies within executive agencies.",
    "constitutionalIssues": "Legal Issues: Executive Authority, Commerce Clause",
    "link": "https://www.federalregister.gov/executive-order/14213"
  },
  {
    "actionName": "Create the President’s Make America Healthy Again Commission",
    "executiveOrder": "Executive Order 14212",
    "dateIssued": "February 13, 2025",
    "verdict": "Yes, he can.",
    "explanation": "Explanation: The President can establish commissions to research and advise on national health initiatives.",
    "constitutionalIssues": "Legal Issues: Executive Authority, Public Health Policy",
    "link": "https://www.federalregister.gov/executive-order/14212"
  },
  {
    "actionName": "Centralize Foreign Policy Under Presidential Authority",
    "executiveOrder": "Executive Order 14211",
    "dateIssued": "February 12, 2025",
    "verdict": "Yes, he can.",
    "explanation": "Explanation: The President has broad authority over foreign policy and can direct federal agencies to align with executive priorities.",
    "constitutionalIssues": "Legal Issues: Article II (Executive Authority in Foreign Policy), Separation of Powers",
    "link": "https://www.federalregister.gov/executive-order/14211"
  },
  {
    "actionName": "Implement Workforce Reduction in Federal Agencies",
    "executiveOrder": "Executive Order 14210",
    "dateIssued": "February 11, 2025",
    "verdict": "Maybe, he can.",
    "explanation": "Explanation: The President can impose hiring freezes and efficiency measures, but large-scale workforce reductions may require congressional approval.",
    "constitutionalIssues": "Legal Issues: Separation of Powers, Civil Service Protections",
    "link": "https://www.federalregister.gov/executive-order/14210"
  },
  {
    "actionName": "Pause Foreign Corrupt Practices Act Enforcement",
    "executiveOrder": "Executive Order 14209",
    "dateIssued": "February 10, 2025",
    "verdict": "Maybe, he can.",
    "explanation": "Explanation: The President can direct enforcement priorities, but permanently suspending the FCPA may require legislative action.",
    "constitutionalIssues": "Legal Issues: Executive Authority, Congressional Oversight of Anti-Corruption Laws",
    "link": "https://www.federalregister.gov/executive-order/14209"
  },
  {
    "actionName": "Ban Federal Procurement and Use of Paper Straws",
    "executiveOrder": "Executive Order 14208",
    "dateIssued": "February 10, 2025",
    "verdict": "Yes, he can.",
    "explanation": "Explanation: The President can regulate federal procurement policies but cannot ban paper straws nationwide without legislative action.",
    "constitutionalIssues": "Legal Issues: Executive Authority, Commerce Clause",
    "link": "https://www.federalregister.gov/executive-order/14208"
  },
  {
    "actionName": "Eliminate the Federal Executive Institute",
    "executiveOrder": "Executive Order 14207",
    "dateIssued": "February 10, 2025",
    "verdict": "Maybe, he can.",
    "explanation": "Explanation: The President can restructure or eliminate executive training programs but may need legislative approval for full dissolution.",
    "constitutionalIssues": "Legal Issues: Executive Authority, Congressional Oversight of Federal Agencies",
    "link": "https://www.federalregister.gov/executive-order/14207"
  },
  {
    "actionName": "Protect Second Amendment Rights",
    "executiveOrder": "Executive Order 14206",
    "dateIssued": "February 7, 2025",
    "verdict": "Maybe, he can.",
    "explanation": "Explanation: The President can direct a review of firearm regulations, but changes to existing laws require congressional approval.",
    "constitutionalIssues": "Legal Issues: Second Amendment, Separation of Powers",
    "link": "https://www.federalregister.gov/executive-order/14206"
  },
  {
    "actionName": "Establish the White House Faith Office",
    "executiveOrder": "Executive Order 14205",
    "dateIssued": "February 7, 2025",
    "verdict": "Yes, he can.",
    "explanation": "Explanation: The President has authority to establish advisory offices within the Executive Branch to engage with religious and community organizations.",
    "constitutionalIssues": "Legal Issues: Executive Authority, Establishment Clause (First Amendment)",
    "link": "https://www.federalregister.gov/executive-order/14205"
  },
  {
    "actionName": "Sanction South Africa Over Land Expropriation",
    "executiveOrder": "Executive Order 14204",
    "dateIssued": "February 7, 2025",
    "verdict": "Maybe, he can.",
    "explanation": "Explanation: The President can impose sanctions on foreign nations, but broad economic measures may require congressional support.",
    "constitutionalIssues": "Legal Issues: Executive Authority in Foreign Policy, Commerce Clause",
    "link": "https://www.federalregister.gov/executive-order/14204"
  },
  {
    "actionName": "Sanction the International Criminal Court",
    "executiveOrder": "Executive Order 14203",
    "dateIssued": "February 6, 2025",
    "verdict": "Yes, he can.",
    "explanation": "Explanation: The President can impose sanctions and travel restrictions under IEEPA to counter actions deemed against U.S. interests.",
    "constitutionalIssues": "Legal Issues: Executive Authority, Foreign Policy, Due Process (5th Amendment)",
    "link": "https://www.federalregister.gov/executive-order/14203"
  },
  {
    "actionName": "Create a Task Force to Address Anti-Christian Bias",
    "executiveOrder": "Executive Order 14202",
    "dateIssued": "February 6, 2025",
    "verdict": "Maybe, he can.",
    "explanation": "Explanation: The President can establish task forces to address religious discrimination but must uphold First Amendment neutrality.",
    "constitutionalIssues": "Legal Issues: Establishment Clause (First Amendment), Equal Protection (14th Amendment)",
    "link": "https://www.federalregister.gov/executive-order/14202"
  },
  {
    "actionName": "Ban Participation of People Assigned Male at Birth in Women's Sports",
    "executiveOrder": "Executive Order 14201",
    "dateIssued": "February 5, 2025",
    "verdict": "Maybe, he can.",
    "explanation": "Explanation: The President can direct federal agencies to enforce Title IX protections, but banning such participation in all women’s sports may face legal challenges.",
    "constitutionalIssues": "Legal Issues: Equal Protection (14th Amendment), Title IX, Separation of Powers",
    "link": "https://www.federalregister.gov/executive-order/14201"
  },
  {
    "actionName": "Modify Tariffs on China Over Synthetic Opioid Trade",
    "executiveOrder": "Executive Order 14200",
    "dateIssued": "February 5, 2025",
    "verdict": "Yes, he can.",
    "explanation": "Explanation: The President has broad authority to amend existing tariffs under IEEPA and trade laws.",
    "constitutionalIssues": "Legal Issues: Commerce Clause, Executive Authority in Foreign Trade",
    "link": "https://www.federalregister.gov/executive-order/14200"
  },
  {
    "actionName": "Withdraw U.S. from and Defund Certain UN Organizations",
    "executiveOrder": "Executive Order 14199",
    "dateIssued": "February 4, 2025",
    "verdict": "Maybe, he can.",
    "explanation": "Explanation: The President can withdraw from some UN bodies but may require congressional approval to end certain funding obligations.",
    "constitutionalIssues": "Legal Issues: Treaty Clause, Spending Clause, Executive Authority in Foreign Policy",
    "link": "https://www.federalregister.gov/executive-order/14199"
  },
  {
    "actionName": "Pause Tariffs on Mexico Over Border Security",
    "executiveOrder": "Executive Order 14198",
    "dateIssued": "February 3, 2025",
    "verdict": "Yes, he can.",
    "explanation": "Explanation: The President can delay the implementation of tariffs as a negotiating tactic under trade and national security laws.",
    "constitutionalIssues": "Legal Issues: Commerce Clause, Executive Authority in Trade Policy",
    "link": "https://www.federalregister.gov/executive-order/14198"
  },
  {
    "actionName": "Pause Tariffs on Canada Over Drug Trafficking",
    "executiveOrder": "Executive Order 14197",
    "dateIssued": "February 3, 2025",
    "verdict": "Yes, he can.",
    "explanation": "Explanation: The President can suspend tariffs under trade laws if it aligns with national security or diplomatic interests.",
    "constitutionalIssues": "Legal Issues: Commerce Clause, Executive Authority in Trade",
    "link": "https://www.federalregister.gov/executive-order/14197"
  },
  {
    "actionName": "Establish a U.S. Sovereign Wealth Fund",
    "executiveOrder": "Executive Order 14196",
    "dateIssued": "February 3, 2025",
    "verdict": "Maybe, he can.",
    "explanation": "Explanation: The President can direct agencies to study a sovereign wealth fund but requires congressional approval for funding and implementation.",
    "constitutionalIssues": "Legal Issues: Spending Clause, Congressional Appropriations Authority",
    "link": "https://www.federalregister.gov/executive-order/14196"
  },
  {
    "actionName": "Impose Tariffs on China for Synthetic Opioid Trade",
    "executiveOrder": "Executive Order 14195",
    "dateIssued": "February 1, 2025",
    "verdict": "Yes, he can.",
    "explanation": "Explanation: The President has broad trade powers to impose tariffs under IEEPA and the Trade Act to address national security threats.",
    "constitutionalIssues": "Legal Issues: Commerce Clause, Executive Authority in Foreign Trade",
    "link": "https://www.federalregister.gov/executive-order/14195"
  },
  {
    "actionName": "Impose Tariffs on Mexico Over Border Security",
    "executiveOrder": "Executive Order 14194",
    "dateIssued": "February 1, 2025",
    "verdict": "Yes, he can.",
    "explanation": "Explanation: The President can impose tariffs under IEEPA and NAFTA-related statutes to pressure Mexico on border enforcement.",
    "constitutionalIssues": "Legal Issues: Commerce Clause, Executive Authority in Trade Policy",
    "link": "https://www.federalregister.gov/executive-order/14194"
  },
  {
    "actionName": "Impose Tariffs on Canada Over Drug Trafficking",
    "executiveOrder": "Executive Order 14193",
    "dateIssued": "February 1, 2025",
    "verdict": "Yes, he can.",
    "explanation": "Explanation: The President can impose tariffs for national security under IEEPA and trade statutes but may face diplomatic challenges.",
    "constitutionalIssues": "Legal Issues: Commerce Clause, Executive Authority in Trade",
    "link": "https://www.federalregister.gov/executive-order/14193"
  },
  {
    "actionName": "Reduce Federal Regulations Through Deregulation Order",
    "executiveOrder": "Executive Order 14192",
    "dateIssued": "January 31, 2025",
    "verdict": "Maybe, he can.",
    "explanation": "Explanation: The President can direct agencies to eliminate regulations but cannot override laws requiring certain regulations.",
    "constitutionalIssues": "Legal Issues: Separation of Powers, Administrative Law",
    "link": "https://www.federalregister.gov/executive-order/14192"
  },
  {
    "actionName": "Expand Educational Choice for Families",
    "executiveOrder": "Executive Order 14191",
    "dateIssued": "January 29, 2025",
    "verdict": "Maybe, he can.",
    "explanation": "Explanation: The President can direct agencies to promote school choice but cannot force states to adopt such policies without congressional approval.",
    "constitutionalIssues": "Legal Issues: Spending Clause, Federalism",
    "link": "https://www.federalregister.gov/executive-order/14191"
  },
  {
    "actionName": "Eliminate 'Radical Indoctrination' in K-12 Education",
    "executiveOrder": "Executive Order 14190",
    "dateIssued": "January 29, 2025",
    "verdict": "No, he can't.",
    "explanation": "Explanation: The President can set federal education grant priorities but cannot dictate state or local curricula without congressional approval.",
    "constitutionalIssues": "Legal Issues: States' Rights (10th Amendment), Federalism",
    "link": "https://www.federalregister.gov/executive-order/14190"
  },
  {
    "actionName": "Celebrate America’s 250th Birthday",
    "executiveOrder": "Executive Order 14189",
    "dateIssued": "January 29, 2025",
    "verdict": "Yes, he can.",
    "explanation": "Explanation: The President can organize national celebrations and direct federal agencies to participate in commemorations.",
    "constitutionalIssues": "Legal Issues: Executive Authority",
    "link": "https://www.federalregister.gov/executive-order/14189"
  },
  {
    "actionName": "Combat Anti-Semitism on Campuses",
    "executiveOrder": "Executive Order 14188",
    "dateIssued": "January 29, 2025",
    "verdict": "Yes, he can.",
    "explanation": "Explanation: The President can direct federal agencies to enforce anti-discrimination laws in education and investigate civil rights violations.",
    "constitutionalIssues": "Legal Issues: Equal Protection (14th Amendment), Civil Rights Act Compliance",
    "link": "https://www.federalregister.gov/executive-order/14188"
  },
  {
    "actionName": "Ban Federal Support for Gender Transition Procedures for Minors",
    "executiveOrder": "Executive Order 14187",
    "dateIssued": "January 28, 2025",
    "verdict": "Maybe, he can.",
    "explanation": "Explanation: The President can limit federal funding but cannot prohibit states from allowing such procedures under their laws.",
    "constitutionalIssues": "Legal Issues: Spending Clause, Federalism, Equal Protection (14th Amendment)",
    "link": "https://www.federalregister.gov/executive-order/14187"
  },
  {
    "actionName": "Develop Nationwide Missile Defense System",
    "executiveOrder": "Executive Order 14186",
    "dateIssued": "January 27, 2025",
    "verdict": "Maybe, he can.",
    "explanation": "Explanation: The President can direct missile defense development but requires congressional funding for large-scale deployment.",
    "constitutionalIssues": "Legal Issues: Executive Authority, Congressional Power of the Purse",
    "link": "https://www.federalregister.gov/executive-order/14186"
  },
  {
    "actionName": "Eliminate DEI Initiatives in the Military",
    "executiveOrder": "Executive Order 14185",
    "dateIssued": "January 27, 2025",
    "verdict": "Maybe, he can.",
    "explanation": "Explanation: The President can restructure military training but cannot override existing anti-discrimination laws.",
    "constitutionalIssues": "Legal Issues: Equal Protection (14th Amendment), Military Command Authority",
    "link": "https://www.federalregister.gov/executive-order/14185"
  },
  {
    "actionName": "Reinstate Service Members Discharged Over COVID-19 Vaccine Mandate",
    "executiveOrder": "Executive Order 14184",
    "dateIssued": "January 27, 2025",
    "verdict": "Yes, he can.",
    "explanation": "Explanation: The President can reinstate discharged personnel and grant back pay through executive discretion.",
    "constitutionalIssues": "Legal Issues: Executive Authority, Military Personnel Management",
    "link": "https://www.federalregister.gov/executive-order/14184"
  },
  {
    "actionName": "Restrict Military Service Based on Gender Identity",
    "executiveOrder": "Executive Order 14183",
    "dateIssued": "January 27, 2025",
    "verdict": "Maybe, he can.",
    "explanation": "Explanation: The President can set military service criteria but faces legal challenges under equal protection and anti-discrimination laws.",
    "constitutionalIssues": "Legal Issues: Equal Protection (14th Amendment), Military Readiness",
    "link": "https://www.federalregister.gov/executive-order/14183"
  },
  {
    "actionName": "Enforce Restrictions on Federal Funding for Abortion",
    "executiveOrder": "Executive Order 14182",
    "dateIssued": "January 24, 2025",
    "verdict": "Yes, he can.",
    "explanation": "Explanation: The President can direct agencies to comply with congressionally enacted funding restrictions like the Hyde Amendment.",
    "constitutionalIssues": "Legal Issues: Spending Clause, Executive Authority",
    "link": "https://www.federalregister.gov/executive-order/14182"
  }, 
  {
    "actionName": "Provide Emergency Resources and Disaster Response in California",
    "executiveOrder": "Executive Order 14181",
    "dateIssued": "January 24, 2025",
    "verdict": "Maybe, he can.",
    "explanation": "Explanation: The President can direct federal agencies to provide emergency resources but cannot override state policies without congressional or judicial action.",
    "constitutionalIssues": "Legal Issues: Federalism, Spending Clause",
    "link": "https://www.federalregister.gov/executive-order/14181"
  },
  {
    "actionName": "Review and Reform FEMA",
    "executiveOrder": "Executive Order 14180",
    "dateIssued": "January 24, 2025",
    "verdict": "Yes, he can.",
    "explanation": "Explanation: The President can establish a review council to assess FEMA's effectiveness and recommend reforms.",
    "constitutionalIssues": "Legal Issues: Executive Authority, Administrative Law",
    "link": "https://www.federalregister.gov/executive-order/14180"
  },
  {
    "actionName": "Deregulate and Promote AI Development",
    "executiveOrder": "Executive Order 14179",
    "dateIssued": "January 23, 2025",
    "verdict": "Yes, he can.",
    "explanation": "Explanation: The President can modify federal AI policies and direct regulatory agencies but cannot override statutory requirements set by Congress.",
    "constitutionalIssues": "Legal Issues: Executive Authority, Separation of Powers",
    "link": "https://www.federalregister.gov/executive-order/14179"
  },
  {
    "actionName": "Promote Digital Financial Innovation and Ban Central Bank Digital Currencies",
    "executiveOrder": "Executive Order 14178",
    "dateIssued": "January 23, 2025",
    "verdict": "Maybe, he can.",
    "explanation": "Explanation: The President can promote digital asset policies but cannot unilaterally ban the development of a U.S. central bank digital currency without congressional action.",
    "constitutionalIssues": "Legal Issues: Separation of Powers, Commerce Clause",
    "link": "https://www.federalregister.gov/executive-order/14178"
  },
  {
    "actionName": "Reestablish the President’s Science and Technology Advisory Council",
    "executiveOrder": "Executive Order 14177",
    "dateIssued": "January 23, 2025",
    "verdict": "Yes, he can.",
    "explanation": "Explanation: The President has authority to establish advisory councils to guide executive decision-making.",
    "constitutionalIssues": "Legal Issues: Executive Authority",
    "link": "https://www.federalregister.gov/executive-order/14177"
  },
  {
    "actionName": "Declassify Records on Historic Assassinations",
    "executiveOrder": "Executive Order 14176",
    "dateIssued": "January 23, 2025",
    "verdict": "Yes, he can.",
    "explanation": "Explanation: The President has the authority to declassify government records unless restricted by law, national security concerns, or congressional oversight.",
    "constitutionalIssues": "Legal Issues: Executive Authority, National Security",
    "link": "https://www.federalregister.gov/executive-order/14176"
  },
  {
    "actionName": "Designate Ansar Allah (Houthis) as a Terrorist Organization",
    "executiveOrder": "Executive Order 14175",
    "dateIssued": "January 22, 2025",
    "verdict": "Yes, he can.",
    "explanation": "Explanation: The President can designate foreign entities as terrorist organizations under the Immigration and Nationality Act.",
    "constitutionalIssues": "Legal Issues: Executive Authority in Foreign Policy, National Security Powers",
    "link": "https://www.federalregister.gov/executive-order/14175"
  },
  {
    "actionName": "Revoke COVID-19 Vaccine Mandates for Federal Employees and Contractors",
    "executiveOrder": "Executive Order 14174",
    "dateIssued": "January 21, 2025",
    "verdict": "Yes, he can.",
    "explanation": "Explanation: The President can rescind previous executive orders regarding federal workforce policies.",
    "constitutionalIssues": "Legal Issues: Executive Authority, Administrative Law",
    "link": "https://www.federalregister.gov/executive-order/14174"
  },
  {
    "actionName": "Rescind Federal Diversity, Equity, and Inclusion (DEI) Programs",
    "executiveOrder": "Executive Order 14173",
    "dateIssued": "January 21, 2025",
    "verdict": "Maybe, he can.",
    "explanation": "Explanation: The President can rescind DEI policies in federal agencies but cannot override statutory protections against discrimination.",
    "constitutionalIssues": "Legal Issues: Equal Protection (14th Amendment), Civil Rights Act Compliance",
    "link": "https://www.federalregister.gov/executive-order/14173"
  },
  {
    "actionName": "Rename Geographic Landmarks",
    "executiveOrder": "Executive Order 14172",
    "dateIssued": "January 20, 2025",
    "verdict": "Maybe, he can.",
    "explanation": "Explanation: The President can propose name changes, but formal renaming requires congressional approval or administrative procedures.",
    "constitutionalIssues": "Legal Issues: Separation of Powers, Executive Authority",
    "link": "https://www.federalregister.gov/executive-order/14172"
  },
  {
    "actionName": "Increase Accountability in Policy-Influencing Federal Positions",
    "executiveOrder": "Executive Order 14171",
    "dateIssued": "January 20, 2025",
    "verdict": "Maybe, he can.",
    "explanation": "Explanation: The President can modify federal employment policies but cannot unilaterally remove civil service protections without congressional approval.",
    "constitutionalIssues": "Legal Issues: Separation of Powers, Due Process (5th Amendment)",
    "link": "https://www.federalregister.gov/executive-order/14171"
  },
  {
    "actionName": "Reform Federal Hiring Practices",
    "executiveOrder": "Executive Order 14170",
    "dateIssued": "January 20, 2025",
    "verdict": "Yes, he can.",
    "explanation": "Explanation: The President has authority to direct federal hiring policies within existing law, but legislative changes may be required for broader merit system reforms.",
    "constitutionalIssues": "Legal Issues: Executive Authority, Equal Protection (14th Amendment)",
    "link": "https://www.federalregister.gov/executive-order/14170"
  },
  {
    "actionName": "Pause and Review Foreign Aid Programs",
    "executiveOrder": "Executive Order 14169",
    "dateIssued": "January 20, 2025",
    "verdict": "Yes, he can.",
    "explanation": "Explanation: The President can pause and review foreign aid distribution but cannot unilaterally cancel congressionally appropriated funds without legislative approval.",
    "constitutionalIssues": "Legal Issues: Spending Clause, Executive Authority in Foreign Policy",
    "link": "https://www.federalregister.gov/executive-order/14169"
  },
  {
    "actionName": "Restrict Federal Recognition of Gender Identity",
    "executiveOrder": "Executive Order 14168",
    "dateIssued": "January 20, 2025",
    "verdict": "Maybe, he can.",
    "explanation": "Explanation: The President can define federal policy language but may face legal challenges under civil rights laws and Supreme Court precedent.",
    "constitutionalIssues": "Legal Issues: Equal Protection (14th Amendment), Separation of Powers",
    "link": "https://www.federalregister.gov/executive-order/14168"
  },
  {
    "actionName": "Expand Military Role in Border Security",
    "executiveOrder": "Executive Order 14167",
    "dateIssued": "January 20, 2025",
    "verdict": "No, he can't.",
    "explanation": "Explanation: The Posse Comitatus Act restricts military involvement in domestic law enforcement, and using troops to enforce immigration law likely requires congressional approval.",
    "constitutionalIssues": "Legal Issues: Posse Comitatus Act, Separation of Powers",
    "link": "https://www.federalregister.gov/executive-order/14167"
  },
  {
    "actionName": "Delay Enforcement of TikTok Ban",
    "executiveOrder": "Executive Order 14166",
    "dateIssued": "January 20, 2025",
    "verdict": "Maybe, he can.",
    "explanation": "Explanation: The President can delay enforcement through executive discretion but cannot unilaterally override a congressional ban without further legal action or legislative amendment.",
    "constitutionalIssues": "Legal Issues: Separation of Powers, Executive Authority in National Security",
    "link": "https://www.federalregister.gov/executive-order/14166"
  },
  {
    "actionName": "Strengthen Border Security Measures",
    "executiveOrder": "Executive Order 14165",
    "dateIssued": "January 20, 2025",
    "verdict": "Maybe, he can.",
    "explanation": "Explanation: The President can enhance border enforcement, but funding a border wall or altering asylum policies extensively requires congressional approval.",
    "constitutionalIssues": "Legal Issues: Spending Clause, States' Rights (10th Amendment), Due Process (5th Amendment)",
    "link": "https://www.federalregister.gov/executive-order/14165"
  },
  {
    "actionName": "Restore and Expand Federal Death Penalty",
    "executiveOrder": "Executive Order 14164",
    "dateIssued": "January 20, 2025",
    "verdict": "Yes, he can.",
    "explanation": "Explanation: The President can direct federal prosecutors to pursue the death penalty where allowed by law, but cannot override state laws or Supreme Court precedent.",
    "constitutionalIssues": "Legal Issues: Cruel and Unusual Punishment (8th Amendment), Separation of Powers",
    "link": "https://www.federalregister.gov/executive-order/14164"
  },
  {
    "actionName": "Suspend Refugee Admissions",
    "executiveOrder": "Executive Order 14163",
    "dateIssued": "January 20, 2025",
    "verdict": "Maybe, he can.",
    "explanation": "Explanation: The President has broad authority over refugee admissions but cannot permanently suspend the U.S. Refugee Admissions Program without congressional intervention.",
    "constitutionalIssues": "Legal Issues: Refugee Act of 1980, Due Process (5th Amendment)",
    "link": "https://www.federalregister.gov/executive-order/14163"
  },
  {
    "actionName": "Withdraw from International Climate Agreements",
    "executiveOrder": "Executive Order 14162",
    "dateIssued": "January 20, 2025",
    "verdict": "Yes, he can.",
    "explanation": "Explanation: The President can withdraw from agreements like the Paris Agreement without Senate approval, as they are executive agreements, not treaties.",
    "constitutionalIssues": "Legal Issues: Treaty Clause, Executive Authority in Foreign Policy",
    "link": "https://www.federalregister.gov/executive-order/14162"
  },
  {
    "actionName": "Enhance National Security Screening for Foreign Nationals",
    "executiveOrder": "Executive Order 14161",
    "dateIssued": "January 20, 2025",
    "verdict": "Maybe, he can.",
    "explanation": "Explanation: The President can set stricter vetting procedures for visas and entry, but blanket exclusions based on nationality or ideology may violate federal law, Supreme Court precedent, and international agreements.",
    "constitutionalIssues": "Legal Issues: Equal Protection (14th Amendment), Establishment Clause (First Amendment), Separation of Powers",
    "link": "https://www.federalregister.gov/executive-order/14161"
  },
  {
    "actionName": "End Birthright Citizenship",
    "executiveOrder": "Executive Order 14160",
    "dateIssued": "January 20, 2025",
    "verdict": "No, he can't.",
    "explanation": "Explanation: The 14th Amendment's Citizenship Clause guarantees birthright citizenship to 'all persons born in the United States and subject to its jurisdiction.' Any changes would require a constitutional amendment.",
    "constitutionalIssues": "Legal Issues: Citizenship Clause (14th Amendment), Separation of Powers",
    "link": "https://www.federalregister.gov/executive-order/14160"
  },

  {
    "actionName": "Enforce Strict Immigration Policies",
    "executiveOrder": "Executive Order 14159",
    "dateIssued": "January 20, 2025",
    "verdict": "Maybe, he can.",
    "explanation": "Explanation: The President has broad authority over immigration enforcement, but restricting asylum access, expanding deportation priorities, and penalizing sanctuary cities could face legal challenges under federal law and constitutional protections.",
    "constitutionalIssues": "Legal Issues: Due Process (5th Amendment), States' Rights (10th Amendment), Separation of Powers",
    "link": "https://www.federalregister.gov/executive-order/14159"
  },
  {
    "actionName": "Improve Government Efficiency Through Digital Modernization",
    "executiveOrder": "Executive Order 14158",
    "dateIssued": "January 20, 2025",
    "verdict": "Yes, he can.",
    "explanation": "Explanation: The President has the authority to direct executive agencies to improve efficiency and modernize digital services. However, implementing large-scale reorganizations may require congressional approval, particularly for funding changes.",
    "constitutionalIssues": "Legal Issues: Executive Authority, Spending Clause",
    "link": "https://www.federalregister.gov/executive-order/14158"
  },
  {
    "actionName": "Designate Cartels as Foreign Terrorist Organizations",
    "executiveOrder": "Executive Order 14157",
    "dateIssued": "January 20, 2025",
    "verdict": "Yes, he can.",
    "explanation": "Explanation: The President has authority to designate foreign groups as terrorist organizations under the Immigration and Nationality Act and the International Emergency Economic Powers Act.",
    "constitutionalIssues": "Legal Issues: Executive Authority in Foreign Policy, Separation of Powers",
    "link": "https://www.federalregister.gov/executive-order/14157"
  },
  {
    "actionName": "Declare a National Energy Emergency",
    "executiveOrder": "Executive Order 14156",
    "dateIssued": "January 20, 2025",
    "verdict": "Maybe, he can.",
    "explanation": "Explanation: The President has broad authority under the National Emergencies Act to declare emergencies, but using this declaration to circumvent environmental regulations, expedite permitting, or override state policies could face legal challenges.",
    "constitutionalIssues": "Legal Issues: Separation of Powers, Nondelegation Doctrine, Federalism",
    "link": "https://www.federalregister.gov/executive-order/14156"
  },
  {
    "actionName": "Withdraw the U.S. from the World Health Organization",
    "executiveOrder": "Executive Order 14155",
    "dateIssued": "January 20, 2025",
    "verdict": "Maybe, he can.",
    "explanation": "Explanation: The President can notify the United Nations of withdrawal under WHO’s constitution, but congressional approval may be required to stop funding or override statutory obligations related to global health cooperation.",
    "constitutionalIssues": "Legal Issues: Separation of Powers, Treaty Clause, Spending Clause",
    "link": "https://www.federalregister.gov/executive-order/14155"
  },
  {
    "actionName": "Deregulate Domestic Energy Production",
    "executiveOrder": "Executive Order 14154",
    "dateIssued": "January 20, 2025",
    "verdict": "Maybe, he can.",
    "explanation": "Explanation: The President can direct federal agencies to review and revise energy-related regulations, but fully repealing congressionally enacted environmental and energy laws would require legislative action.",
    "constitutionalIssues": "Legal Issues: Separation of Powers, Commerce Clause, Administrative Law",
    "link": "https://www.federalregister.gov/executive-order/14154"
  },
  {
    "actionName": "Expand Resource Development in Alaska",
    "executiveOrder": "Executive Order 14153",
    "dateIssued": "January 20, 2025",
    "verdict": "Maybe, he can.",
    "explanation": "Explanation: The President can modify executive policies related to federal lands, but reversing protections established by law, such as the Alaska National Interest Lands Conservation Act, may require congressional approval.",
    "constitutionalIssues": "Legal Issues: Property Clause, Separation of Powers, Environmental Law Compliance",
    "link": "https://www.federalregister.gov/executive-order/14153"
  },
  {
    "actionName": "Revoke Security Clearances for Former Officials",
    "executiveOrder": "Executive Order 14152",
    "dateIssued": "January 20, 2025",
    "verdict": "Yes, he can.",
    "explanation": "Explanation: The President, as Commander-in-Chief, has broad discretion over security clearances and can revoke them at will, though such actions could be challenged as politically motivated.",
    "constitutionalIssues": "Legal Issues: Executive Authority, Due Process (5th Amendment)",
    "link": "https://www.federalregister.gov/executive-order/14152"
  },
  {
      "actionName": "End DEI Programs in Federal Government",
      "executiveOrder": "Executive Order 14151",
      "dateIssued": "January 20, 2025",
      "verdict": "Maybe, he can.",
      "explanation": "Explanation: The President has authority to direct the executive branch on hiring and internal policies, including DEI programs. However, some elements—such as eliminating statutory DEI mandates or revoking anti-discrimination protections—could exceed executive power and require congressional action.",
      "constitutionalIssues": "Legal Issues: Equal Protection Clause (14th Amendment), Separation of Powers, Civil Rights Act Compliance",
      "link": "https://www.federalregister.gov/executive-order/14151"
    },
    {
      "actionName": "Launch an 'America First' Foreign Policy Directive",
      "executiveOrder": "Executive Order 14150",
      "dateIssued": "January 20, 2025",
      "verdict": "Yes, he can.",
      "explanation": "Explanation: The President has broad discretion over foreign policy and can direct the State Department to prioritize certain policies within existing law. However, treaty modifications or foreign aid changes might require congressional approval.",
      "constitutionalIssues": "Legal Issues: Article II (Executive Authority in Foreign Policy), Separation of Powers",
      "link": "https://www.federalregister.gov/executive-order/14150"
    },
    {
      "actionName": "End Federal Censorship of Speech",
      "executiveOrder": "Executive Order 14149",
      "dateIssued": "January 20, 2025",
      "verdict": "Maybe, he can.",
      "explanation": "Explanation: The President can direct federal agencies to refrain from speech moderation efforts, but the extent to which the government can restrict private companies from moderating content remains legally contested. Courts have struck down prior efforts to limit platforms’ ability to moderate speech.",
      "constitutionalIssues": "Legal Issues: Free Speech (First Amendment), Separation of Powers",
      "link": "https://www.federalregister.gov/executive-order/14149"
    },
    {
      "actionName": "Rescind Prior Executive Orders",
      "executiveOrder": "Executive Order 14148",
      "dateIssued": "January 20, 2025",
      "verdict": "Yes, he can.",
      "explanation": "Explanation: A President has the authority to revoke prior executive orders issued by past administrations unless they are based on statutory mandates that require congressional action for repeal.",
      "constitutionalIssues": "Legal Issues: Separation of Powers, Executive Authority",
      "link": "https://www.federalregister.gov/executive-order/14148"
    },
    {
      "actionName": "Investigate 'Weaponization' of Federal Agencies",
      "executiveOrder": "Executive Order 14147",
      "dateIssued": "January 20, 2025",
      "verdict": "Maybe, he can.",
      "explanation": "Explanation: The President can direct executive agencies to conduct internal reviews, but any punitive measures or legal actions against past officials would likely require congressional oversight or legal justification.",
      "constitutionalIssues": "Legal Issues: Due Process (5th Amendment), Separation of Powers, Executive Oversight of Law Enforcement",
      "link": "https://www.federalregister.gov/executive-order/14147"
    }
];

function renderCards(orders = cardData) {
  const grid = document.getElementById('ordersGrid');
  grid.innerHTML = ''; // Clear any existing content
  
  orders.forEach(card => {
    // Determine verdict class based on verdict text
    let verdictClass = "";
    const verdictLower = card.verdict.toLowerCase();
    if (verdictLower.includes("yes")) {
      verdictClass = "verdict-yes";
    } else if (verdictLower.includes("no")) {
      verdictClass = "verdict-no";
    } else {
      verdictClass = "verdict-maybe";
    }
    
    // Create the card container
    const cardEl = document.createElement('div');
    cardEl.classList.add('card');
    // Toggle the flip effect on click (only if not clicking the red circle)
    cardEl.addEventListener('click', function() {
      this.classList.toggle('flipped');
    });
    
    // Build the card's inner HTML with a red circle link in the top-right corner.
    // The red circle is now an anchor that opens card.link in a new tab.
    cardEl.innerHTML = `
      <div class="card-inner">
        <!-- Front Side -->
        <div class="card-front">
          <!-- Red circle link at top-right; clicking stops propagation -->
          <a class="red-circle" href="${card.link || '#'}" target="_blank" onclick="event.stopPropagation()">
           <img src="paper-icon.png" alt="EO Link Icon">
          </a>
          <div class="card-content">
            <div class="card-main">
              <h2 class="action-name">${card.actionName}</h2>
            </div>
            <div class="card-footer">
              <p class="eo-number">${card.executiveOrder}</p>
              <p class="date-issued">${card.dateIssued}</p>
            </div>
          </div>
        </div>
        <!-- Back Side -->
        <div class="card-back">
          <div class="card-content card-back-content">
            <div class="back-section verdict-section ${verdictClass}">
              <h2 class="verdict">${card.verdict}</h2>
            </div>
            <div class="back-section explanation-section">
              <p class="explanation">${card.explanation}</p>
            </div>
            <div class="back-section constitutional-section ${verdictClass}">
              <p class="constitutionalIssues">${card.constitutionalIssues}</p>
            </div>
          </div>
        </div>
    `;
    
    // Append the card to the grid container
    grid.appendChild(cardEl);
  });
}



// Search Functionality (filters by actionName, executiveOrder, or description)
function searchOrders() {
  const searchText = document.getElementById('searchBar').value.toLowerCase();
  const filtered = cardData.filter(card =>
    card.actionName.toLowerCase().includes(searchText) ||
    card.executiveOrder.toLowerCase().includes(searchText) ||
    card.explanation.toLowerCase().includes(searchText) ||
    card.constitutionalIssues.toLowerCase().includes(searchText)
  );
  renderCards(filtered);
}


// Initialize cards on page load
document.addEventListener('DOMContentLoaded', () => {
  renderCards();
});

document.addEventListener('DOMContentLoaded', () => {
  // Remove the overlay after 2.5 seconds
  setTimeout(() => {
    const overlay = document.getElementById('animation-overlay');
    overlay.style.display = 'none';
  }, 2500);

  // Add shake effect at collision (1.4 seconds)
  setTimeout(() => {
    document.getElementById('animation-overlay').classList.add('impact');
  }, 1400);
});
