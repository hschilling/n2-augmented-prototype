//color constants
var CONNECTION_COLOR = "black",
    UNKNOWN_IMPLICIT_COLOR = "orange",
    UNKNOWN_EXPLICIT_COLOR = "#AAA",
    RED_ARROW_COLOR = "salmon",
    GREEN_ARROW_COLOR = "seagreen",
    PARAM_COLOR = "Plum",
    UNCONNECTED_PARAM_COLOR = "#F42E0C",
    GROUP_COLOR = "steelblue",
    COMPONENT_COLOR = "DeepSkyBlue",
    COLLAPSED_COLOR = "#555";
HIGHLIGHT_HOVERED_COLOR = "blue";

// SOLVER
// var SCIPY_SOLVER_COLOR = "#de9292",
//     NO_SOLVER_COLOR = "#7fe4e4";

var linearSolverColors = {};
var linearSolverClasses = {} ;
colorsForLinearSolvers = ['#ffffcc','#c7e9b4','#7fcdbb','#41b6c4','#1d91c0','#225ea8','#0c2c84']; // used http://colorbrewer2.org to pick colors
classesForLinearSolvers = ["no_solver", "linear_block_jacobi_solver", "scipy_solver", "runonce_solver", "linalg_solve_solver", "petsc_krylov_solver", 
                        "block_gauss_seidel_solver", "user_defined_solver"]
linearSolverNames = ["None", "LN: LNBJ", "LN: SCIPY", "LN: RUNONCE", "LN: Direct", "LN: PETScKrylov", "LN: LNBGS", "LN: USER" ];
for (var i = 0; i < linearSolverNames.length; ++i) {
    linearSolverColors[linearSolverNames[i]] = colorsForLinearSolvers[i];
    linearSolverClasses[linearSolverNames[i]] = classesForLinearSolvers[i];
}

var nonLinearSolverColors = {};
var nonLinearSolverClasses = {} ;
colorsForNonLinearSolvers = ['#ffffcc','#c7e9b4','#7fcdbb','#41b6c4','#2c7fb8','#253494']; // used http://colorbrewer2.org to pick colors
classesForNonLinearSolvers = ["no_solver", "newton_solver", "nonlinear_block_jacobi_solver", "broyden", "nonlinear_block_gs", 
                        "runonce_nonlinear_solver", "user_defined_solver"]
nonLinearSolverNames = ["None", "NL: Newton", "NL: NLBJ", "BROYDEN", "NL: NLBGS", "NL: RUNONCE" ];
for (var i = 0; i < nonLinearSolverNames.length; ++i) {
    nonLinearSolverColors[nonLinearSolverNames[i]] = colorsForLinearSolvers[i];
    nonLinearSolverClasses[nonLinearSolverNames[i]] = classesForLinearSolvers[i];
}
// solverClasses["None"] = "no_solver";
// solverClasses["LN: LNBJ"] = "linear_block_jacobi_solver";
// solverClasses["LN: SCIPY"] = "scipy_solver"; // Krylov iterative solvers
// solverClasses["LN: RUNONCE"] = "runonce_solver";
// solverClasses["LN: Direct"] = "linalg_solve_solver"; // LinearSolver that uses linalg.solve or LU factor/solve
// solverClasses["LN: PETScKrylov"] = "petsc_krylov_solver"; // PetSC KSP to solve for a system's derivatives
// solverClasses["LN: LNBGS"] = "block_gauss_seidel_solver"; // Linear block Gauss-Seidel solver
// solverClasses["LN: USER"] = "user_defined_solver"; // user defined

// Later add these for nonlinear and linesearch ?
// Nonlinear
// NL: Newton
// NL: NLBJ
// BROYDEN
// NL: NLBGS
// NL: RUNONCE

// Linesearch
// LS: AG
// LS: BCHK




// SOLVER END

var widthPTreePx = 1,
    kx = 0, ky = 0, kx0 = 0, ky0 = 0,
    HEIGHT_PX = 600,
    PARENT_NODE_WIDTH_PX = 40,
    MIN_COLUMN_WIDTH_PX = 5,
    SVG_MARGIN = 1,
    TRANSITION_DURATION_FAST = 1000,
    TRANSITION_DURATION_SLOW = 1500,
    TRANSITION_DURATION = TRANSITION_DURATION_FAST,
    xScalerPTree = d3.scaleLinear().range([0, widthPTreePx]),
    yScalerPTree = d3.scaleLinear().range([0, HEIGHT_PX]),
    xScalerPTree0 = null,
    yScalerPTree0 = null,
    LEVEL_OF_DETAIL_THRESHOLD = HEIGHT_PX / 3; //3 pixels

// SOLVER
var widthPSolverTreePx = 1,
    kSolverx = 0, kSolvery = 0, kSolverx0 = 0, kSolvery0 = 0,
    xScalerPSolverTree = d3.scaleLinear().range([0, widthPSolverTreePx]),
    yScalerPSolverTree = d3.scaleLinear().range([0, HEIGHT_PX]),
    xScalerPSolverTree0 = null,
    yScalerPSolverTree0 = null;
// SOLVER END

// SOLVER
var showLinearSolverNames = true;
// SOLVER END

// SOLVER


// SOLVER END