/******************************************************
 * Tolerance Data 
 ******************************************************/

// Instead of #define, we just store the array lengths:
const NUM_MEASUREMENTS_BUMPERS_RADIALS = 8;
const NUM_MEASUREMENTS_DH_COMPSTRUTS = 7;

// We'll store your "struct" data as arrays of objects
// Each object replicates your BUMPERS struct fields.
const POS1 = [
  {
    bumperName: "Bumper Upper 1",
    minTol_in: 0.002,   maxTol_in: 0.050,
    minTol_mm: 0.05,    maxTol_mm: 1.27,
    init_minTol_in: 0.002,  init_maxTol_in: 0.120,
    init_minTol_mm: 0.05,   init_maxTol_mm: 3.48
  },
  {
    bumperName: "Bumper Lower 1",
    minTol_in: 0.002,   maxTol_in: 0.040,
    minTol_mm: 0.05,    maxTol_mm: 1.02,
    init_minTol_in: 0.002,  init_maxTol_in: 0.120,
    init_minTol_mm: 0.05,   init_maxTol_mm: 3.48
  },
  {
    bumperName: "Bumper 2",
    minTol_in: 0.002,   maxTol_in: 0.040,
    minTol_mm: 0.05,    maxTol_mm: 1.02,
    init_minTol_in: 0.002,  init_maxTol_in: 0.120,
    init_minTol_mm: 0.05,   init_maxTol_mm: 3.48
  },
  {
    bumperName: "Bumper 3",
    minTol_in: 0.002,   maxTol_in: 0.040,
    minTol_mm: 0.05,    maxTol_mm: 1.02,
    init_minTol_in: 0.002,  init_maxTol_in: 0.120,
    init_minTol_mm: 0.05,   init_maxTol_mm: 3.48
  },
  {
    bumperName: "Bumper 4",
    minTol_in: 0.002,   maxTol_in: 0.040,
    minTol_mm: 0.05,    maxTol_mm: 1.02,
    init_minTol_in: 0.002,  init_maxTol_in: 0.120,
    init_minTol_mm: 0.05,   init_maxTol_mm: 3.48
  },
  {
    bumperName: "Bumper 5",
    minTol_in: 0.002,   maxTol_in: 0.040,
    minTol_mm: 0.05,    maxTol_mm: 1.02,
    init_minTol_in: 0.002,  init_maxTol_in: 0.120,
    init_minTol_mm: 0.05,   init_maxTol_mm: 3.48
  },
  {
    bumperName: "Radial L",
    minTol_in: 0.050,   maxTol_in: 0.080,
    minTol_mm: 1.27,    maxTol_mm: 2.03,
    init_minTol_in: 0.050,  init_maxTol_in: 0.080,
    init_minTol_mm: 1.27,   init_maxTol_mm: 2.03
  },
  {
    bumperName: "Radial R",
    minTol_in: 0.050,   maxTol_in: 0.080,
    minTol_mm: 1.27,    maxTol_mm: 2.03,
    init_minTol_in: 0.050,  init_maxTol_in: 0.080,
    init_minTol_mm: 1.27,   init_maxTol_mm: 2.03
  }
];

const POS2 = [
  {
    bumperName: "Load Share LH UP",
    minTol_in: 0,   maxTol_in: 0,
    minTol_mm: 0,   maxTol_mm: 0,
    init_minTol_in: 0,   init_maxTol_in: 0.143,
    init_minTol_mm: 0,   init_maxTol_mm: 3.63
  },
  {
    bumperName: "Load Share RH UP",
    minTol_in: 0,   maxTol_in: 0,
    minTol_mm: 0,   maxTol_mm: 0,
    init_minTol_in: 0,   init_maxTol_in: 0.143,
    init_minTol_mm: 0,   init_maxTol_mm: 3.63
  },
  {
    bumperName: "Load Share LH LOW",
    minTol_in: 0.002,   maxTol_in: 0.040,
    minTol_mm: 0.05,    maxTol_mm: 1.02,
    init_minTol_in: 0.002,  init_maxTol_in: 0.206,
    init_minTol_mm: 0.05,   init_maxTol_mm: 5.23
  },
  {
    bumperName: "Load Share RH LOW",
    minTol_in: 0.002,   maxTol_in: 0.040,
    minTol_mm: 0.05,    maxTol_mm: 1.02,
    init_minTol_in: 0.002,  init_maxTol_in: 0.206,
    init_minTol_mm: 0.05,   init_maxTol_mm: 5.23
  },
  {
    bumperName: "Comp strut FWD",
    minTol_in: 0.005,   maxTol_in: 0.030,
    minTol_mm: 0.127,   maxTol_mm: 0.762,
    init_minTol_in: 0.005,  init_maxTol_in: 0.030,
    init_minTol_mm: 0.127,  init_maxTol_mm: 0.762
  },
  {
    bumperName: "Comp strut MID",
    minTol_in: 0.005,   maxTol_in: 0.030,
    minTol_mm: 0.127,   maxTol_mm: 0.762,
    init_minTol_in: 0.005,  init_maxTol_in: 0.030,
    init_minTol_mm: 0.127,  init_maxTol_mm: 0.762
  },
  {
    bumperName: "Comp strut AFT",
    minTol_in: 0.005,   maxTol_in: 0.030,
    minTol_mm: 0.127,   maxTol_mm: 0.762,
    init_minTol_in: 0.005,  init_maxTol_in: 0.030,
    init_minTol_mm: 0.127,  init_maxTol_mm: 0.762
  }
];

/******************************************************
 * Main Logic: "Check" Functions 
 ******************************************************/

// This function reads the 8 bumper inputs from the HTML form
// and then calculates + displays results.
function checkBumpers() {
  // 1) Determine is_init from radio button
  const isInitRadio = document.querySelector('input[name="initOption"]:checked');
  const is_init = (isInitRadio && isInitRadio.value === "1");

  // 2) Determine measurement unit from radio
  const unitRadio = document.querySelector('input[name="unitOption"]:checked');
  const use_mm = (unitRadio && unitRadio.value === "mm");

  // Prepare an output area
  const bumperOutput = document.getElementById("bumperOutput");
  bumperOutput.innerHTML = ""; // Clear old results

  // 3) Loop through the 8 input fields & calculate tolerance
  for (let i = 0; i < NUM_MEASUREMENTS_BUMPERS_RADIALS; i++) {
    // Build an input id like "bumper0", "bumper1", etc.
    const inputId = "bumper" + i;
    const valString = document.getElementById(inputId).value.trim();
    const measurement = parseFloat(valString);

    if (isNaN(measurement)) {
      bumperOutput.innerHTML += `<p>${POS1[i].bumperName}: Invalid number!</p>`;
      continue;
    }

    // Based on is_init & use_mm, pick correct minTol / maxTol
    let minTol, maxTol;
    if (is_init && use_mm) {
      minTol = POS1[i].init_minTol_mm;
      maxTol = POS1[i].init_maxTol_mm;
    } else if (is_init && !use_mm) {
      minTol = POS1[i].init_minTol_in;
      maxTol = POS1[i].init_maxTol_in;
    } else if (!is_init && use_mm) {
      minTol = POS1[i].minTol_mm;
      maxTol = POS1[i].maxTol_mm;
    } else { // !is_init && !use_mm
      minTol = POS1[i].minTol_in;
      maxTol = POS1[i].maxTol_in;
    }

    // Perform the checks
    const unitStr = use_mm ? "MM" : "IN";
    if (measurement >= minTol && measurement <= maxTol) {
      bumperOutput.innerHTML += 
        `<p>${POS1[i].bumperName} = ${measurement.toFixed(3)} ${unitStr} is within tolerance.</p>`;
    } else if (measurement < minTol) {
      // Correction formula from your code: (measurement - minTol) * 2
      const correction = (measurement - minTol) * 2;
      bumperOutput.innerHTML += 
        `<p>${POS1[i].bumperName} = ${measurement.toFixed(3)} ${unitStr} is below min tolerance. REMOVE ${correction.toFixed(3)} ${unitStr}.</p>`;
    } else { 
      // measurement > maxTol
      let correction = 0;
      if (!use_mm && measurement > 0.13) {
        correction = (measurement - maxTol) * 1.09;
      } else if (!use_mm) {
        correction = (measurement - maxTol) * 1.3;
      } else if (use_mm && measurement > 2) {
        correction = (measurement - maxTol) * 1.25;
      } else {
        correction = (measurement - maxTol) * 1.4;
      }
      bumperOutput.innerHTML += 
        `<p>${POS1[i].bumperName} = ${measurement.toFixed(3)} ${unitStr} is above max tolerance. ADD ${correction.toFixed(3)} ${unitStr}.</p>`;
    }
  }
}

// This function reads the 7 "POS2" inputs from the HTML form
// and calculates + displays results for load share & comp struts.
function checkLoadShareAndStruts() {
  // 1) Determine is_init from radio button
  const isInitRadio = document.querySelector('input[name="initOption"]:checked');
  const is_init = (isInitRadio && isInitRadio.value === "1");

  // 2) Determine measurement unit from radio
  const unitRadio = document.querySelector('input[name="unitOption"]:checked');
  const use_mm = (unitRadio && unitRadio.value === "mm");

  // Prepare output area
  const lsOutput = document.getElementById("lsOutput");
  lsOutput.innerHTML = ""; // Clear old results

  // 3) Loop through the 7 input fields & do tolerance checks
  for (let i = 0; i < NUM_MEASUREMENTS_DH_COMPSTRUTS; i++) {
    const inputId = "ls" + i;
    const valString = document.getElementById(inputId).value.trim();
    const measurement = parseFloat(valString);

    if (isNaN(measurement)) {
      lsOutput.innerHTML += `<p>${POS2[i].bumperName}: Invalid number!</p>`;
      continue;
    }

    // Based on is_init & use_mm, pick correct minTol / maxTol
    let minTol, maxTol;
    if (is_init && use_mm) {
      minTol = POS2[i].init_minTol_mm;
      maxTol = POS2[i].init_maxTol_mm;
    } else if (is_init && !use_mm) {
      minTol = POS2[i].init_minTol_in;
      maxTol = POS2[i].init_maxTol_in;
    } else if (!is_init && use_mm) {
      minTol = POS2[i].minTol_mm;
      maxTol = POS2[i].maxTol_mm;
    } else {
      minTol = POS2[i].minTol_in;
      maxTol = POS2[i].maxTol_in;
    }

    let correction = 0.0;
    // Some custom corrections from your code:
    if (!is_init && (i === 0 || i === 1)) {
      // for "Load Share LH UP" / "Load Share RH UP" 
      // if measurement > maxTol => correction = measurement_set_2[i]; 
      if (measurement > maxTol) {
        correction = measurement; // your code: correction = measurement_set_2[i];
      }
    } else {
      if (measurement > maxTol) {
        if (measurement > 2.3) {
          correction = (measurement - maxTol) * 1.2;
        } else {
          correction = (measurement - maxTol) * 1.35;
        }
      } else if (measurement < minTol) {
        correction = (measurement - minTol) * 1.6;
      }
    }

    const unitStr = use_mm ? "MM" : "IN";

    // Check and display
    if (measurement < minTol) {
      lsOutput.innerHTML += 
        `<p>${POS2[i].bumperName} = ${measurement.toFixed(3)} ${unitStr}, is below min tolerance. REMOVE ${correction.toFixed(3)} ${unitStr}.</p>`;
    } else if (measurement > maxTol) {
      lsOutput.innerHTML += 
        `<p>${POS2[i].bumperName} = ${measurement.toFixed(3)} ${unitStr}, is above max tolerance. ADD ${correction.toFixed(3)} ${unitStr}.</p>`;
    } else {
      lsOutput.innerHTML += 
        `<p>${POS2[i].bumperName} = ${measurement.toFixed(3)} ${unitStr}, is within tolerance.</p>`;
    }
  }
}
