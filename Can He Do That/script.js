// Sample data array for the cards
const cardData = [
  {
    actionName: "Defund 'Sanctuary' Cities",
    executiveOrder: "Executive Order 14159",
    dateIssued: "January 20, 2025",
    verdict: "Maybe, he can.",
    explanation: "Explanation: The President has broad authority over immigration enforcement, but defunding 'sanctuary' cities exceeds executive authority and conflicts with existing federal laws.",
    constitutionalIssues: "Constitutional Issues: Separation of Powers, Spending Clause, 10th Amendment (State Rights)"
  },
  {
    actionName: "End Birthright Citizenship",
    executiveOrder: "Executive Order 14160",
    dateIssued: "January 20, 2025",
    verdict: "No, he can't.",
    explanation: "Explanation: Virtually all legal scholars – across the ideological spectrum – agree that the 14th Amendment grants citizenship to 'all persons born in the United States' and can only be changed by constitutional amendment.",
    constitutionalIssues: "Constitutional Issues: 14th Amendment (Citizenship Clause)"
  },
  {
    actionName: "Restrict Legal Recognition of Gender Identity",
    executiveOrder: "Executive Order 14168",
    dateIssued: "January 20, 2025",
    verdict: "Maybe, he can.",
    explanation: "Explanation: The President can direct how federal agencies enforce laws, but this order conflicts with Supreme Court precedent and likely violates equal protection by targeting transgender and intersex individuals.",
    constitutionalIssues: "Constitutional Issues: 14th Amendment (Equal Protection), Separation of Powers"
  },
  {
    actionName: "Ban Gender-Affirming Care for Minors",
    executiveOrder: "Executive Order 14187",
    dateIssued: "January 28, 2025",
    verdict: "Maybe, he can.",
    explanation: "Explanation: The President has influence over federal healthcare programs, but the order likely exceeds executive authority by interfering with state-regulated medical practices and contradicting federal non-discrimination laws.",
    constitutionalIssues: "Constitutional Issues: 14th Amendment (Equal Protection), 5th Amendment (Due Process), Spending Clause"
  },
  {
    actionName: "Increase Presidential Control Over Federal Agencies",
    executiveOrder: "Executive Order 14215",
    dateIssued: "February 18, 2025",
    verdict: "Maybe, he can.",
    explanation: "Explanation: The President has authority over executive agencies, but independent agencies were created by Congress to function without direct presidential oversight. This order likely violates separation of powers.",
    constitutionalIssues: "Constitutional Issues: Separation of Powers, Appointments Clause, Nondelegation Doctrine"
  },
  {
    actionName: "Declare a National Energy Emergency",
    executiveOrder: "Executive Order 14152",
    dateIssued: "January 20, 2025",
    verdict: "Maybe, he can.",
    explanation: "Explanation: The President has authority to declare national emergencies and influence energy policy, but the scope and impact of such declarations can be subject to legal challenges and require legislative support.",
    constitutionalIssues: "Constitutional Issues: Article II (Executive Powers), Commerce Clause"
  },
  {
    actionName: "Withdraw from the World Health Organization (WHO)",
    executiveOrder: "Executive Order 14155",
    dateIssued: "January 20, 2025",
    verdict: "Yes, he can.",
    explanation: "Explanation: The President has the authority to direct foreign policy decisions, including withdrawing from international organizations, though such actions may have diplomatic and legislative implications.",
    constitutionalIssues: "Constitutional Issues: Article II (Executive Powers), Treaty Clause"
  },
  {
    actionName: "Create the 'Department of Government Efficiency (DOGE)'",
    executiveOrder: "Executive Order 14158",
    dateIssued: "February 26, 2025",
    verdict: "Yes, he can.",
    explanation: "Explanation: The President can reorganize executive departments within the federal government, as long as they comply with existing laws and regulations.",
    constitutionalIssues: "Constitutional Issues: Article II (Executive Powers), Take Care Clause"
  },
  {
    actionName: "Establish a Council on Energy Dominance",
    executiveOrder: "Executive Order 14170",
    dateIssued: "February 14, 2025",
    verdict: "Yes, he can.",
    explanation: "Explanation: The President can establish advisory councils and set energy policy priorities within the scope of executive authority.",
    constitutionalIssues: "Constitutional Issues: Article II (Executive Powers), Commerce Clause"
  },
  {
    actionName: "Prohibit Federal Funding for Schools with COVID-19 Vaccine Mandates",
    executiveOrder: "Executive Order 14171",
    dateIssued: "February 14, 2025",
    verdict: "Maybe, he can.",
    explanation: "Explanation: While the federal government can set conditions on funding, outright prohibitions may face legal challenges based on states' rights and public health considerations.",
    constitutionalIssues: "Constitutional Issues: Spending Clause, 10th Amendment (State Rights)"
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
    // Toggle the flip effect on click
    cardEl.addEventListener('click', function() {
      this.classList.toggle('flipped');
    });
    
    // Build the card's inner HTML with updated structure for front and back sides
    cardEl.innerHTML = `
      <div class="card-inner">
        <!-- Front Side -->
        <div class="card-front">
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
    card.description.toLowerCase().includes(searchText)
  );
  renderCards(filtered);
}

// Initialize Page with Cards on DOM load
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
