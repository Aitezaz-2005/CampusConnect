// 1. Define event lists
const eventOptions = {
  trip: [
    "Hunza Valley & Attabad Lake",
    "Gwadar Beach Retreat",
    "Swat Valley Cultural Tour",
    "Ratti Gali Lake Trek",
    "Cholistan Desert Safari",
    "Skardu & Shigar Valley Exploration",
    "Neelum Valley Waterfall",
    "Mushkpuri & Miranjani Day Hike",
    "Fairy Meadows Weekend Trek"
  ],
  seminar: [
    "AI for Everyone",
    "The Psychology Behind UI/UX",
    "Climate Change",
    "From Idea to Startup",
    "Cybersecurity Basics",
    "The Power of Research",
    "Freelancing:Your Digital Career Start",
    "Design Thinking Workshop",
    "Digital Marketing in 2025"
  ],
  event: [
    "AI Bootcamp 2025",
    "Corporate Leadership Summit",
    "Climate Change",
    "Artistan Expo",
    "Pindi LitFest",
    "CodeStorm Hackathon",
    "Digital Marketing Summit",
    "Full-Stack Developer Bootcamp",
    "Women in Tech"
  ]
};

// // 2. Grab the two selects
// const typeSelect = document.getElementById("eventType");
// const nameSelect = document.getElementById("eventName");

// // 3. Populate names based on selected type
// function populateEventNames(type) {
//   // Clear existing
//   nameSelect.innerHTML = "";

//   // Add placeholder
//   const placeholder = document.createElement("option");
//   placeholder.value = "";
//   placeholder.textContent = type
//     ? `Select a ${type.charAt(0).toUpperCase() + type.slice(1)}`
//     : "Select an event first";
//   nameSelect.appendChild(placeholder);

//   // If valid type, add options
//   if (type && eventOptions[type]) {
//     eventOptions[type].forEach((eventName) => {
//       const opt = document.createElement("option");
//       opt.value = eventName;
//       opt.textContent = eventName;
//       nameSelect.appendChild(opt);
//     });
//   }
// }

// // 4. Listen for changes
// typeSelect.addEventListener("change", (e) => {
//   populateEventNames(e.target.value);
// });

// // 5. Initialize on page load
// document.addEventListener("DOMContentLoaded", () => {
//   populateEventNames(typeSelect.value);
// });


// 2. Grab the two selects
const typeSelect = document.getElementById("eventType");
const nameSelect = document.getElementById("eventName");

// 3. Populate names based on selected type
function populateEventNames(type) {
  nameSelect.innerHTML = "";

  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = type
    ? `Select a ${type.charAt(0).toUpperCase() + type.slice(1)}`
    : "Select an event first";
  nameSelect.appendChild(placeholder);

  if (type && eventOptions[type]) {
    eventOptions[type].forEach((eventName) => {
      const opt = document.createElement("option");
      opt.value = eventName;
      opt.textContent = eventName;
      nameSelect.appendChild(opt);
    });
  }
}

// 4. Read URL query parameters
function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    type: params.get("type"),
    name: params.get("name")
  };
}

// 5. On page load
document.addEventListener("DOMContentLoaded", () => {
  const { type, name } = getQueryParams();

  if (type && name) {
    typeSelect.value = type;
    populateEventNames(type);

    // Delay to ensure options populate
    setTimeout(() => {
      nameSelect.value = name;
    }, 10);
  } else {
    populateEventNames(typeSelect.value); // Fallback
  }
});

// 6. Update event name list when type is changed manually
typeSelect.addEventListener("change", (e) => {
  populateEventNames(e.target.value);
});

