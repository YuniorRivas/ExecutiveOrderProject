// Sample data array for the cards
const cardData = [
    {
    "actionName": "Enhance National Security Screening for Foreign Nationals",
    "executiveOrder": "Executive Order 14161",
    "dateIssued": "January 20, 2025",
    "verdict": "Maybe, he can.",
    "explanation": "Explanation: The President can set stricter vetting procedures for visas and entry, but blanket exclusions based on nationality or ideology may violate federal law, Supreme Court precedent, and international agreements.",
    "constitutionalIssues": "Constitutional Issues: Equal Protection (14th Amendment), Establishment Clause (1st Amendment), Separation of Powers",
    "link": "https://www.federalregister.gov/executive-order/14147"
  },
  {
    "actionName": "End Birthright Citizenship",
    "executiveOrder": "Executive Order 14160",
    "dateIssued": "January 20, 2025",
    "verdict": "No, he can't.",
    "explanation": "Explanation: The 14th Amendment's Citizenship Clause guarantees birthright citizenship to 'all persons born in the United States and subject to its jurisdiction.' Supreme Court precedent strongly supports that children born on U.S. soil, regardless of parental immigration status, are citizens. Any changes would require a constitutional amendment.",
    "constitutionalIssues": "Constitutional Issues: 14th Amendment (Citizenship Clause), Separation of Powers",
    "link": "https://www.federalregister.gov/executive-order/14147"
  },

  {
    "actionName": "Enforce Strict Immigration Policies",
    "executiveOrder": "Executive Order 14159",
    "dateIssued": "January 20, 2025",
    "verdict": "Maybe, he can.",
    "explanation": "Explanation: The President has broad authority over immigration enforcement, but restricting asylum access, expanding deportation priorities, and penalizing sanctuary cities could face legal challenges under federal law and constitutional protections.",
    "constitutionalIssues": "Constitutional Issues: Due Process (5th Amendment), 10th Amendment (State Rights), Separation of Powers",
    "link": "https://www.federalregister.gov/executive-order/14147"
  },
  {
    "actionName": "Improve Government Efficiency Through Digital Modernization",
    "executiveOrder": "Executive Order 14158",
    "dateIssued": "January 20, 2025",
    "verdict": "Yes, he can.",
    "explanation": "Explanation: The President has the authority to direct executive agencies to improve efficiency and modernize digital services. However, implementing large-scale reorganizations may require congressional approval, particularly for funding changes.",
    "constitutionalIssues": "Constitutional Issues: Executive Authority, Spending Clause",
    "link": "https://www.federalregister.gov/executive-order/14147"
  },
  {
    "actionName": "Designate Cartels as Foreign Terrorist Organizations",
    "executiveOrder": "Executive Order 14157",
    "dateIssued": "January 20, 2025",
    "verdict": "Maybe, he can.",
    "explanation": "Explanation: The President has authority to designate foreign groups as terrorist organizations under the Immigration and Nationality Act and the International Emergency Economic Powers Act. However, applying these designations to cartels could create legal and diplomatic challenges, particularly in relations with Mexico and other allies.",
    "constitutionalIssues": "Constitutional Issues: Executive Authority in Foreign Policy, Separation of Powers",
    "link": "https://www.federalregister.gov/executive-order/14147"
  },
  {
    "actionName": "Declare a National Energy Emergency",
    "executiveOrder": "Executive Order 14156",
    "dateIssued": "January 20, 2025",
    "verdict": "Maybe, he can.",
    "explanation": "Explanation: The President has broad authority under the National Emergencies Act to declare emergencies, but using this declaration to circumvent environmental regulations, expedite permitting, or override state policies could face legal challenges and require congressional authorization.",
    "constitutionalIssues": "Constitutional Issues: Separation of Powers, Nondelegation Doctrine, Federalism",
    "link": "https://www.federalregister.gov/executive-order/14147"
  },
  {
    "actionName": "Withdraw the U.S. from the World Health Organization",
    "executiveOrder": "Executive Order 14155",
    "dateIssued": "January 20, 2025",
    "verdict": "Maybe, he can.",
    "explanation": "Explanation: The President can notify the United Nations of withdrawal under WHO’s constitution, but congressional approval may be required to stop funding or override statutory obligations related to global health cooperation.",
    "constitutionalIssues": "Constitutional Issues: Separation of Powers, Treaty Clause, Spending Clause",
    "link": "https://www.federalregister.gov/executive-order/14147"
  },
  {
    "actionName": "Deregulate Domestic Energy Production",
    "executiveOrder": "Executive Order 14154",
    "dateIssued": "January 20, 2025",
    "verdict": "Maybe, he can.",
    "explanation": "Explanation: The President can direct federal agencies to review and revise energy-related regulations, but fully repealing congressionally enacted environmental and energy laws would require legislative action.",
    "constitutionalIssues": "Constitutional Issues: Separation of Powers, Commerce Clause, Administrative Law",
    "link": "https://www.federalregister.gov/executive-order/14147"
  },
  {
    "actionName": "Expand Resource Development in Alaska",
    "executiveOrder": "Executive Order 14153",
    "dateIssued": "January 20, 2025",
    "verdict": "Maybe, he can.",
    "explanation": "Explanation: The President can modify executive policies related to federal lands, but reversing protections established by law, such as the Alaska National Interest Lands Conservation Act, may require congressional approval.",
    "constitutionalIssues": "Constitutional Issues: Property Clause, Separation of Powers, Environmental Law Compliance",
    "link": "https://www.federalregister.gov/executive-order/14147"
  },
  {
    "actionName": "Revoke Security Clearances for Former Officials",
    "executiveOrder": "Executive Order 14152",
    "dateIssued": "January 20, 2025",
    "verdict": "Yes, he can.",
    "explanation": "Explanation: The President, as Commander-in-Chief, has broad discretion over security clearances and can revoke them at will, though such actions could be challenged as politically motivated.",
    "constitutionalIssues": "Constitutional Issues: Executive Authority, Due Process (5th Amendment)",
    "link": "https://www.federalregister.gov/executive-order/14147"
  },
  {
      "actionName": "End DEI Programs in Federal Government",
      "executiveOrder": "Executive Order 14151",
      "dateIssued": "January 20, 2025",
      "verdict": "Maybe, he can.",
      "explanation": "The President has authority to direct the executive branch on hiring and internal policies, including DEI programs. However, some elements—such as eliminating statutory DEI mandates or revoking anti-discrimination protections—could exceed executive power and require congressional action.",
      "constitutionalIssues": "Equal Protection Clause (14th Amendment), Separation of Powers, Civil Rights Act Compliance",
      "link": "https://www.federalregister.gov/executive-order/14147"
    },
    {
      "actionName": "America First Foreign Policy Directive",
      "executiveOrder": "Executive Order 14150",
      "dateIssued": "January 20, 2025",
      "verdict": "Yes, he can.",
      "explanation": "The President has broad discretion over foreign policy and can direct the State Department to prioritize certain policies within existing law. However, treaty modifications or foreign aid changes might require congressional approval.",
      "constitutionalIssues": "Article II (Executive Authority in Foreign Policy), Separation of Powers",
      "link": "https://www.federalregister.gov/executive-order/14147"
    },
    {
      "actionName": "End Federal Censorship of Speech",
      "executiveOrder": "Executive Order 14149",
      "dateIssued": "January 20, 2025",
      "verdict": "Maybe, he can.",
      "explanation": "The President can direct federal agencies to refrain from speech moderation efforts, but the extent to which the government can restrict private companies from moderating content remains legally contested. Courts have struck down prior efforts to limit platforms’ ability to moderate speech.",
      "constitutionalIssues": "First Amendment (Free Speech), Separation of Powers",
      "link": "https://www.federalregister.gov/executive-order/14147"
    },
    {
      "actionName": "Rescind Prior Executive Orders",
      "executiveOrder": "Executive Order 14148",
      "dateIssued": "January 20, 2025",
      "verdict": "Yes, he can.",
      "explanation": "A President has the authority to revoke prior executive orders issued by past administrations unless they are based on statutory mandates that require congressional action for repeal.",
      "constitutionalIssues": "Separation of Powers, Executive Authority",
      "link": "https://www.federalregister.gov/executive-order/14147"
    },
    {
      "actionName": "Investigate 'Weaponization' of Federal Agencies",
      "executiveOrder": "Executive Order 14147",
      "dateIssued": "January 20, 2025",
      "verdict": "Maybe, he can.",
      "explanation": "The President can direct executive agencies to conduct internal reviews, but any punitive measures or legal actions against past officials would likely require congressional oversight or legal justification.",
      "constitutionalIssues": "Due Process (5th Amendment), Separation of Powers, Executive Oversight of Law Enforcement",
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
            <div class="back-section">
              <h2 class="verdict ${verdictClass}">${card.verdict}</h2>
            </div>
            <div class="back-section">
              <p class="explanation">${card.explanation}</p>
            </div>
            <div class="back-section">
              <p class="constitutionalIssues">${card.constitutionalIssues}</p>
            </div>
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
