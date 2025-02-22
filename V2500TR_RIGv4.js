

const POS1 = [
  {
    bumperName: "Bumper Upper 1",
    minTol_in: 0.002,   maxTol_in: 0.050,
    minTol_mm: 0.05,    maxTol_mm: 1.27,
    init_minTol_in: 0.002, init_maxTol_in: 0.120,
    init_minTol_mm: 0.05,  init_maxTol_mm: 3.48
  },
  {
    bumperName: "Bumper Lower 1",
    minTol_in: 0.002,   maxTol_in: 0.040,
    minTol_mm: 0.05,    maxTol_mm: 1.02,
    init_minTol_in: 0.002, init_maxTol_in: 0.120,
    init_minTol_mm: 0.05,  init_maxTol_mm: 3.48
  },
  {
    bumperName: "Bumper 2",
    minTol_in: 0.002,   maxTol_in: 0.040,
    minTol_mm: 0.05,    maxTol_mm: 1.02,
    init_minTol_in: 0.002, init_maxTol_in: 0.120,
    init_minTol_mm: 0.05,  init_maxTol_mm: 3.48
  },
  {
    bumperName: "Bumper 3",
    minTol_in: 0.002,   maxTol_in: 0.040,
    minTol_mm: 0.05,    maxTol_mm: 1.02,
    init_minTol_in: 0.002, init_maxTol_in: 0.120,
    init_minTol_mm: 0.05,  init_maxTol_mm: 3.48
  },
  {
    bumperName: "Bumper 4",
    minTol_in: 0.002,   maxTol_in: 0.040,
    minTol_mm: 0.05,    maxTol_mm: 1.02,
    init_minTol_in: 0.002, init_maxTol_in: 0.120,
    init_minTol_mm: 0.05,  init_maxTol_mm: 3.48
  },
  {
    bumperName: "Bumper 5",
    minTol_in: 0.002,   maxTol_in: 0.040,
    minTol_mm: 0.05,    maxTol_mm: 1.02,
    init_minTol_in: 0.002, init_maxTol_in: 0.120,
    init_minTol_mm: 0.05,  init_maxTol_mm: 3.48
  },
  {
    bumperName: "Radial L",
    minTol_in: 0.050,   maxTol_in: 0.080,
    minTol_mm: 1.27,    maxTol_mm: 2.03,
    init_minTol_in: 0.050, init_maxTol_in: 0.080,
    init_minTol_mm: 1.27,  init_maxTol_mm: 2.03
  },
  {
    bumperName: "Radial R",
    minTol_in: 0.050,   maxTol_in: 0.080,
    minTol_mm: 1.27,    maxTol_mm: 2.03,
    init_minTol_in: 0.050, init_maxTol_in: 0.080,
    init_minTol_mm: 1.27,  init_maxTol_mm: 2.03
  }
];

const POS2 = [
  {
    bumperName: "Load Share LH UP",
    minTol_in: 0,       maxTol_in: 0,
    minTol_mm: 0,       maxTol_mm: 0,
    init_minTol_in: 0,  init_maxTol_in: 0.143,
    init_minTol_mm: 0,  init_maxTol_mm: 3.63
  },
  {
    bumperName: "Load Share RH UP",
    minTol_in: 0,       maxTol_in: 0,
    minTol_mm: 0,       maxTol_mm: 0,
    init_minTol_in: 0,  init_maxTol_in: 0.143,
    init_minTol_mm: 0,  init_maxTol_mm: 3.63
  },
  {
    bumperName: "Load Share LH LOW",
    minTol_in: 0.002,   maxTol_in: 0.040,
    minTol_mm: 0.05,    maxTol_mm: 1.02,
    init_minTol_in: 0.002, init_maxTol_in: 0.206,
    init_minTol_mm: 0.05,  init_maxTol_mm: 5.23
  },
  {
    bumperName: "Load Share RH LOW",
    minTol_in: 0.002,   maxTol_in: 0.040,
    minTol_mm: 0.05,    maxTol_mm: 1.02,
    init_minTol_in: 0.002, init_maxTol_in: 0.206,
    init_minTol_mm: 0.05,  init_maxTol_mm: 5.23
  },
  {
    bumperName: "Comp strut FWD",
    minTol_in: 0.005,   maxTol_in: 0.030,
    minTol_mm: 0.127,   maxTol_mm: 0.762,
    init_minTol_in: 0.005, init_maxTol_in: 0.030,
    init_minTol_mm: 0.127, init_maxTol_mm: 0.762
  },
  {
    bumperName: "Comp strut MID",
    minTol_in: 0.005,   maxTol_in: 0.030,
    minTol_mm: 0.127,   maxTol_mm: 0.762,
    init_minTol_in: 0.005, init_maxTol_in: 0.030,
    init_minTol_mm: 0.127, init_maxTol_mm: 0.762
  },
  {
    bumperName: "Comp strut AFT",
    minTol_in: 0.005,   maxTol_in: 0.030,
    minTol_mm: 0.127,   maxTol_mm: 0.762,
    init_minTol_in: 0.005, init_maxTol_in: 0.030,
    init_minTol_mm: 0.127, init_maxTol_mm: 0.762
  }
];

function getTolerance(obj, isInit, useMM) {
  // obj: one of the POS1 or POS2 objects
  // returns [minTol, maxTol] based on the booleans
  if (isInit) {
    if (useMM) {
      return [obj.init_minTol_mm, obj.init_maxTol_mm];
    } else {
      return [obj.init_minTol_in, obj.init_maxTol_in];
    }
  } else {
    if (useMM) {
      return [obj.minTol_mm, obj.maxTol_mm];
    } else {
      return [obj.minTol_in, obj.maxTol_in];
    }
  }
}

function checkMeasurement(bumperName, value, minTol, maxTol, useMM) {
  const unitLabel = useMM ? "MM" : "IN";
  
  // If out of tolerance, compute the correction to midpoint
  if (value >= minTol && value <= maxTol) {
    return `measurement at ${bumperName} is ${value.toFixed(3)} ${unitLabel} and is within tolerance\n\n`;
  } else {
    // midpoint-based correction
    const midpoint = 0.5 * (minTol + maxTol);
    const correction = midpoint - value;
    if (correction > 0) {

      return `measurement at ${bumperName} is ${value.toFixed(3)} ${unitLabel} and is not within tolerance. ADD ${correction.toFixed(3)} ${unitLabel}\n\n`;
    } else {
    
      const removeVal = Math.abs(correction);
      return `measurement at ${bumperName} is ${value.toFixed(3)} ${unitLabel} and is not within tolerance. REMOVE ${removeVal.toFixed(3)} ${unitLabel}\n\n`;
    }
  }
}

function checkBumpers() {
  // 1) Determine if using init or rigging
  const initChoice = document.querySelector('input[name="initOption"]:checked').value; 
  const isInit = (initChoice === "1");

  // 2) Determine if using mm or in
  const unitChoice = document.querySelector('input[name="unitOption"]:checked').value;
  const useMM = (unitChoice === "mm");

  // 3) Grab the 8 bumper measurements from input fields
  const bumperVals = [];
  for (let i = 0; i < 8; i++) {
    const textId = "bumper" + i;
    const valStr = document.getElementById(textId).value;
    // Convert to float
    const val = parseFloat(valStr);
    bumperVals.push(isNaN(val) ? 0.0 : val); 
    // If user leaves blank or invalid, we treat it as 0.0
  }

  // 4) For each measurement, compare to tolerance
  let outputStr = "";
  for (let i = 0; i < 8; i++) {
    const [minTol, maxTol] = getTolerance(POS1[i], isInit, useMM);
    const resultLine = checkMeasurement(POS1[i].bumperName, bumperVals[i], minTol, maxTol, useMM);
    outputStr += resultLine;
  }

  // 5) Display results in #bumperOutput
  const outputDiv = document.getElementById("bumperOutput");
  outputDiv.textContent = outputStr;
}

// Called when user clicks "Check Load Share & Struts"
function checkLoadShareAndStruts() {
  // 1) Determine if using init or rigging
  const initChoice = document.querySelector('input[name="initOption"]:checked').value; 
  const isInit = (initChoice === "1");

  // 2) Determine if using mm or in
  const unitChoice = document.querySelector('input[name="unitOption"]:checked').value;
  const useMM = (unitChoice === "mm");

  // 3) Grab the 7 measurements
  const lsVals = [];
  for (let i = 0; i < 7; i++) {
    const textId = "ls" + i;
    const valStr = document.getElementById(textId).value;
    const val = parseFloat(valStr);
    lsVals.push(isNaN(val) ? 0.0 : val);
  }

  // 4) For each measurement, compare to tolerance
  let outputStr = "";
  for (let i = 0; i < 7; i++) {
    const [minTol, maxTol] = getTolerance(POS2[i], isInit, useMM);
    const resultLine = checkMeasurement(POS2[i].bumperName, lsVals[i], minTol, maxTol, useMM);
    outputStr += resultLine;
  }

  // 5) Display results in #lsOutput
  const outputDiv = document.getElementById("lsOutput");
  outputDiv.textContent = outputStr;
}
