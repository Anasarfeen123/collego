/* ==========================================================================
   COLLEGO — INTERACTIVE APP CONTROLLER & MOCK DATA ENGINES
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. DATA STORES (Mock Admissions & Forums Data)
// --------------------------------------------------------------------------

// College Cutoff Dataset (JEE Advanced Ranks)
const COLLEGE_DATABASE = [
  {
    id: "iit-bombay",
    name: "IIT Bombay",
    location: "Mumbai, Maharashtra",
    branch: "CSE",
    branchFull: "Computer Science & Engineering",
    openingRank: 1,
    closingRank: 68,
    medianPackage: "32.5 LPA",
    tuitionFees: "2.2 Lakhs / Yr",
    studentRatio: "12:1",
    description: "The premier engineering institute in India, renowned for its cutting-edge computing research, stellar startup incubator (SINE), and high placements.",
    placements: "98% placement rate. Top recruiters include Google, Microsoft, Rubrik, and Jane Street."
  },
  {
    id: "iit-delhi",
    name: "IIT Delhi",
    location: "New Delhi, Delhi",
    branch: "CSE",
    branchFull: "Computer Science & Engineering",
    openingRank: 15,
    closingRank: 115,
    medianPackage: "30.0 LPA",
    tuitionFees: "2.2 Lakhs / Yr",
    studentRatio: "14:1",
    description: "Located in the capital city, IIT Delhi offers a vibrant technological ecosystem with special emphasis on AI, machine learning, and entrepreneurship.",
    placements: "Average package of 25.8 LPA for tech divisions. High international placement records."
  },
  {
    id: "iit-madras",
    name: "IIT Madras",
    location: "Chennai, Tamil Nadu",
    branch: "CSE",
    branchFull: "Computer Science & Engineering",
    openingRank: 25,
    closingRank: 148,
    medianPackage: "28.5 LPA",
    tuitionFees: "2.1 Lakhs / Yr",
    studentRatio: "13:1",
    description: "Ranked #1 by NIRF for multiple consecutive years, famous for its lush green campus and the largest research park in the country.",
    placements: "Recruiters include Apple, Nvidia, Uber, and Qualcomm. High percentage of core research roles."
  },
  {
    id: "iit-kanpur",
    name: "IIT Kanpur",
    location: "Kanpur, Uttar Pradesh",
    branch: "CSE",
    branchFull: "Computer Science & Engineering",
    openingRank: 50,
    closingRank: 215,
    medianPackage: "27.0 LPA",
    tuitionFees: "2.1 Lakhs / Yr",
    studentRatio: "11:1",
    description: "Known for its academic rigor, excellent computing facilities, and an active student-run glider flying club.",
    placements: "Strong algorithms/quant placement. High PhD admission conversion rates in US universities."
  },
  {
    id: "iit-kharagpur",
    name: "IIT Kharagpur",
    location: "Kharagpur, West Bengal",
    branch: "CSE",
    branchFull: "Computer Science & Engineering",
    openingRank: 80,
    closingRank: 290,
    medianPackage: "26.0 LPA",
    tuitionFees: "2.2 Lakhs / Yr",
    studentRatio: "15:1",
    description: "The oldest and largest IIT by area, featuring a rich alumni network and the famous spring festival, Spring Fest.",
    placements: "Massive batch size but maintains a robust 92% placement. Top finance and hardware companies visit."
  },
  {
    id: "bits-pilani",
    name: "BITS Pilani (Pilani Campus)",
    location: "Pilani, Rajasthan",
    branch: "CSE",
    branchFull: "Computer Science & Engineering",
    openingRank: 100,
    closingRank: 320,
    medianPackage: "27.0 LPA",
    tuitionFees: "4.8 Lakhs / Yr",
    studentRatio: "12:1",
    description: "A premier private university, legendary for its 'Zero Attendance' policy and practice school (co-op internship) system.",
    placements: "100% placement rate. Outstanding startup culture (founded founders of unicorn companies)."
  },
  {
    id: "iiit-hyderabad",
    name: "IIIT Hyderabad",
    location: "Gachibowli, Hyderabad",
    branch: "CSE",
    branchFull: "Computer Science & Engineering",
    openingRank: 60,
    closingRank: 250,
    medianPackage: "30.0 LPA",
    tuitionFees: "3.6 Lakhs / Yr",
    studentRatio: "10:1",
    description: "Focused exclusively on IT and electronics, hosting world-class labs in computer vision, natural language processing, and robotics.",
    placements: "Placements rival top 3 IITs. Highest domestic offer exceeded 80 LPA."
  },
  {
    id: "nit-trichy",
    name: "NIT Trichy",
    location: "Tiruchirappalli, Tamil Nadu",
    branch: "CSE",
    branchFull: "Computer Science & Engineering",
    openingRank: 120,
    closingRank: 410,
    medianPackage: "22.0 LPA",
    tuitionFees: "1.4 Lakhs / Yr",
    studentRatio: "16:1",
    description: "Ranked #1 among National Institutes of Technology. Features an outstanding student culture and strong industry ties.",
    placements: "97% placement in tech. Prominent recruiters include Amazon, Microsoft, and Texas Instruments."
  },
  {
    id: "bits-goa",
    name: "BITS Pilani (Goa Campus)",
    location: "Zuarinagar, Goa",
    branch: "CSE",
    branchFull: "Computer Science & Engineering",
    openingRank: 200,
    closingRank: 550,
    medianPackage: "24.0 LPA",
    tuitionFees: "4.8 Lakhs / Yr",
    studentRatio: "13:1",
    description: "Nestled on a scenic hill, BITS Goa shares the academic curriculum, co-op structures, and zero-attendance policies of the main campus.",
    placements: "Includes major tech brands. Solid summer internship conversions via Practice School II."
  },
  
  // Non-CSE Branches for variety
  {
    id: "iit-bombay-ece",
    name: "IIT Bombay",
    location: "Mumbai, Maharashtra",
    branch: "ECE",
    branchFull: "Electronics & Communication Engineering",
    openingRank: 80,
    closingRank: 290,
    medianPackage: "26.5 LPA",
    tuitionFees: "2.2 Lakhs / Yr",
    studentRatio: "12:1",
    description: "High research output in microelectronics, semiconductor design, and signal processing.",
    placements: "Highly sought after by semiconductor giants like Intel, Qualcomm, and Nvidia."
  },
  {
    id: "iit-delhi-ee",
    name: "IIT Delhi",
    location: "New Delhi, Delhi",
    branch: "EE",
    branchFull: "Electrical Engineering",
    openingRank: 150,
    closingRank: 420,
    medianPackage: "22.0 LPA",
    tuitionFees: "2.2 Lakhs / Yr",
    studentRatio: "14:1",
    description: "Comprehensive core electrical syllabus paired with advanced computing tracks.",
    placements: "Dual opportunities in core VLSI/Power systems and standard software development."
  },
  {
    id: "bits-pilani-ece",
    name: "BITS Pilani (Pilani Campus)",
    location: "Pilani, Rajasthan",
    branch: "ECE",
    branchFull: "Electronics & Communication Engineering",
    openingRank: 350,
    closingRank: 780,
    medianPackage: "21.5 LPA",
    tuitionFees: "4.8 Lakhs / Yr",
    studentRatio: "12:1",
    description: "Combines microelectronics, communications, and digital system designs.",
    placements: "Excellent record in digital hardware designers and firmware engineers."
  }
];

// Forums Posts Database
let FORUM_POSTS = [
  {
    id: 1,
    tags: ["JOSAA", "BITS"],
    question: "Is it worth leaving BITS Pilani CSE (Goa) for IIT Roorkee Mechanical if I want to switch to tech?",
    summary: "My rank is 4500. I love coding but my parents are pushing for the 'IIT tag'. Looking for honest opinions from people in core branches...",
    author: "Aditya R.",
    authorInit: "A",
    votes: 142,
    upvoted: false
  },
  {
    id: 2,
    tags: ["Counselling", "JOSAA"],
    question: "Mistakes to avoid in JOSAA Choice Filling List!",
    summary: "Last year I saw people with 10k ranks filling BITS CS in lower priority than standard state colleges. Here is my comprehensive guide to arranging choices...",
    author: "Prisha S.",
    authorInit: "P",
    votes: 305,
    upvoted: false
  },
  {
    id: 3,
    tags: ["CSE"],
    question: "Hostel life, mess reviews, and computing labs in IIT-B: Ask Me Anything",
    summary: "Fourth-year CSE student here. Happy to answer any questions regarding campus infrastructure, course workloads, or placement statistics.",
    author: "Rohan K.",
    authorInit: "R",
    votes: 88,
    upvoted: false
  },
  {
    id: 4,
    tags: ["Predictions"],
    question: "Expected cutoffs for BITS Goa CSE based on BITSAT score cards?",
    summary: "I got a BITSAT score of 312. Looking at last year's shifts, will the cutoff drop or inflate due to JEE Advanced timing delays?",
    author: "Kunal M.",
    authorInit: "K",
    votes: 45,
    upvoted: false
  }
];

// --------------------------------------------------------------------------
// 2. ROUTING ENGINE & PAGE NAVIGATION
// --------------------------------------------------------------------------
let previousPage = "landing";
let currentPage = "landing";

window.navigateToPage = function(pageId) {
  if (pageId === currentPage) return;
  
  const currentView = document.getElementById(`page-${currentPage}`);
  const targetView = document.getElementById(`page-${pageId}`);
  const sweepOverlay = document.getElementById("pageTransitionSweep");
  
  if (!targetView) return;
  
  previousPage = currentPage;
  currentPage = pageId;
  
  // Trigger circular sweep animation
  if (sweepOverlay) {
    sweepOverlay.classList.remove("active");
    void sweepOverlay.offsetWidth; // Force reflow
    sweepOverlay.classList.add("active");
  }
  
  // Staggered sweep overlays cover screen at 350ms
  setTimeout(() => {
    if (currentView) {
      currentView.classList.remove("active", "leaving");
    }
    targetView.classList.add("active");
    document.getElementById("appCard").scrollTop = 0;
    
    if (pageId === "predictor") {
      runPrediction();
    } else if (pageId === "forums") {
      renderForumsFeed();
    }
  }, 350);
  
  // Clean up class
  setTimeout(() => {
    if (sweepOverlay) sweepOverlay.classList.remove("active");
  }, 1000);
  
  // Update Left Nav Active State
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach(item => {
    if (item.getAttribute("data-page") === pageId) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

window.goBackToPreviousPage = function() {
  window.navigateToPage(previousPage);
};

// Bind Left Nav Buttons
document.querySelectorAll(".nav-item").forEach(button => {
  button.addEventListener("click", () => {
    const targetPage = button.getAttribute("data-page");
    // If opening drawer, close them first
    closeAllDrawers();
    window.navigateToPage(targetPage);
  });
});

// --------------------------------------------------------------------------
// 3. WORKSPACE POPUPS & SLIDING DRAWER LOGIC
// --------------------------------------------------------------------------
const body = document.body;
const workspaceOverlay = document.getElementById("workspaceOverlay");

function closeAllDrawers() {
  body.classList.remove("ai-open", "preview-open", "notif-open", "command-open");
  workspaceOverlay.style.pointerEvents = "none";
}

// 3.1 AI COUNSELOR DRAWERS
document.getElementById("aiBtn").addEventListener("click", () => {
  const isOpen = body.classList.contains("ai-open");
  closeAllDrawers();
  if (!isOpen) {
    body.classList.add("ai-open");
    workspaceOverlay.style.pointerEvents = "auto";
  }
});

document.getElementById("closeAiBtn").addEventListener("click", closeAllDrawers);

// 3.2 NOTIFICATIONS DRAWER
document.getElementById("notifBtn").addEventListener("click", () => {
  const isOpen = body.classList.contains("notif-open");
  closeAllDrawers();
  if (!isOpen) {
    body.classList.add("notif-open");
    workspaceOverlay.style.pointerEvents = "auto";
    // Clear badge
    const badge = document.querySelector(".notif-badge");
    if (badge) badge.style.display = "none";
  }
});

document.getElementById("closeNotifBtn").addEventListener("click", closeAllDrawers);

// 3.3 COLLEGE PREVIEW DRAWER (Slide from bottom)
window.openCollegePreview = function(collegeId) {
  const college = COLLEGE_DATABASE.find(c => c.id === collegeId);
  if (!college) return;
  
  const previewContent = document.getElementById("previewContent");
  previewContent.innerHTML = `
    <div class="preview-grid">
      <div class="preview-detail-column">
        <h4>${college.name}</h4>
        <p class="text-purple" style="font-weight: 700;">${college.branchFull} (${college.branch})</p>
        <p>${college.description}</p>
        <div class="preview-action-btn-row">
          <button class="btn-primary" onclick="viewCollegeDetails('${college.id}')">
            <span class="btn-text">View Full Profile</span>
          </button>
        </div>
      </div>
      <div class="preview-detail-column" style="border-left: 1px solid rgba(255,255,255,0.1); padding-left: 24px;">
        <h4 style="color: #4FC3F7; font-size: 1.1rem;">Quick Statistics</h4>
        <div class="preview-stats-list" style="margin-top: 12px;">
          <div class="preview-stat-row">
            <span>Median Placements:</span>
            <strong>${college.medianPackage}</strong>
          </div>
          <div class="preview-stat-row">
            <span>Annual Tuition:</span>
            <strong>${college.tuitionFees}</strong>
          </div>
          <div class="preview-stat-row">
            <span>Student/Faculty Ratio:</span>
            <strong>${college.studentRatio}</strong>
          </div>
          <div class="preview-stat-row">
            <span>Last Cutoff Closing:</span>
            <strong style="color: var(--color-lime);">Rank #${college.closingRank}</strong>
          </div>
        </div>
      </div>
    </div>
  `;
  
  closeAllDrawers();
  body.classList.add("preview-open");
  workspaceOverlay.style.pointerEvents = "auto";
};

document.getElementById("closePreviewBtn").addEventListener("click", closeAllDrawers);

// Overlay click closes everything
workspaceOverlay.addEventListener("click", closeAllDrawers);

// --------------------------------------------------------------------------
// 4. SPOTLIGHT SEARCH (COMMAND PALETTE)
// --------------------------------------------------------------------------
const commandPalette = document.getElementById("commandPalette");
const cmdSearchInput = document.getElementById("commandSearchInput");
const searchBtn = document.getElementById("searchBtn");
const heroSearchBtn = document.getElementById("heroSearchBtn");
const heroSearchCapsule = document.getElementById("heroSearchCapsule");

function openCommandPalette() {
  closeAllDrawers();
  body.classList.add("command-open");
  cmdSearchInput.value = "";
  document.getElementById("commandSearchResultsSection").style.display = "none";
  document.getElementById("commandSuggestionsSection").style.display = "block";
  setTimeout(() => cmdSearchInput.focus(), 100);
}

function closeCommandPalette() {
  body.classList.remove("command-open");
}

// Triggers
searchBtn.addEventListener("click", openCommandPalette);
if (heroSearchBtn) heroSearchBtn.addEventListener("click", openCommandPalette);
if (heroSearchCapsule) heroSearchCapsule.addEventListener("click", openCommandPalette);

// Keyboard Event (Cmd + K or Ctrl + K)
window.addEventListener("keydown", (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key === "k") {
    e.preventDefault();
    if (body.classList.contains("command-open")) {
      closeCommandPalette();
    } else {
      openCommandPalette();
    }
  }
  if (e.key === "Escape") {
    closeCommandPalette();
    closeAllDrawers();
  }
});

// Click outside Command Box closes it
commandPalette.addEventListener("click", (e) => {
  if (e.target === commandPalette) {
    closeCommandPalette();
  }
});

window.handleCommandSearch = function() {
  const query = cmdSearchInput.value.toLowerCase().trim();
  const searchResultsSection = document.getElementById("commandSearchResultsSection");
  const suggestionsSection = document.getElementById("commandSuggestionsSection");
  const resultsList = document.getElementById("commandSearchResultsList");
  
  if (query === "") {
    searchResultsSection.style.display = "none";
    suggestionsSection.style.display = "block";
    return;
  }
  
  // Filter colleges
  const matches = COLLEGE_DATABASE.filter(c => 
    c.name.toLowerCase().includes(query) || 
    c.branchFull.toLowerCase().includes(query) ||
    c.branch.toLowerCase().includes(query)
  );
  
  suggestionsSection.style.display = "none";
  searchResultsSection.style.display = "block";
  resultsList.innerHTML = "";
  
  if (matches.length === 0) {
    resultsList.innerHTML = `<div style="padding: 12px; font-size: 0.9rem; color: rgba(255,255,255,0.4);">No matching options found. Try "BITS" or "IIT"</div>`;
    return;
  }
  
  matches.slice(0, 5).forEach(college => {
    const item = document.createElement("div");
    item.className = "command-result-item";
    item.innerHTML = `
      <span class="result-icon bg-lime">🎓</span>
      <span class="result-text">${college.name} — ${college.branch}</span>
      <span class="shortcut-desc">Rank #${college.closingRank}</span>
    `;
    item.addEventListener("click", () => {
      closeCommandPalette();
      window.openCollegePreview(college.id);
    });
    resultsList.appendChild(item);
  });
};

window.selectCommandAction = function(action) {
  closeCommandPalette();
  if (action === "nav:landing") window.navigateToPage("landing");
  if (action === "nav:predictor") window.navigateToPage("predictor");
  if (action === "nav:forums") window.navigateToPage("forums");
};

window.selectCommandSearchQuery = function(query) {
  cmdSearchInput.value = query;
  window.handleCommandSearch();
  cmdSearchInput.focus();
};

// --------------------------------------------------------------------------
// 5. COLLEGE PREDICTOR BUSINESS LOGIC
// --------------------------------------------------------------------------
let currentResultFilter = "ALL";

window.runPrediction = function() {
  const rank = parseInt(document.getElementById("studentRank").value) || 142;
  const category = document.getElementById("studentCategory").value;
  const branch = document.getElementById("preferredBranch").value;
  const resultsContainer = document.getElementById("predictorResultsList");
  
  // Clear and animate
  resultsContainer.innerHTML = `<div style="text-align:center; padding: 48px; font-family: var(--font-display); font-weight:700;">Recalculating odds on admissions radar...</div>`;
  
  setTimeout(() => {
    // Generate matches
    let matches = COLLEGE_DATABASE.map(college => {
      // Category multiplier adjustments (Mock calculations)
      let adjustedClosingRank = college.closingRank;
      if (category === "OBC-NCL") adjustedClosingRank *= 1.3;
      if (category === "SC") adjustedClosingRank *= 1.7;
      if (category === "ST") adjustedClosingRank *= 2.2;
      if (category === "EWS") adjustedClosingRank *= 1.15;
      
      adjustedClosingRank = Math.round(adjustedClosingRank);
      
      // Calculate odds
      let probability = 0;
      let badgeType = "";
      let badgeText = "";
      
      if (rank <= adjustedClosingRank * 0.8) {
        probability = Math.round(90 + (10 * (1 - (rank / (adjustedClosingRank * 0.8)))));
        if (probability > 99) probability = 99;
        badgeType = "success";
        badgeText = "HIGH CHANCE";
      } else if (rank <= adjustedClosingRank * 1.1) {
        probability = Math.round(50 + (40 * (1 - (rank - adjustedClosingRank * 0.8) / (adjustedClosingRank * 0.3))));
        badgeType = "warning";
        badgeText = "GOOD CHANCE";
      } else {
        probability = Math.round(15 + (35 * (adjustedClosingRank * 1.5 - rank) / (adjustedClosingRank * 0.4)));
        if (probability < 5) probability = 5;
        badgeType = "danger";
        badgeText = "RISKY MATCH";
      }
      
      return {
        ...college,
        adjustedClosingRank,
        probability,
        badgeType,
        badgeText
      };
    });
    
    // Filter by branch
    if (branch !== "ALL") {
      matches = matches.filter(m => m.branch === branch);
    }
    
    // Cache calculations
    window.currentPredictions = matches;
    renderPredictionResults();
  }, 400);
};

function renderPredictionResults() {
  const container = document.getElementById("predictorResultsList");
  container.innerHTML = "";
  
  let list = window.currentPredictions || [];
  
  // Filter by probability pill selection
  if (currentResultFilter === "HIGH") {
    list = list.filter(m => m.badgeType === "success");
  } else if (currentResultFilter === "MED") {
    list = list.filter(m => m.badgeType === "warning");
  } else if (currentResultFilter === "RISKY") {
    list = list.filter(m => m.badgeType === "danger");
  }
  
  if (list.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding: 48px; border: var(--border-thin); border-radius:20px; color: var(--color-ink-muted);">No colleges match this probability filter in this branch.</div>`;
    return;
  }
  
  list.forEach(match => {
    // Cutoff Bounds Meter Values
    // Start bounds = 60% of closing rank, End bounds = closing rank
    const meterMin = Math.round(match.adjustedClosingRank * 0.6);
    const meterMax = match.adjustedClosingRank;
    const studentRank = parseInt(document.getElementById("studentRank").value) || 142;
    
    // Determine position on range meter (0 to 100%)
    let dotPercent = ((studentRank - meterMin) / (meterMax - meterMin)) * 100;
    if (dotPercent < 0) dotPercent = 0;
    if (dotPercent > 100) dotPercent = 100;
    
    // Reverse bounds bar so lower rank is further left (better odds)
    // AI Reasoning sentence mapping
    let insightPhrase = "";
    if (match.badgeType === "success") {
      insightPhrase = `Your rank of <strong>#${studentRank}</strong> sits comfortably below the closing cutoff of <strong>#${match.adjustedClosingRank}</strong>, providing a strong safety buffer.`;
    } else if (match.badgeType === "warning") {
      insightPhrase = `You are close to the threshold. History suggests strong targets, but choice list backup is advised.`;
    } else {
      insightPhrase = `Reach options. Your rank exceeds last year's standard JOSAA closing, though CSAB special rounds may vary.`;
    }
    
    const card = document.createElement("article");
    card.className = "predictor-result-card";
    card.addEventListener("click", () => window.openCollegePreview(match.id));
    
    let probBadgeBg = "bg-lime";
    if (match.badgeType === "warning") probBadgeBg = "bg-sky";
    if (match.badgeType === "danger") probBadgeBg = "bg-alert-clay";
    
    card.innerHTML = `
      <div class="predictor-result-card-header">
        <div>
          <h3 class="predictor-college-name">${match.name}</h3>
          <p class="predictor-branch-name">${match.branchFull} (${match.branch})</p>
        </div>
        <span class="badge ${probBadgeBg}">${match.probability}% odds — ${match.badgeText}</span>
      </div>

      <div class="radar-bounds-meter">
        <div>
          <div class="bounds-bar-track">
            <div class="bounds-bar-range" style="left: 0%; width: 100%;"></div>
            <div class="bounds-indicator-dot ${match.badgeType === 'danger' ? 'risky' : (match.badgeType === 'warning' ? 'good' : '')}" style="left: ${dotPercent}%;"></div>
          </div>
          <div class="bounds-markers">
            <span>Opening: #${meterMin}</span>
            <span>Closing: #${meterMax}</span>
          </div>
        </div>
        <div class="cutoff-difference-label ${studentRank <= match.adjustedClosingRank ? 'diff-positive' : 'diff-negative'}">
          ${studentRank <= match.adjustedClosingRank ? `+${match.adjustedClosingRank - studentRank} ranks buffer` : `-${studentRank - match.adjustedClosingRank} ranks deficit`}
        </div>
      </div>

      <div class="predictor-insight-box" style="background-color: ${match.badgeType === 'danger' ? 'var(--color-alert-clay)' : (match.badgeType === 'success' ? 'var(--color-lime-light)' : 'var(--color-sky-light)')}">
        <span>✨</span>
        <p><strong>Insight:</strong> ${insightPhrase}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

window.filterResults = function(filterVal) {
  currentResultFilter = filterVal;
  
  // Set active class on filter pills
  const pills = document.querySelectorAll(".filter-pill");
  pills.forEach(pill => {
    if (pill.textContent.toLowerCase().includes(filterVal.toLowerCase()) || (filterVal === "ALL" && pill.textContent.toLowerCase().includes("all"))) {
      pill.classList.add("active");
    } else {
      pill.classList.remove("active");
    }
  });
  
  renderPredictionResults();
};

// --------------------------------------------------------------------------
// 6. STUDENT FORUMS COMPONENT & UPVOTING
// --------------------------------------------------------------------------
let currentForumFilter = "ALL";

window.renderForumsFeed = function() {
  const container = document.getElementById("forumsContainer");
  if (!container) return;
  
  container.innerHTML = "";
  
  let list = FORUM_POSTS;
  if (currentForumFilter !== "ALL") {
    list = list.filter(post => post.tags.some(t => t.toUpperCase() === currentForumFilter.toUpperCase()));
  }
  
  list.forEach(post => {
    const card = document.createElement("div");
    card.className = "forum-masonry-card editorial-card";
    // Route to details or alert
    card.addEventListener("click", () => {
      showToast("Topic View", `Opening conversation thread: "${post.question.slice(0, 30)}..."`, "info");
    });
    
    let tagHtml = "";
    post.tags.forEach(t => {
      let tagColorClass = "bg-orange-accent";
      if (t === "JOSAA" || t === "Counselling") tagColorClass = "bg-purple-accent";
      if (t === "CSE") tagColorClass = "bg-sky-accent";
      if (t === "Predictions") tagColorClass = "bg-lime-accent";
      tagHtml += `<span class="tag-pill ${tagColorClass}">#${t}</span>`;
    });
    
    card.innerHTML = `
      <div class="forum-card-tags">
        ${tagHtml}
      </div>
      <h3 class="forum-card-question">${post.question}</h3>
      <p class="forum-card-summary">${post.summary}</p>
      <div class="forum-card-footer">
        <div class="user-meta">
          <div class="user-avatar-mini" style="background-color: var(--color-purple); color: white;">${post.authorInit}</div>
          <span>${post.author}</span>
        </div>
        <button class="upvote-counter-button ${post.upvoted ? 'upvoted' : ''}" onclick="event.stopPropagation(); handleUpvote(this, ${post.id})">
          <span class="upvote-icon">▲</span>
          <span class="upvote-count">${post.votes}</span>
        </button>
      </div>
    `;
    container.appendChild(card);
  });
};

window.handleUpvote = function(button, postId) {
  const post = FORUM_POSTS.find(p => p.id === postId);
  if (!post) return;
  
  if (post.upvoted) {
    post.votes--;
    post.upvoted = false;
    button.classList.remove("upvoted");
  } else {
    post.votes++;
    post.upvoted = true;
    button.classList.add("upvoted");
    
    // Spawn float up visual particle
    spawnUpvoteParticle(button);
    
    // Trigger small micro haptic spring animation
    button.style.transform = "scale(1.25) rotate(-6deg)";
    setTimeout(() => {
      button.style.transform = "";
    }, 150);
  }
  
  button.querySelector(".upvote-count").textContent = post.votes;
};

window.filterForums = function(filterVal) {
  currentForumFilter = filterVal;
  
  const pills = document.querySelectorAll(".tag-selector-pill");
  pills.forEach(pill => {
    if (pill.textContent.toLowerCase().includes(filterVal.toLowerCase()) || (filterVal === "ALL" && pill.textContent.toLowerCase().includes("all"))) {
      pill.classList.add("active");
    } else {
      pill.classList.remove("active");
    }
  });
  
  renderForumsFeed();
};

window.searchForums = function() {
  const query = document.getElementById("forumSearchInput").value.toLowerCase().trim();
  const container = document.getElementById("forumsContainer");
  container.innerHTML = "";
  
  let matches = FORUM_POSTS.filter(post => 
    post.question.toLowerCase().includes(query) || 
    post.summary.toLowerCase().includes(query) ||
    post.author.toLowerCase().includes(query)
  );
  
  if (matches.length === 0) {
    container.innerHTML = `<div style="text-align:center; grid-column: 1/-1; padding: 48px; color:var(--color-ink-muted);">No forum results match your search query.</div>`;
    return;
  }
  
  matches.forEach(post => {
    // Code block replication of feed renderer
    const card = document.createElement("div");
    card.className = "forum-masonry-card editorial-card";
    
    let tagHtml = "";
    post.tags.forEach(t => {
      tagHtml += `<span class="tag-pill bg-sky-accent">#${t}</span>`;
    });
    
    card.innerHTML = `
      <div class="forum-card-tags">
        ${tagHtml}
      </div>
      <h3 class="forum-card-question">${post.question}</h3>
      <p class="forum-card-summary">${post.summary}</p>
      <div class="forum-card-footer">
        <div class="user-meta">
          <div class="user-avatar-mini" style="background-color: var(--color-purple); color: white;">${post.authorInit}</div>
          <span>${post.author}</span>
        </div>
        <button class="upvote-counter-button ${post.upvoted ? 'upvoted' : ''}" onclick="event.stopPropagation(); handleUpvote(this, ${post.id})">
          <span class="upvote-icon">▲</span>
          <span class="upvote-count">${post.votes}</span>
        </button>
      </div>
    `;
    container.appendChild(card);
  });
};

// 6.2 NEW FORUM TOPIC DIALOGS
const newPostModal = document.getElementById("newPostModal");

window.openNewDiscussionModal = function() {
  newPostModal.classList.add("active");
};

window.closeNewDiscussionModal = function() {
  newPostModal.classList.remove("active");
};

window.submitNewDiscussion = function() {
  const title = document.getElementById("postTitle").value;
  const cat = document.getElementById("postCategory").value;
  const summary = document.getElementById("postSummary").value;
  
  const newPost = {
    id: FORUM_POSTS.length + 1,
    tags: [cat],
    question: title,
    summary: summary,
    author: "Rohan K.",
    authorInit: "R",
    votes: 1,
    upvoted: true
  };
  
  FORUM_POSTS.unshift(newPost); // Add at top
  closeNewDiscussionModal();
  renderForumsFeed();
  showToast("Success", "Discussion posted successfully!", "success");
  
  // Clear inputs
  document.getElementById("postTitle").value = "";
  document.getElementById("postSummary").value = "";
};

// --------------------------------------------------------------------------
// 7. COLLEGE PROFILE DETAILED VIEW PAGE
// --------------------------------------------------------------------------
window.viewCollegeDetails = function(collegeId) {
  closeAllDrawers();
  window.navigateToPage("college");
  
  const college = COLLEGE_DATABASE.find(c => c.id === collegeId);
  if (!college) return;
  
  const container = document.getElementById("collegeProfileDetails");
  container.innerHTML = `
    <div class="college-profile-hero">
      <span class="section-tag bg-lime">COLLEGE DOSSIER</span>
      <h1>${college.name}</h1>
      <p style="font-size: 1.2rem; color: var(--color-ink-muted); font-weight: 600;">${college.location}</p>
    </div>

    <div class="college-profile-grid">
      <div class="profile-card-section">
        <div class="editorial-card">
          <h3 style="margin-bottom: 16px;">Branch Focus: ${college.branchFull}</h3>
          <p class="body-editorial" style="max-width: 100%; margin-bottom: 20px;">
            ${college.description}
          </p>
          <div class="info-grid">
            <div class="info-cell">
              <h5>Median Salary Package</h5>
              <p>${college.medianPackage}</p>
            </div>
            <div class="info-cell">
              <h5>Annual Tuition Costs</h5>
              <p>${college.tuitionFees}</p>
            </div>
            <div class="info-cell">
              <h5>Student to Faculty Ratio</h5>
              <p>${college.studentRatio}</p>
            </div>
            <div class="info-cell">
              <h5>Last Year's Closing Cutoff</h5>
              <p style="color: var(--color-purple);">Rank #${college.closingRank}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="profile-card-section">
        <div class="editorial-card" style="background-color: var(--color-purple-light); border-color: var(--color-purple);">
          <h3 style="color: #1C252C; margin-bottom: 12px;">Placement Statistics</h3>
          <p style="color: #1C252C; font-size: 0.95rem; line-height: 1.5;">${college.placements}</p>
        </div>

        <div class="editorial-card" style="background-color: var(--color-lime-light); border-color: var(--color-lime);">
          <h3 style="color: #1C252C; margin-bottom: 12px;">Campus Culture</h3>
          <p style="color: #1C252C; font-size: 0.95rem; line-height: 1.5;">Outstanding extracurricular environment with active technical clubs, design laboratories, and flexible attendance norms that promote self-development.</p>
        </div>
      </div>
    </div>
  `;
};

// --------------------------------------------------------------------------
// 8. DISPLAY SETTINGS & SYSTEM SYSTEMS
// --------------------------------------------------------------------------
window.switchSettingsTab = function(tabId) {
  const tabs = document.querySelectorAll(".settings-tab-btn");
  const panes = document.querySelectorAll(".settings-tab-view");
  
  tabs.forEach(btn => {
    if (btn.getAttribute("onclick").includes(tabId)) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
  
  panes.forEach(pane => {
    if (pane.id === `settings-tab-${tabId}`) {
      pane.classList.add("active");
    } else {
      pane.classList.remove("active");
    }
  });
};

window.setSystemTheme = function(theme) {
  const sunIcon = document.querySelector(".sun-icon");
  const moonIcon = document.querySelector(".moon-icon");
  
  const themeCards = document.querySelectorAll(".theme-card");
  themeCards.forEach(card => {
    if (card.classList.contains(theme)) {
      card.classList.add("active");
    } else {
      card.classList.remove("active");
    }
  });

  if (theme === "dark") {
    body.classList.remove("theme-light");
    body.classList.add("theme-dark");
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
    localStorage.setItem("collego-theme", "dark");
  } else {
    body.classList.remove("theme-dark");
    body.classList.add("theme-light");
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";
    localStorage.setItem("collego-theme", "light");
  }
  showToast("Theme Updated", `Switched interface to ${theme === 'dark' ? 'Deep Matte Workspace' : 'Parchment White'}.`, "success");
};

// Bind Theme Toggle Btn
document.getElementById("themeToggleBtn").addEventListener("click", () => {
  if (body.classList.contains("theme-dark")) {
    window.setSystemTheme("light");
  } else {
    window.setSystemTheme("dark");
  }
});

// Restore saved theme on startup
const savedTheme = localStorage.getItem("collego-theme") || "light";
if (savedTheme === "dark") {
  window.setSystemTheme("dark");
}

// --------------------------------------------------------------------------
// 9. FLOATING TOAST NOTIFICATION UTILITIES
// --------------------------------------------------------------------------
const toastContainer = document.getElementById("toastContainer");

window.showToast = function(title, message, type = "info") {
  const toast = document.createElement("div");
  toast.className = `toast-item ${type}`;
  
  let icon = "🔔";
  if (type === "success") icon = "✨";
  if (type === "warning") icon = "⚠️";
  
  toast.innerHTML = `
    <div class="toast-icon">${icon}</div>
    <div class="toast-content">
      <h4>${title}</h4>
      <p>${message}</p>
    </div>
    <button class="toast-close-btn" onclick="this.parentElement.remove()">&times;</button>
  `;
  
  toastContainer.appendChild(toast);
  
  // Auto-remove after 4 seconds
  setTimeout(() => {
    toast.remove();
  }, 4000);
};

// Initial welcome notifications
setTimeout(() => {
  window.showToast("Admission Planner Live", "👋 JOSAA Round 1 Choice Filling is active! Check your predicted targets in the Predictor tab.", "info");
}, 1200);

// --------------------------------------------------------------------------
// 10. AI ASSISTANT CHAT STREAM SIMULATOR
// --------------------------------------------------------------------------
window.sendChatMessage = function() {
  const input = document.getElementById("chatInput");
  const query = input.value.trim();
  if (query === "") return;
  
  const chatStream = document.getElementById("chatStream");
  
  // User message
  const userMsg = document.createElement("div");
  userMsg.className = "chat-message user";
  userMsg.innerHTML = `<p>${query}</p>`;
  chatStream.appendChild(userMsg);
  
  input.value = "";
  chatStream.scrollTop = chatStream.scrollHeight;
  
  // Bot typing delay simulator
  setTimeout(() => {
    const botMsg = document.createElement("div");
    botMsg.className = "chat-message bot";
    
    // Custom responses based on queries
    let botText = "";
    const lowerQ = query.toLowerCase();
    
    if (lowerQ.includes("iit bombay") || lowerQ.includes("iit-b")) {
      botText = "IIT Bombay is your top preference (General rank #142). Placements there average 32.5 LPA. Note that choice locking ends in 2 days, so put it on top! Do you want to see how it compares to IIT Delhi?";
    } else if (lowerQ.includes("bits") || lowerQ.includes("pilani")) {
      botText = "At BITS Pilani (main campus), CSE has a mock closing equivalent around rank 320. With rank #142, your odds are near 99%. It represents an outstanding safety backup option with zero attendance barriers.";
    } else if (lowerQ.includes("cutoff") || lowerQ.includes("round")) {
      botText = "The Round 1 cutoffs are predicted to drop by 2-5% this year due to candidate shifts toward electrical branches. I've updated the Predictor tool matching this logic.";
    } else {
      botText = "Interesting query! Our databases show that candidates with JEE Adv ranks between 100-200 prioritised IIT Bombay CSE, IIT Delhi CSE, and IIT Madras CSE. Make sure you fill those 3 options on your JOSAA lock form.";
    }
    
    botMsg.innerHTML = `<p>${botText}</p>`;
    chatStream.appendChild(botMsg);
    chatStream.scrollTop = chatStream.scrollHeight;
  }, 1000);
};

window.handleChatSubmit = function(event) {
  if (event.key === "Enter") {
    window.sendChatMessage();
  }
};

// --------------------------------------------------------------------------
// 11. DESIGN ITERATION INTERACTIVE & OS WORKSPACE SCRIPTING
// --------------------------------------------------------------------------

// 11.1 Real-Time Workspace System Status Clock
function updateWorkspaceClock() {
  const clockEl = document.getElementById("wsTime");
  if (!clockEl) return;
  const now = new Date();
  let hrs = String(now.getHours()).padStart(2, '0');
  let mins = String(now.getMinutes()).padStart(2, '0');
  let secs = String(now.getSeconds()).padStart(2, '0');
  clockEl.textContent = `${hrs}:${mins}:${secs}`;
}
setInterval(updateWorkspaceClock, 1000);
updateWorkspaceClock(); // Run immediately

// 11.2 Interactive Cursor Grid Flashlight Glow Follower
document.addEventListener("mousemove", (e) => {
  document.body.style.setProperty("--mouse-x", `${e.clientX}px`);
  document.body.style.setProperty("--mouse-y", `${e.clientY}px`);
});

// 11.3 Proximity Interactive Physics on Hero Geometry Canvas
const geomCanvas = document.querySelector(".geometry-canvas");
const shapes = [
  { id: "heroCircle", baseRot: 0, rx: 0, ry: 0 },
  { id: "heroSemicircle", baseRot: 0, rx: 0, ry: 0 },
  { id: "heroCylinder", baseRot: 0, rx: 0, ry: 0 }
];

if (geomCanvas) {
  geomCanvas.addEventListener("mousemove", (e) => {
    const rect = geomCanvas.getBoundingClientRect();
    const mX = e.clientX - rect.left;
    const mY = e.clientY - rect.top;
    
    shapes.forEach(shape => {
      const el = document.getElementById(shape.id);
      if (!el) return;
      
      // Determine center of shape
      const sRect = el.getBoundingClientRect();
      const sX = (sRect.left + sRect.width / 2) - rect.left;
      const sY = (sRect.top + sRect.height / 2) - rect.top;
      
      // Distance vector
      const dx = mX - sX;
      const dy = mY - sY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      // Repulsion force limit (within 160px)
      if (dist < 160) {
        const force = (160 - dist) / 160;
        shape.rx = - (dx / dist) * force * 18; // Pull/push along X
        shape.ry = - (dy / dist) * force * 18; // Pull/push along Y
        
        // Add rotate offset on proximity
        el.style.transform = `translate(${shape.rx}px, ${shape.ry}px) rotate(${force * 12}deg) scale(${1 + force * 0.08})`;
      } else {
        // Return gently to rest
        shape.rx *= 0.85;
        shape.ry *= 0.85;
        el.style.transform = `translate(${shape.rx}px, ${shape.ry}px) rotate(0deg) scale(1)`;
      }
    });
  });

  // Reset positions when mouse leaves
  geomCanvas.addEventListener("mouseleave", () => {
    shapes.forEach(shape => {
      const el = document.getElementById(shape.id);
      if (el) {
        el.style.transform = `translate(0px, 0px) rotate(0deg) scale(1)`;
        shape.rx = 0;
        shape.ry = 0;
      }
    });
  });
  
  // Interactive click pop animation
  shapes.forEach(shape => {
    const el = document.getElementById(shape.id);
    if (el) {
      el.addEventListener("click", () => {
        el.style.transition = "transform 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
        el.style.transform = "scale(1.3) rotate(-15deg)";
        showToast("Geometric Pop!", `You triggered a physical deformation on the ${shape.id === 'heroCircle' ? 'Sphere' : (shape.id === 'heroSemicircle' ? 'Semicircle' : 'Cylinder')}.`, "success");
        setTimeout(() => {
          el.style.transition = "";
          el.style.transform = "scale(1) rotate(0deg)";
        }, 300);
      });
    }
  });
}

// 11.4 Predictor Morphing Shape Path Changer
function updateProbabilityShape(badgeType) {
  const shapePath = document.getElementById("morphingShapePath");
  const svgEl = document.getElementById("predictorMorphingSvg");
  const labelEl = document.getElementById("visualizerShapeLabel");
  const descEl = document.getElementById("visualizerDescription");
  
  if (!shapePath || !svgEl) return;
  
  // Clear layout spin animation classes
  svgEl.classList.remove("spin-slow", "spin-medium", "distort-pulse");
  
  if (badgeType === "success") {
    // Morph to Circle
    shapePath.setAttribute("d", "M 50,10 A 40,40 0 1,1 49.9,10 Z");
    shapePath.setAttribute("fill", "var(--color-lime)");
    svgEl.classList.add("spin-slow");
    labelEl.textContent = "High Chance Match";
    descEl.innerHTML = "Your JEE Advanced score maps to a stable, low-entropy circular equilibrium. Excellent margin of safety.";
  } else if (badgeType === "warning") {
    // Morph to Rounded Triangle
    shapePath.setAttribute("d", "M 50,15 L 85,75 Q 88,80 80,80 L 20,80 Q 12,80 15,75 Z");
    shapePath.setAttribute("fill", "var(--color-sky)");
    svgEl.classList.add("spin-medium");
    labelEl.textContent = "Good Target";
    descEl.innerHTML = "A balanced three-sided target. Steady odds with solid baseline support. Recommended to back up.";
  } else {
    // Morph to Star / Jagged Star
    shapePath.setAttribute("d", "M 50,10 L 60,35 L 85,35 L 65,55 L 75,80 L 50,65 L 25,80 L 35,55 L 15,35 L 40,35 Z");
    shapePath.setAttribute("fill", "var(--color-alert-clay)");
    svgEl.classList.add("distort-pulse");
    labelEl.textContent = "Risky Option";
    descEl.innerHTML = "High-entropy jagged geometry. Volatile cutoff boundary conditions. Recommended only as reach targets.";
  }
}

// Interlock probability morpher into Predictor execution
const originalRunPrediction = window.runPrediction;
window.runPrediction = function() {
  const rank = parseInt(document.getElementById("studentRank").value) || 142;
  const category = document.getElementById("studentCategory").value;
  const branch = document.getElementById("preferredBranch").value;
  
  // Run primary calculator
  originalRunPrediction();
  
  // Compute best odds shape
  setTimeout(() => {
    if (window.currentPredictions && window.currentPredictions.length > 0) {
      // Find top matching card probability type
      const topBadge = window.currentPredictions[0].badgeType;
      updateProbabilityShape(topBadge);
    }
  }, 450);
};

// 11.5 Timeline Folding Drawer Toggle
window.toggleTimelineCard = function(card) {
  card.classList.toggle("unfolded");
  
  // Visual haptic pop toast
  if (card.classList.contains("unfolded")) {
    const title = card.querySelector(".milestone-title").textContent;
    showToast("Unfolding Timeline", `Unfolded counseling task checklist for: ${title}`, "info");
  }
};

// 11.6 Visual Haptic Particle Spawner (+1 Upvote bubble)
function spawnUpvoteParticle(element) {
  const rect = element.getBoundingClientRect();
  const particle = document.createElement("div");
  particle.className = "floating-particle";
  particle.textContent = "+1";
  particle.style.color = "var(--color-lime)";
  
  // Coordinate relative to viewport body
  particle.style.left = `${rect.left + rect.width / 2 - 8}px`;
  particle.style.top = `${rect.top - 12}px`;
  
  document.body.appendChild(particle);
  
  // Clean up
  setTimeout(() => {
    particle.remove();
  }, 600);
}
