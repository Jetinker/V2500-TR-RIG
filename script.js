
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
    bumperName: "Radial I/B",
    minTol_in: 0.050,   maxTol_in: 0.080,
    minTol_mm: 1.27,    maxTol_mm: 2.03,
    init_minTol_in: 0.050, init_maxTol_in: 0.080,
    init_minTol_mm: 1.27,  init_maxTol_mm: 2.03
  },
  {
    bumperName: "Radial O/B",
    minTol_in: 0.050,   maxTol_in: 0.080,
    minTol_mm: 1.27,    maxTol_mm: 2.03,
    init_minTol_in: 0.050, init_maxTol_in: 0.080,
    init_minTol_mm: 1.27,  init_maxTol_mm: 2.03
  }
];

const POS2 = [
  {
    bumperName: "Load Share I/B UP",
    minTol_in: 0,       maxTol_in: 0,
    minTol_mm: 0,       maxTol_mm: 0,
    init_minTol_in: 0,  init_maxTol_in: 0.143,
    init_minTol_mm: 0,  init_maxTol_mm: 3.63
  },
  {
    bumperName: "Load Share O/B UP",
    minTol_in: 0,       maxTol_in: 0,
    minTol_mm: 0,       maxTol_mm: 0,
    init_minTol_in: 0,  init_maxTol_in: 0.143,
    init_minTol_mm: 0,  init_maxTol_mm: 3.63
  },
  {
    bumperName: "Load Share I/B LOW",
    minTol_in: 0.002,   maxTol_in: 0.040,
    minTol_mm: 0.05,    maxTol_mm: 1.02,
    init_minTol_in: 0.002, init_maxTol_in: 0.206,
    init_minTol_mm: 0.05,  init_maxTol_mm: 5.23
  },
  {
    bumperName: "Load Share O/B LOW",
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
  if (isInit) {
    return useMM
      ? [obj.init_minTol_mm, obj.init_maxTol_mm]
      : [obj.init_minTol_in, obj.init_maxTol_in];
  } else {
    return useMM
      ? [obj.minTol_mm, obj.maxTol_mm]
      : [obj.minTol_in, obj.maxTol_in];
  }
}

function checkMeasurement(bumperName, value, minTol, maxTol, useMM) {
  const unitLabel = useMM ? "MM" : "IN";
  if (value >= minTol && value <= maxTol) {
    return `measurement at ${bumperName} is ${value.toFixed(3)} ${unitLabel} and is within tolerance\n\n`;
  } else {
    const midpoint = 0.5 * (minTol + maxTol);
    const correction = midpoint - value;
    if (correction > 0) {
      return `measurement at ${bumperName} is ${value.toFixed(3)} ${unitLabel} and is not within tolerance. REMOVE ${correction.toFixed(3)} ${unitLabel}\n\n`;
    } else {
      return `measurement at ${bumperName} is ${value.toFixed(3)} ${unitLabel} and is not within tolerance. ADD ${Math.abs(correction).toFixed(3)} ${unitLabel}\n\n`;
    }
  }
}

function checkBumpers() {
  const isInit = document.querySelector('input[name="initOption"]:checked').value === "1";
  const useMM = document.querySelector('input[name="unitOption"]:checked').value === "mm";

  let outputStr = "";
  for (let i = 0; i < 8; i++) {
    const textId = "bumper" + i;
    const inputField = document.getElementById(textId);
    const valStr = inputField.value.trim();
    if (valStr === "") {
      outputStr += `No measurement entered for ${POS1[i].bumperName}\n\n`;
    } else {
      const val = parseFloat(valStr);
      outputStr += checkMeasurement(POS1[i].bumperName, val, ...getTolerance(POS1[i], isInit, useMM), useMM);
    }
  }
  document.getElementById("bumperOutput").textContent = outputStr;
}

function checkCompStruts() {
  const isInit = document.querySelector('input[name="initOption"]:checked').value === "1";
  const useMM = document.querySelector('input[name="unitOption"]:checked').value === "mm";

  let outputStr = "";
  // Loop over comp struts: IDs ls4, ls5, ls6 correspond to POS2 indices 4-6
  for (let i = 4; i < 7; i++) {
    const textId = "ls" + i;
    const inputField = document.getElementById(textId);
    const valStr = inputField.value.trim();
    if (valStr === "") {
      outputStr += `No measurement entered for ${POS2[i].bumperName}\n\n`;
    } else {
      const val = parseFloat(valStr);
      outputStr += checkMeasurement(POS2[i].bumperName, val, ...getTolerance(POS2[i], isInit, useMM), useMM);
    }
  }
  document.getElementById("compStrutOutput").textContent = outputStr;
}

function checkBumpersAndCompStruts() {
  checkBumpers();
  checkCompStruts();
}

function checkLoadShare() {
  const isInit = document.querySelector('input[name="initOption"]:checked').value === "1";
  const useMM = document.querySelector('input[name="unitOption"]:checked').value === "mm";

  let outputStr = "";
  // Loop over load share measurements: IDs ls0, ls1, ls2, ls3 correspond to POS2 indices 0-3
  for (let i = 0; i < 4; i++) {
    const textId = "ls" + i;
    const inputField = document.getElementById(textId);
    const valStr = inputField.value.trim();
    if (valStr === "") {
      outputStr += `No measurement entered for ${POS2[i].bumperName}\n\n`;
    } else {
      const val = parseFloat(valStr);
      outputStr += checkMeasurement(POS2[i].bumperName, val, ...getTolerance(POS2[i], isInit, useMM), useMM);
    }
  }
  document.getElementById("lsOutput").textContent = outputStr;
}
